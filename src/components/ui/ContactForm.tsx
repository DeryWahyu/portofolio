'use client';

import { useState, FormEvent } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import styles from './ContactForm.module.css';

interface FormState {
  name: string;
  email: string;
  message: string;
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function ContactForm() {
  const t = useTranslations('contact');
  const locale = useLocale();
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // Localized error messages
  const errRequiredName = locale === 'id' ? 'Nama wajib diisi' : 'Name is required';
  const errRequiredEmail = locale === 'id' ? 'Email wajib diisi' : 'Email is required';
  const errInvalidEmail = locale === 'id' ? 'Format email tidak valid' : 'Invalid email format';
  const errRequiredMsg = locale === 'id' ? 'Pesan wajib diisi' : 'Message is required';
  const labelSending = locale === 'id' ? 'Mengirim...' : 'Sending...';

  const errors = {
    name: touched.name && !form.name.trim() ? errRequiredName : '',
    email: touched.email
      ? !form.email.trim()
        ? errRequiredEmail
        : !validateEmail(form.email)
          ? errInvalidEmail
          : ''
      : '',
    message: touched.message && !form.message.trim() ? errRequiredMsg : '',
  };

  const isValid =
    form.name.trim() !== '' &&
    validateEmail(form.email) &&
    form.message.trim() !== '';

  function handleChange(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleBlur(field: keyof FormState) {
    setTouched((prev) => ({ ...prev, [field]: true }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    // Touch all fields to show validation
    setTouched({ name: true, email: true, message: true });

    if (!isValid) return;

    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
          locale,
        }),
      });
      const result = (await response.json().catch(() => null)) as
        | { success?: boolean }
        | null;

      if (response.ok && result?.success === true) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
        setTouched({});
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} aria-busy={status === 'loading'} noValidate>
      <div className={styles.fields}>
        {/* Name */}
        <div className={`${styles.field} ${errors.name ? styles.hasError : ''}`}>
          <label htmlFor="contact-name" className={styles.label}>
            {t('form_name')}
          </label>
          <input
            type="text"
            id="contact-name"
            name="name"
            className={styles.input}
            value={form.name}
            onChange={(e) => handleChange('name', e.target.value)}
            onBlur={() => handleBlur('name')}
            placeholder={t('placeholder_name')}
            disabled={status === 'loading'}
            autoComplete="name"
            required
            maxLength={100}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'contact-name-error' : undefined}
          />
          {errors.name && (
            <span id="contact-name-error" className={styles.errorText} role="alert">
              {errors.name}
            </span>
          )}
        </div>

        {/* Email */}
        <div className={`${styles.field} ${errors.email ? styles.hasError : ''}`}>
          <label htmlFor="contact-email" className={styles.label}>
            {t('form_email')}
          </label>
          <input
            type="email"
            id="contact-email"
            name="email"
            className={styles.input}
            value={form.email}
            onChange={(e) => handleChange('email', e.target.value)}
            onBlur={() => handleBlur('email')}
            placeholder={t('placeholder_email')}
            disabled={status === 'loading'}
            autoComplete="email"
            required
            maxLength={254}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'contact-email-error' : undefined}
          />
          {errors.email && (
            <span id="contact-email-error" className={styles.errorText} role="alert">
              {errors.email}
            </span>
          )}
        </div>
      </div>

      {/* Message */}
      <div className={`${styles.field} ${errors.message ? styles.hasError : ''}`}>
        <label htmlFor="contact-message" className={styles.label}>
          {t('form_message')}
        </label>
        <textarea
          id="contact-message"
          className={`${styles.input} ${styles.textarea}`}
          name="message"
          value={form.message}
          onChange={(e) => handleChange('message', e.target.value)}
          onBlur={() => handleBlur('message')}
          placeholder={t('placeholder_message')}
          disabled={status === 'loading'}
          rows={5}
          required
          maxLength={5000}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
        />
        {errors.message && (
          <span id="contact-message-error" className={styles.errorText} role="alert">
            {errors.message}
          </span>
        )}
      </div>

      {/* Submit */}
      <button
        className={styles.submitButton}
        type="submit"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? <Loader2 size={18} className={styles.spinner} aria-hidden="true" /> : <Send size={18} aria-hidden="true" />}
        {status === 'loading' ? labelSending : t('form_submit')}
      </button>

      {/* Toast */}
      {status === 'success' && (
        <div
          className={`${styles.toast} ${styles.toastSuccess}`}
          role="status"
          aria-live="polite"
        >
          <CheckCircle size={18} aria-hidden="true" />
          <span>{t('form_success')}</span>
        </div>
      )}
      {status === 'error' && (
        <div
          className={`${styles.toast} ${styles.toastError}`}
          role="alert"
          aria-live="assertive"
        >
          <AlertCircle size={18} aria-hidden="true" />
          <span>{t('form_error')}</span>
        </div>
      )}
    </form>
  );
}
