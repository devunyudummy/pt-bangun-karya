import { useState } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'
import { useLanguage } from '../context/LanguageContext'

function InfoRow({ icon, children }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 bg-primary-500/10 border border-primary-500/30 flex items-center
                      justify-center flex-shrink-0 mt-0.5">
        <span className="text-primary-500">{icon}</span>
      </div>
      <div className="font-sans text-gray-300 text-sm leading-relaxed">{children}</div>
    </div>
  )
}

export default function Contact() {
  const { t } = useLanguage()
  const [refL, visL]     = useScrollAnimation(0.1)
  const [refR, visR]     = useScrollAnimation(0.1)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm]  = useState({ name: '', email: '', phone: '', subject: '', message: '' })

  const cf = t('contact.form')

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    // Simulate send — replace with real backend/API
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      className="bg-coal-900 py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background stripe */}
      <div className="absolute inset-0 stripe-subtle opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-48 h-full stripe-yellow opacity-[0.04] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* ── Left: Info ── */}
          <div ref={refL}>
            <div className={`anim-left ${visL ? "anim-show" : ""}`}>
              <span className="section-eyebrow">
                <span className="w-8 h-px bg-primary-500 inline-block" />
                {t("contact.eyebrow")}
              </span>
              <h2 className="section-heading-light mt-2 whitespace-pre-line">
                {t("contact.heading")}
              </h2>
              <p className="text-gray-400 text-base leading-relaxed mt-5 font-sans max-w-sm">
                {t("contact.sub")}
              </p>
            </div>

            {/* Contact details */}
            <div
              className={`anim-up ${visL ? "anim-show" : ""} mt-10 space-y-5`}
              style={{ transitionDelay: visL ? "150ms" : "0ms" }}
            >
              <InfoRow
                icon={
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                }
              >
                {t("contact.address")
                  .split("\n")
                  .map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
              </InfoRow>

              <InfoRow
                icon={
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                }
              >
                <a
                  href={`tel:${t("contact.phone")}`}
                  className="hover:text-primary-500 transition-colors"
                >
                  {t("contact.phone")}
                </a>
              </InfoRow>

              <InfoRow
                icon={
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                }
              >
                <a
                  href={`mailto:${t("contact.email")}`}
                  className="hover:text-primary-500 transition-colors"
                >
                  {t("contact.email")}
                </a>
              </InfoRow>

              <InfoRow
                icon={
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                }
              >
                <p>{t("contact.hours")}</p>
              </InfoRow>
            </div>

            {/* Map placeholder */}
            <div
              className={`anim-up ${visL ? "anim-show" : ""} mt-8`}
              style={{ transitionDelay: visL ? "280ms" : "0ms" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4604.19070636563!2d110.80230447564313!3d-7.544640492468885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a141e6090dc49%3A0x537d1e1ee16cadbe!2sOmahe%20Pria%20Solo%20In%20The%20Gang%2C%20Jl.%20Kutai%20Utara%20No.1%2C%20Sumber%2C%20Kec.%20Banjarsari%2C%20Kota%20Surakarta%2C%20Jawa%20Tengah%2057138!5e1!3m2!1sen!2sid!4v1782319772487!5m2!1sen!2sid"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div
            ref={refR}
            className={`anim-right ${visR ? "anim-show" : ""} bg-coal-800 border border-coal-600 p-8 sm:p-10`}
          >
            {/* Yellow top accent */}
            <div className="h-1 bg-primary-500 -mt-8 sm:-mt-10 -mx-8 sm:-mx-10 mb-8" />

            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12 h-full">
                <div
                  className="w-16 h-16 bg-primary-500/10 border border-primary-500/40 flex items-center
                                justify-center mb-5 text-2xl"
                >
                  ✓
                </div>
                <p className="font-display font-black text-white text-xl uppercase tracking-wide mb-3">
                  {t("nav.contact")}
                </p>
                <p className="font-sans text-gray-300 text-sm leading-relaxed max-w-xs">
                  {cf.success}
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      name: "",
                      email: "",
                      phone: "",
                      subject: "",
                      message: "",
                    });
                  }}
                  className="mt-8 btn-outline-yellow"
                >
                  {t("nav.home")}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-5">
                  {["name", "email"].map((field) => (
                    <div key={field}>
                      <label
                        className="block font-display font-bold text-[10px] tracking-[0.2em]
                                        uppercase text-gray-400 mb-2"
                      >
                        {cf[field]}
                      </label>
                      <input
                        type={field === "email" ? "email" : "text"}
                        name={field}
                        value={form[field]}
                        onChange={handleChange}
                        required={field !== "phone"}
                        placeholder={cf[field]}
                        className="w-full bg-coal-700 border border-coal-500 text-white placeholder-coal-300
                                   px-4 py-3 text-sm font-sans
                                   focus:outline-none focus:border-primary-500
                                   hover:border-coal-400 transition-colors duration-200"
                      />
                    </div>
                  ))}
                </div>

                {/* Phone + Subject */}
                {["phone", "subject"].map((field) => (
                  <div key={field}>
                    <label
                      className="block font-display font-bold text-[10px] tracking-[0.2em]
                                      uppercase text-gray-400 mb-2"
                    >
                      {cf[field]}
                    </label>
                    <input
                      type="text"
                      name={field}
                      value={form[field]}
                      onChange={handleChange}
                      required={field === "subject"}
                      placeholder={cf[field]}
                      className="w-full bg-coal-700 border border-coal-500 text-white placeholder-coal-300
                                 px-4 py-3 text-sm font-sans
                                 focus:outline-none focus:border-primary-500
                                 hover:border-coal-400 transition-colors duration-200"
                    />
                  </div>
                ))}

                {/* Message */}
                <div>
                  <label
                    className="block font-display font-bold text-[10px] tracking-[0.2em]
                                    uppercase text-gray-400 mb-2"
                  >
                    {cf.message}
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder={cf.message}
                    className="w-full bg-coal-700 border border-coal-500 text-white placeholder-coal-300
                               px-4 py-3 text-sm font-sans resize-none
                               focus:outline-none focus:border-primary-500
                               hover:border-coal-400 transition-colors duration-200"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-yellow w-full justify-center mt-2"
                >
                  {cf.submit}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
