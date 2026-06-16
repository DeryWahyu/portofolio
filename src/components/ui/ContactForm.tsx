'use client';

import { useState, FormEvent, useRef } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import Button from './Button';
import styles from './ContactForm.module.css';

interface FormState {
  name: string;
  email: string;
  message: string;
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const ACCESS_KEY = 'YOUR_ACCESS_KEY'; // User can replace this with their actual key

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function ContactForm() {
  const t = useTranslations('contact');
  const locale = useLocale();
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const formRef = useRef<HTMLFormElement>(null);

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
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (response.ok) {
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
    <form ref={formRef} className={styles.form} onSubmit={handleSubmit} noValidate>
      {/* Name */}
      <div className={`${styles.field} ${errors.name ? styles.hasError : ''} ${form.name ? styles.filled : ''}`}>
        <input
          type="text"
          id="contact-name"
          className={styles.input}
          value={form.name}
          onChange={(e) => handleChange('name', e.target.value)}
          onBlur={() => handleBlur('name')}
          placeholder=" "
          autoComplete="name"
        />
        <label htmlFor="contact-name" className={styles.label}>
          {t('form_name')}
        </label>
        <span className={styles.focusRing} />
        {errors.name && <span className={styles.errorText}>{errors.name}</span>}
      </div>

      {/* Email */}
      <div className={`${styles.field} ${errors.email ? styles.hasError : ''} ${form.email ? styles.filled : ''}`}>
        <input
          type="email"
          id="contact-email"
          className={styles.input}
          value={form.email}
          onChange={(e) => handleChange('email', e.target.value)}
          onBlur={() => handleBlur('email')}
          placeholder=" "
          autoComplete="email"
        />
        <label htmlFor="contact-email" className={styles.label}>
          {t('form_email')}
        </label>
        <span className={styles.focusRing} />
        {errors.email && <span className={styles.errorText}>{errors.email}</span>}
      </div>

      {/* Message */}
      <div className={`${styles.field} ${errors.message ? styles.hasError : ''} ${form.message ? styles.filled : ''}`}>
        <textarea
          id="contact-message"
          className={`${styles.input} ${styles.textarea}`}
          value={form.message}
          onChange={(e) => handleChange('message', e.target.value)}
          onBlur={() => handleBlur('message')}
          placeholder=" "
          rows={5}
        />
        <label htmlFor="contact-message" className={styles.label}>
          {t('form_message')}
        </label>
        <span className={styles.focusRing} />
        {errors.message && <span className={styles.errorText}>{errors.message}</span>}
      </div>

      {/* Submit */}
      <div className={styles.submitRow}>
        <Button
          variant="primary"
          size="lg"
          type="submit"
          disabled={status === 'loading'}
          icon={
            status === 'loading' ? (
              <Loader2 size={18} className={styles.spinner} />
            ) : (
              <Send size={18} />
            )
          }
        >
          {status === 'loading' ? labelSending : t('form_submit')}
        </Button>
      </div>

      {/* Toast */}
      {status === 'success' && (
        <div className={`${styles.toast} ${styles.toastSuccess}`}>
          <CheckCircle size={18} />
          <span>{t('form_success')}</span>
        </div>
      )}
      {status === 'error' && (
        <div className={`${styles.toast} ${styles.toastError}`}>
          <AlertCircle size={18} />
          <span>{t('form_error')}</span>
        </div>
      )}
    </form>
  );
}
