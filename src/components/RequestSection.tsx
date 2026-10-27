import { useState, type FormEvent } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { companyInfo } from '@/data/site';

type Status = 'idle' | 'error';

type FormState = {
  name: string;
  company: string;
  contact: string;
  message: string;
};

const initial: FormState = { name: '', company: '', contact: '', message: '' };

export function RequestSection() {
  const [form, setForm] = useState<FormState>(initial);
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  function validate(values: FormState) {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!values.name.trim()) next.name = 'Укажите, как к вам обращаться';
    if (!values.contact.trim()) {
      next.contact = 'Укажите телефон или e-mail для связи';
    } else if (!/^\S+@\S+\.\S+$/.test(values.contact) && !/^[+\d][\d\s\-()]{6,}$/.test(values.contact)) {
      next.contact = 'Введите корректный телефон или e-mail';
    }
    if (!values.message.trim()) next.message = 'Опишите, какие изделия вас интересуют';
    return next;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const next = validate(form);
    setErrors(next);
    if (Object.keys(next).length > 0) {
      setStatus('error');
      return;
    }
    // Реальный отправной механизм (почта, CRM, edge function) будет подключён
    // на следующих этапах. Сейчас форма готова к интеграции и не имитирует успех.
    setStatus('error');
    setErrors({ message: 'Отправка запроса пока не настроена. Свяжитесь с нами по телефону или e-mail — мы ответим в рабочее время.' });
  }

  function update(field: keyof FormState, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  }

  return (
    <section id="request" className="relative scroll-mt-20 bg-steel-950 py-20 text-white sm:py-28">
      <div className="absolute inset-0 bg-grid opacity-[0.06]" aria-hidden />
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-steel-500/60 to-transparent"
        aria-hidden
      />
      <div className="container-px relative">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Запрос предложения"
              title={
                <>
                  Отправьте параметры изделия —
                  <br className="hidden sm:block" /> подготовим коммерческое предложение
                </>
              }
              description="Укажите тип деталей, материал, диаметр и условия эксплуатации. По чертежам или техническим условиям изготовим как стандартные, так и нестандартные изделия."
              className="[&_h2]:text-white [&_p]:text-steel-100 [&_.text-steel-600]:text-steel-200 [&_span]:bg-steel-400"
            />

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <ContactCard label="Телефон" value={companyInfo.phone} href={companyInfo.phoneHref} />
              <ContactCard label="Электронная почта" value={companyInfo.email} href={companyInfo.emailHref} />
            </div>
            <p className="mt-6 max-w-md text-sm text-steel-200">
              Также вы можете направить чертежи и спецификации на нашу почту — это ускорит подготовку расчёта.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl border border-steel-700/60 bg-steel-900/60 p-6 shadow-panel-lg backdrop-blur-sm sm:p-8"
              aria-label="Форма запроса коммерческого предложения"
            >
              <div className="grid gap-5">
                <Field
                  label="Имя*"
                  name="name"
                  value={form.name}
                  onChange={(v) => update('name', v)}
                  error={errors.name}
                  placeholder="Иван Петров"
                  autoComplete="name"
                />
                <Field
                  label="Компания"
                  name="company"
                  value={form.company}
                  onChange={(v) => update('company', v)}
                  placeholder="ООО «Технологические системы»"
                  autoComplete="organization"
                />
                <Field
                  label="Телефон или e-mail*"
                  name="contact"
                  value={form.contact}
                  onChange={(v) => update('contact', v)}
                  error={errors.contact}
                  placeholder="+7 (___) ___-__-__ или name@company.ru"
                  autoComplete="tel"
                />
                <Field
                  label="Что требуется изготовить*"
                  name="message"
                  value={form.message}
                  onChange={(v) => update('message', v)}
                  error={errors.message}
                  placeholder="Например: отводы 90°, сталь 09Г2С, Ø219×8 — 50 шт."
                  textarea
                />

                {status === 'error' && errors.message && (
                  <div className="flex items-start gap-3 rounded-md border border-steel-600/50 bg-steel-800/60 p-3 text-sm text-steel-100">
                    <AlertCircle size={18} className="mt-0.5 shrink-0 text-warning-500" />
                    <span>{errors.message}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3.5 text-sm font-semibold text-steel-950 shadow-sm transition-all duration-200 hover:bg-steel-50 hover:shadow-panel active:scale-[0.99]"
                >
                  Отправить запрос
                  <Send
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </button>

                <p className="flex items-center gap-2 text-xs text-steel-300">
                  <CheckCircle2 size={14} className="text-steel-400" />
                  Отправляя форму, вы соглашаетесь на обработку технических данных для подготовки расчёта.
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ label, value, href }: { label: string; value: string; href: string }) {
  return (
    <a
      href={href}
      className="group rounded-xl border border-steel-700/60 bg-steel-900/40 p-5 transition-colors hover:border-steel-500 hover:bg-steel-800/50"
    >
      <div className="text-xs font-semibold uppercase tracking-[0.16em] text-steel-300">{label}</div>
      <div className="mt-2 text-lg font-semibold text-white group-hover:text-steel-100">{value}</div>
    </a>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  error,
  textarea,
  autoComplete,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  error?: string;
  textarea?: boolean;
  autoComplete?: string;
}) {
  const baseClass = error
    ? 'border-warning-500 focus:border-warning-500'
    : 'border-steel-700/60 focus:border-steel-400';

  const common = {
    id: name,
    name,
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      onChange(e.target.value),
    placeholder,
    'aria-invalid': !!error,
    'aria-describedby': error ? `${name}-error` : undefined,
    className: `w-full rounded-md border bg-steel-950/40 px-4 py-3 text-sm text-white placeholder:text-steel-400 transition-colors focus:outline-none focus:ring-2 focus:ring-steel-500/40 ${baseClass}`,
  };

  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-steel-100">
        {label}
      </label>
      {textarea ? (
        <textarea rows={3} {...common} />
      ) : (
        <input type="text" autoComplete={autoComplete} {...common} />
      )}
      {error && (
        <p id={`${name}-error`} className="mt-1.5 flex items-center gap-1.5 text-xs text-warning-500">
          <AlertCircle size={14} />
          {error}
        </p>
      )}
    </div>
  );
}
