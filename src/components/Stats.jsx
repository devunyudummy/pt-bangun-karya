import { useLanguage } from '../context/LanguageContext'
import useCounter from '../hooks/useCounter'

function StatItem({ value, suffix, label }) {
  const [count, ref] = useCounter(value)

  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center px-6 py-8
                 border border-coal-600 bg-coal-800/50 group
                 hover:border-primary-500/50 transition-colors duration-300"
    >
      <span className="font-display font-black leading-none text-primary-500
                       text-5xl sm:text-6xl lg:text-7xl group-hover:scale-105 transition-transform duration-300">
        {count}{suffix}
      </span>
      <span className="mt-3 font-display font-semibold text-xs sm:text-sm tracking-[0.2em]
                       uppercase text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
        {label}
      </span>
    </div>
  )
}

export default function Stats() {
  const { t } = useLanguage()
  const stats  = t('stats')

  return (
    <section className="bg-coal-800 border-y border-coal-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y divide-coal-700 lg:divide-y-0">
          {Array.isArray(stats) && stats.map((s, i) => (
            <StatItem key={i} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  )
}
