import { Clock, Award, Users, ThumbsUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const features = [
  {
    icon: Clock,
    titleKey: 'why.reliable.title',
    descKey: 'why.reliable.text'
  },
  {
    icon: Award,
    titleKey: 'why.quality.title',
    descKey: 'why.quality.text'
  },
  {
    icon: Users,
    titleKey: 'why.skilled.title',
    descKey: 'why.skilled.text'
  },
  {
    icon: ThumbsUp,
    titleKey: 'why.satisfaction.title',
    descKey: 'why.satisfaction.text'
  }
];

export function WhyChooseUs() {
  const { t } = useLanguage();

  return (
    <section id="why-us" className="site-section isolate overflow-hidden bg-gray-900 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            'linear-gradient(rgba(215,222,255,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(215,222,255,0.09) 1px, transparent 1px), radial-gradient(circle at top, rgba(56,74,156,0.14), transparent 58%)',
          backgroundSize: '56px 56px, 56px 56px, 100% 100%',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.95), rgba(0,0,0,0.72))'
        }}
      />
      <div aria-hidden="true" className="pointer-events-none absolute -left-20 top-24 h-64 w-64 rounded-full bg-[#384A9C]/20 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-10 top-0 h-full w-px origin-top rotate-[12deg] bg-white/10" />
      <div aria-hidden="true" className="pointer-events-none absolute left-[12%] top-0 hidden h-full w-px origin-top -rotate-[12deg] bg-white/10 lg:block" />

      <div className="site-shell relative z-10">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title-light">{t('why.title')}</h2>
          <p className="section-copy-light">{t('why.subtitle')}</p>
          <div className="section-divider-light" />
        </div>

        {/* Features Grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="soft-surface-dark flex h-full flex-col items-center text-center px-6 py-8 sm:px-7"
              >
                <div
                  className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/12"
                  style={{ backgroundColor: 'rgba(56, 74, 156, 0.75)' }}
                >
                  <Icon className="h-7 w-7" strokeWidth={1.5} style={{ color: '#D7DEFF' }} />
                </div>

                <h3
                  className="text-2xl"
                  style={{
                    fontFamily: 'Oswald, sans-serif',
                    fontWeight: 600,
                    lineHeight: '1.25'
                  }}
                >
                  {t(feature.titleKey)}
                </h3>

                <p
                  className="mt-4 text-[15px] leading-7 text-gray-300"
                  style={{
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  {t(feature.descKey)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
