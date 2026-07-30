const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const MAX_BODY_LENGTH = 12_000;
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 5_000;

interface ContactPayload {
  name: string;
  email: string;
  message: string;
  locale: 'id' | 'en';
}

interface Web3FormsResponse {
  success?: boolean;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function parseContactPayload(value: unknown): ContactPayload | null {
  if (!value || typeof value !== 'object') {
    return null;
  }

  const payload = value as Record<string, unknown>;
  const name = typeof payload.name === 'string' ? payload.name.trim() : '';
  const email = typeof payload.email === 'string' ? payload.email.trim() : '';
  const message = typeof payload.message === 'string' ? payload.message.trim() : '';
  const locale = payload.locale === 'en' ? 'en' : 'id';

  if (
    !name ||
    name.length > MAX_NAME_LENGTH ||
    !isValidEmail(email) ||
    email.length > MAX_EMAIL_LENGTH ||
    !message ||
    message.length > MAX_MESSAGE_LENGTH
  ) {
    return null;
  }

  return { name, email, message, locale };
}

export async function POST(request: Request) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY?.trim();

  if (!accessKey) {
    console.error('Contact form is unavailable: WEB3FORMS_ACCESS_KEY is not configured.');
    return Response.json(
      { success: false, error: 'contact_service_unavailable' },
      { status: 503 },
    );
  }

  try {
    const rawBody = await request.text();

    if (rawBody.length > MAX_BODY_LENGTH) {
      return Response.json(
        { success: false, error: 'payload_too_large' },
        { status: 413 },
      );
    }

    let parsedBody: unknown;

    try {
      parsedBody = JSON.parse(rawBody);
    } catch {
      return Response.json(
        { success: false, error: 'invalid_payload' },
        { status: 400 },
      );
    }

    const payload = parseContactPayload(parsedBody);

    if (!payload) {
      return Response.json(
        { success: false, error: 'invalid_payload' },
        { status: 400 },
      );
    }

    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: accessKey,
        name: payload.name,
        email: payload.email,
        message: payload.message,
        subject: `New portfolio message from ${payload.name}`,
        from_name: 'Dery Wahyu Perdana Portfolio',
        language: payload.locale === 'en' ? 'English' : 'Bahasa Indonesia',
        botcheck: false,
      }),
      cache: 'no-store',
      signal: AbortSignal.timeout(10_000),
    });

    const result = (await response.json().catch(() => null)) as Web3FormsResponse | null;

    if (!response.ok || result?.success !== true) {
      console.error(`Web3Forms rejected a contact submission with status ${response.status}.`);
      return Response.json(
        { success: false, error: 'provider_rejected_submission' },
        { status: 502 },
      );
    }

    return Response.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error(`Contact form submission failed: ${message}`);

    return Response.json(
      { success: false, error: 'submission_failed' },
      { status: 502 },
    );
  }
}
