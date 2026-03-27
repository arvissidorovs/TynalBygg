import { Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function HeroFeatures() {
  const { t } = useLanguage();

  const features = [
    'hero.features.1',
    'hero.features.2',
    'hero.features.3',
    'hero.features.4',
    'hero.features.5',
    'hero.features.6'
  ];

  const cardOffsets = [
    'md:translate-y-0',
    'md:translate-y-10',
    'md:translate-y-1',
    'md:translate-y-10',
    'md:translate-y-2',
    'md:translate-y-11'
  ];

  return (
    <section className="site-section isolate overflow-hidden bg-[#f7f8fc]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          backgroundImage:
            'linear-gradient(135deg, rgba(56,74,156,0.05) 0, rgba(56,74,156,0.05) 1px, transparent 1px, transparent 62px), radial-gradient(circle at top left, rgba(56,74,156,0.08), transparent 40%), radial-gradient(circle at bottom right, rgba(15,23,42,0.05), transparent 34%)',
          backgroundSize: '62px 62px, 100% 100%, 100% 100%'
        }}
      />
      <div aria-hidden="true" className="pointer-events-none absolute -left-16 top-16 h-40 w-40 rounded-full bg-[#384A9C]/8 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute right-[-5rem] bottom-10 h-52 w-52 rounded-full bg-[#384A9C]/6 blur-3xl" />

      <div className="site-shell-narrow relative z-10">
        <div className="section-header max-w-2xl">
          <h2 className="section-title-dark">{t('hero.features.title')}</h2>
          <p className="section-copy-dark">
            {t('hero.subtitle')}
          </p>
          <div className="section-divider" />
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-[#384A9C]/16 to-transparent md:block"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-[#384A9C]/0 via-[#384A9C]/18 to-[#384A9C]/0 md:block"
          />

          <div className="grid gap-5 md:grid-cols-2 md:gap-x-7 md:gap-y-6" style={{ fontFamily: 'Inter, sans-serif' }}>
            {features.map((feature, index) => (
              <div key={index} className={`${cardOffsets[index] ?? ''}`}>
                <div
                  className={`relative overflow-hidden rounded-[1.55rem] border border-slate-200/80 bg-white/90 px-5 py-6 shadow-[0_18px_38px_rgba(15,23,42,0.045)] backdrop-blur-sm transition-transform duration-300 sm:px-6 ${index % 2 === 0 ? 'md:mr-10' : 'md:ml-10'}`}
                >
                  <div aria-hidden="true" className="pointer-events-none absolute left-0 top-6 h-14 w-px bg-gradient-to-b from-[#384A9C]/0 via-[#384A9C]/30 to-[#384A9C]/0" />
                  <div aria-hidden="true" className="pointer-events-none absolute right-5 top-5 h-10 w-10 border-r border-t border-[#384A9C]/14" />
                  <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#384A9C]/18 to-transparent" />
                  <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute top-12 hidden h-px w-12 bg-gradient-to-r md:block ${index % 2 === 0 ? 'right-[-3rem] from-[#384A9C]/28 to-transparent' : 'left-[-3rem] from-transparent to-[#384A9C]/28'}`}
                  />
                  <div
                    className={`absolute top-7 hidden h-14 w-14 items-center justify-center rounded-full border border-[#384A9C]/16 bg-white shadow-[0_14px_30px_rgba(15,23,42,0.08)] md:flex ${index % 2 === 0 ? 'right-[-4.25rem]' : 'left-[-4.25rem]'}`}
                  >
                    <span className="text-sm font-semibold tracking-[0.18em] text-[#384A9C]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="mb-4 flex items-center justify-between gap-4">
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[1rem] border border-[#384A9C]/10 bg-[#384A9C]/[0.08]"
                    >
                      <Check className="h-4 w-4" strokeWidth={3} style={{ color: '#384A9C' }} />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#384A9C]/60 md:opacity-0">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <p className="max-w-[28rem] text-[15px] leading-7 text-gray-700 sm:text-base sm:leading-8">
                    {t(feature)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center sm:mt-12">
            <div className="mx-auto mb-5 h-px w-24 bg-gradient-to-r from-transparent via-[#384A9C]/30 to-transparent" />
            <p
              className="text-xl text-gray-950 sm:text-2xl"
              style={{
                fontFamily: 'Oswald, sans-serif',
                fontWeight: 600,
                lineHeight: '1.3'
              }}
            >
              {t('hero.features.conclusion')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
