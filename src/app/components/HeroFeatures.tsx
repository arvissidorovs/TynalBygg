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

  const featurePairs = [
    [features[0], features[1]],
    [features[2], features[3]],
    [features[4], features[5]]
  ];

  const rowOffsets = [
    { left: 'md:translate-y-0', right: 'md:translate-y-12' },
    { left: 'md:translate-y-4', right: 'md:translate-y-16' },
    { left: 'md:translate-y-8', right: 'md:translate-y-20' }
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
          <div className="section-divider" />
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-10 left-1/2 top-6 hidden w-px -translate-x-1/2 bg-gradient-to-b from-[#384A9C]/0 via-[#384A9C]/24 to-[#384A9C]/0 md:block"
          />
          <div className="space-y-5 pb-8 md:space-y-8 md:pb-24" style={{ fontFamily: 'Inter, sans-serif' }}>
            {featurePairs.map(([leftFeature, rightFeature], index) => (
              <div
                key={`${leftFeature}-${rightFeature}`}
                className="grid gap-5 md:grid-cols-[minmax(0,1fr)_4rem_minmax(0,1fr)] md:items-start md:gap-0"
              >
                <div className={`relative md:pr-12 ${rowOffsets[index]?.left ?? ''}`}>
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute right-[-2rem] top-1/2 hidden h-px w-[5rem] -translate-y-1/2 bg-gradient-to-r from-[#384A9C]/28 via-[#384A9C]/24 to-[#384A9C]/28 md:block"
                  />
                  <div className="relative flex min-h-[12.5rem] flex-col overflow-hidden rounded-[1.55rem] border border-slate-200/80 bg-gradient-to-b from-white via-[#f8faff] to-[#eef3ff] px-5 py-6 shadow-[0_18px_38px_rgba(15,23,42,0.045)] backdrop-blur-sm transition-transform duration-300 sm:px-6">
                    <div aria-hidden="true" className="pointer-events-none absolute left-0 top-6 h-14 w-px bg-gradient-to-b from-[#384A9C]/0 via-[#384A9C]/30 to-[#384A9C]/0" />
                    <div aria-hidden="true" className="pointer-events-none absolute right-5 top-5 h-10 w-10 border-r border-t border-[#384A9C]/14" />
                    <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#384A9C]/18 to-transparent" />

                    <div className="flex flex-1 flex-col justify-center gap-5">
                      <div className="flex items-center gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[1rem] bg-[#384A9C]">
                          <Check className="h-4 w-4 text-white" strokeWidth={3} />
                        </div>
                      </div>

                      <p className="max-w-[28rem] pr-6 text-[15px] leading-7 text-gray-700 sm:text-base sm:leading-8">
                        {t(leftFeature)}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative hidden h-full md:block">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-[-2rem] left-1/2 top-[-2rem] w-px -translate-x-1/2 bg-gradient-to-b from-[#384A9C]/0 via-[#384A9C]/24 to-[#384A9C]/0"
                  />
                </div>

                <div className={`relative md:pl-12 ${rowOffsets[index]?.right ?? ''}`}>
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute left-[-2rem] top-1/2 hidden h-px w-[5rem] -translate-y-1/2 bg-gradient-to-r from-[#384A9C]/28 via-[#384A9C]/24 to-[#384A9C]/28 md:block"
                  />
                  <div className="relative flex min-h-[12.5rem] flex-col overflow-hidden rounded-[1.55rem] border border-slate-200/80 bg-gradient-to-b from-white via-[#f8faff] to-[#eef3ff] px-5 py-6 shadow-[0_18px_38px_rgba(15,23,42,0.045)] backdrop-blur-sm transition-transform duration-300 sm:px-6">
                    <div aria-hidden="true" className="pointer-events-none absolute left-0 top-6 h-14 w-px bg-gradient-to-b from-[#384A9C]/0 via-[#384A9C]/30 to-[#384A9C]/0" />
                    <div aria-hidden="true" className="pointer-events-none absolute right-5 top-5 h-10 w-10 border-r border-t border-[#384A9C]/14" />
                    <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#384A9C]/18 to-transparent" />

                    <div className="flex flex-1 flex-col justify-center gap-5">
                      <div className="flex items-center gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[1rem] bg-[#384A9C]">
                          <Check className="h-4 w-4 text-white" strokeWidth={3} />
                        </div>
                      </div>

                      <p className="max-w-[28rem] pr-6 text-[15px] leading-7 text-gray-700 sm:text-base sm:leading-8">
                        {t(rightFeature)}
                      </p>
                    </div>
                  </div>
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
