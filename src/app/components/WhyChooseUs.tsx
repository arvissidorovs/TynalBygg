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
    <section id="why-us" className="relative isolate overflow-hidden bg-gray-900 px-6 py-28 text-white lg:px-12 lg:py-32">
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
      <div aria-hidden="true" className="pointer-events-none absolute left-[12%] top-0 h-full w-px origin-top -rotate-[12deg] bg-white/10" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center lg:mb-20">
          <h2
            className="text-4xl md:text-5xl"
            style={{
              fontFamily: 'Oswald, sans-serif',
              fontWeight: 600,
              lineHeight: '1.15'
            }}
          >
            {t('why.title')}
          </h2>
          <p
            className="mx-auto mt-4 max-w-xl text-gray-300"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              lineHeight: '1.75'
            }}
          >
            {t('why.subtitle')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-12 md:gap-y-12 lg:grid-cols-4 lg:gap-y-14">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="mx-auto flex max-w-[280px] flex-col items-center text-center px-4 py-6"
              >
                <div
                  className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full"
                  style={{ backgroundColor: '#384A9C' }}
                >
                  <Icon className="h-7 w-7" strokeWidth={1.5} style={{ color: '#D7DEFF' }} />
                </div>

                <h3
                  className="text-xl md:text-2xl"
                  style={{
                    fontFamily: 'Oswald, sans-serif',
                    fontWeight: 600,
                    lineHeight: '1.25'
                  }}
                >
                  {t(feature.titleKey)}
                </h3>

                <p
                  className="mt-3 text-gray-300"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    lineHeight: '1.7'
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
