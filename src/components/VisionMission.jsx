import useScrollAnimation from '../hooks/useScrollAnimation'
import { useLanguage } from '../context/LanguageContext'

export default function VisionMission() {
  const { t } = useLanguage()
  const [refTop, visTop]   = useScrollAnimation(0.1)
  const [refVis, visVis]   = useScrollAnimation(0.12)
  const [refMis, visMis]   = useScrollAnimation(0.12)
  const [refVal, visVal]   = useScrollAnimation(0.1)

  const missions = t('vision.missions')
  const values   = t('vision.values')

  return (
    <section id="vision" className="bg-coal-900 py-24 lg:py-32 overflow-hidden relative">
      {/* Background stripe decoration */}
      <div className="absolute top-0 right-0 w-48 h-full stripe-subtle opacity-40 pointer-events-none" />
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-full h-px bg-coal-700" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div ref={refTop} className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <div className={`anim-up ${visTop ? 'anim-show' : ''}`}>
            <span className="section-eyebrow justify-center">
              <span className="w-8 h-px bg-primary-500 inline-block" />
              {t('vision.eyebrow')}
              <span className="w-8 h-px bg-primary-500 inline-block" />
            </span>
          </div>
        </div>

        {/* ── Vision + Mission grid ── */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-20">

          {/* Vision */}
          <div
            ref={refVis}
            className={`anim-left ${visVis ? 'anim-show' : ''} relative bg-coal-800 p-8 lg:p-10`}
          >
            {/* Yellow left border */}
            <div className="absolute top-0 left-0 w-1 h-full bg-primary-500" />
            {/* Warning tape corner */}
            <div className="absolute top-0 right-0 w-16 h-5 stripe-yellow opacity-30" />

            <p className="font-display font-black text-xs tracking-[0.3em] uppercase text-primary-500 mb-4">
              {t('vision.visionLabel')}
            </p>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white uppercase leading-[0.9] mb-6">
              Visi<br/>
              <span className="text-primary-500">Perusahaan</span>
            </h2>
            <p className="font-sans text-gray-300 text-base sm:text-lg leading-relaxed">
              {t('vision.visionText')}
            </p>
          </div>

          {/* Mission */}
          <div
            ref={refMis}
            className={`anim-right ${visMis ? 'anim-show' : ''} bg-coal-800 p-8 lg:p-10`}
          >
            <p className="font-display font-black text-xs tracking-[0.3em] uppercase text-primary-500 mb-4">
              {t('vision.missionLabel')}
            </p>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white uppercase leading-[0.9] mb-6">
              Misi<br/>
              <span className="text-white/30">Kami</span>
            </h2>

            <ul className="space-y-4">
              {Array.isArray(missions) && missions.map((m, i) => (
                <li
                  key={i}
                  className={`anim-up ${visMis ? 'anim-show' : ''} flex items-start gap-3`}
                  style={{ transitionDelay: visMis ? `${i * 100 + 100}ms` : '0ms' }}
                >
                  <span className="mt-2 flex-shrink-0 w-2 h-2 bg-primary-500 rotate-45" />
                  <span className="text-gray-300 text-sm sm:text-base leading-relaxed font-sans">{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Core Values ── */}
        <div ref={refVal}>
          <p className={`anim-up ${visVal ? 'anim-show' : ''} font-display font-black text-xs
                         tracking-[0.3em] uppercase text-primary-500 text-center mb-8`}>
            {t('vision.valuesLabel')}
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {Array.isArray(values) && values.map((v, i) => (
              <div
                key={i}
                className={`anim-scale ${visVal ? 'anim-show' : ''}
                            bg-coal-800 border border-coal-600 p-6 text-center
                            hover:border-primary-500/50 hover:bg-coal-700
                            transition-all duration-300 group cursor-default`}
                style={{ transitionDelay: visVal ? `${i * 100}ms` : '0ms' }}
              >
                <div className="w-12 h-12 bg-primary-500/10 border border-primary-500/30
                                flex items-center justify-center mx-auto mb-4
                                group-hover:bg-primary-500/20 transition-colors duration-300">
                  <span className="text-primary-500 text-xl font-display font-black">✦</span>
                </div>
                <p className="font-display font-black text-white text-base tracking-wide uppercase mb-2">
                  {v.label}
                </p>
                <p className="font-sans text-gray-500 text-xs leading-relaxed group-hover:text-gray-400 transition-colors">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
