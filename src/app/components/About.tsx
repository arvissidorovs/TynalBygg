import placeholder from '../../assets/11.webp';
import overlapImageOne from '../../assets/41.webp';
import overlapImageTwo from '../../assets/20.webp';
import bkrBadge from '../../assets/bkr-behorig-vatrum.svg';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUpRight } from 'lucide-react';

const squareColumns = 12;
const squareRows = 6;

const animatedSquares = [
  { col: 1, row: 1, alpha: 0.26, delay: '0.2s', duration: '6.8s', color: '215 228 255' },
  { col: 2, row: 1, alpha: 0.16, delay: '0.5s', duration: '7.4s', color: '215 228 255' },
  { col: 5, row: 2, alpha: 0.24, delay: '1.1s', duration: '7.2s', color: '197 224 255' },
  { col: 6, row: 2, alpha: 0.14, delay: '1.5s', duration: '8.1s', color: '197 224 255' },
  { col: 8, row: 4, alpha: 0.22, delay: '2.4s', duration: '6.9s', color: '243 206 140' },
  { col: 9, row: 4, alpha: 0.12, delay: '2.8s', duration: '7.7s', color: '243 206 140' },
  { col: 10, row: 1, alpha: 0.2, delay: '3.1s', duration: '8.2s', color: '255 222 176' },
  { col: 10, row: 2, alpha: 0.13, delay: '3.6s', duration: '7.5s', color: '255 222 176' }
];

const animatedSquareMap = new Map(
  animatedSquares.map((square) => [`${square.col}-${square.row}`, square])
);

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="site-section isolate overflow-hidden bg-gray-900">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'linear-gradient(135deg, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 56px), linear-gradient(90deg, rgba(215,222,255,0.06) 1px, transparent 1px), radial-gradient(circle at top right, rgba(56,74,156,0.18), transparent 52%)',
          backgroundSize: '56px 56px, 112px 112px, 100% 100%',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.92), rgba(0,0,0,0.68))'
        }}
      />
      <div aria-hidden="true" className="pointer-events-none absolute left-[-8rem] bottom-0 h-72 w-72 rounded-full bg-[#384A9C]/20 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute right-[8%] top-16 h-44 w-44 rounded-full border border-white/10" />
      <div aria-hidden="true" className="pointer-events-none absolute left-[7%] top-24 h-px w-40 bg-gradient-to-r from-[#D7DEFF]/0 via-[#D7DEFF]/50 to-[#D7DEFF]/0" />
      <div aria-hidden="true" className="pointer-events-none absolute left-[7%] top-24 h-40 w-px bg-gradient-to-b from-[#D7DEFF]/0 via-[#D7DEFF]/45 to-[#D7DEFF]/0" />
      <div aria-hidden="true" className="pointer-events-none absolute right-[12%] bottom-20 h-px w-52 bg-gradient-to-r from-[#D7DEFF]/0 via-[#D7DEFF]/45 to-[#D7DEFF]/0" />
      <div
        aria-hidden="true"
        className="about-ambient-grid pointer-events-none absolute inset-0 hidden md:grid"
        style={{
          gridTemplateColumns: `repeat(${squareColumns}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${squareRows}, minmax(0, 1fr))`
        }}
      >
        {Array.from({ length: squareColumns * squareRows }, (_, index) => {
          const col = index % squareColumns;
          const row = Math.floor(index / squareColumns);
          const animatedSquare = animatedSquareMap.get(`${col}-${row}`);

          return (
            <div
              key={`${col}-${row}`}
              className={`about-ambient-cell ${animatedSquare ? 'about-ambient-cell-active' : ''}`}
              style={{
                ['--about-square-alpha' as string]: animatedSquare?.alpha ?? 0,
                ['--about-square-delay' as string]: animatedSquare?.delay ?? '0s',
                ['--about-square-duration' as string]: animatedSquare?.duration ?? '7s',
                ['--about-square-rgb' as string]: animatedSquare?.color ?? '215 228 255'
              }}
            />
          );
        })}
      </div>

      <div className="site-shell relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Image Side */}
          <div className="order-2 lg:order-1">
            <div className="relative h-[660px] sm:h-[720px] lg:h-[700px]">
              <div className="relative h-[560px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/25 sm:h-[600px]">
                <div aria-hidden="true" className="pointer-events-none absolute left-4 top-4 z-10 h-14 w-14 border-l border-t border-white/30" />
                <div aria-hidden="true" className="pointer-events-none absolute bottom-4 right-4 z-10 h-20 w-20 border-b border-r border-[#D7DEFF]/30" />
                <div aria-hidden="true" className="pointer-events-none absolute -left-5 top-14 hidden h-32 w-10 lg:block">
                  <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/20" />
                  <div className="absolute left-0 top-0 h-px w-full bg-white/25" />
                  <div className="absolute left-0 bottom-0 h-px w-full bg-white/25" />
                </div>
                <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-tr from-black/20 via-transparent to-[#384A9C]/10" />
                <ImageWithFallback
                  src={placeholder}
                  alt="Professional craftsman at work"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="absolute bottom-3 left-3 z-20 w-[10.5rem] rotate-[-6deg] overflow-hidden rounded-[1.2rem] border border-white/8 bg-white/[0.025] p-1 shadow-[0_20px_44px_rgba(0,0,0,0.2)] transition-transform duration-500 ease-out hover:-translate-y-2 hover:rotate-[-9deg] sm:bottom-4 sm:left-4 sm:w-[12rem] md:bottom-5 md:left-6 md:w-[14rem] lg:bottom-6 lg:left-4 lg:w-[16rem]">
                <ImageWithFallback
                  src={overlapImageOne}
                  alt="Construction framing in progress"
                  className="h-28 w-full rounded-[0.9rem] object-cover sm:h-32 md:h-40 lg:h-48"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="absolute right-2 top-3 z-20 w-[9rem] rotate-[5deg] overflow-hidden rounded-[1.2rem] border border-white/8 bg-white/[0.025] p-1 shadow-[0_20px_44px_rgba(0,0,0,0.2)] transition-transform duration-500 ease-out hover:-translate-y-2 hover:rotate-[8deg] sm:right-3 sm:top-4 sm:w-[10rem] md:right-5 md:top-6 md:w-[11.5rem] lg:right-4 lg:top-8 lg:w-[13.5rem]">
                <ImageWithFallback
                  src={overlapImageTwo}
                  alt="Finished interior renovation"
                  className="h-24 w-full rounded-[0.9rem] object-cover sm:h-28 md:h-36 lg:h-44"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="order-1 lg:order-2">
            <h2
              className="text-4xl text-white md:text-5xl lg:text-6xl"
              style={{
                fontFamily: 'Oswald, sans-serif',
                fontWeight: 600,
                lineHeight: '1.08'
              }}
            >
              {t('about.title')}
            </h2>
            <div className="section-divider-light ml-0" />

            <div className="mt-8 space-y-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              <p className="text-[17px] leading-8 text-white/85">
                {t('about.intro')}
              </p>

              <p className="text-[17px] leading-8 text-white/78">
                {t('about.work')}
              </p>

              <div className="grid gap-4 pt-2">
                <div className="soft-surface-dark px-5 py-5 sm:px-6">
                  <h3
                    className="text-2xl text-white"
                    style={{
                      fontFamily: 'Oswald, sans-serif',
                      fontWeight: 600
                    }}
                  >
                    {t('about.experience.title')}
                  </h3>
                  <p className="mt-3 text-[15px] leading-7 text-white/75">
                    {t('about.experience.text')}
                  </p>
                </div>

                <div className="soft-surface-dark px-5 py-5 sm:px-6">
                  <h3
                    className="text-2xl text-white"
                    style={{
                      fontFamily: 'Oswald, sans-serif',
                      fontWeight: 600
                    }}
                  >
                    {t('about.reliability.title')}
                  </h3>
                  <p className="mt-3 text-[15px] leading-7 text-white/75">
                    {t('about.reliability.text')}
                  </p>
                </div>

                <div className="soft-surface-dark px-5 py-5 sm:px-6">
                  <h3
                    className="text-2xl text-white"
                    style={{
                      fontFamily: 'Oswald, sans-serif',
                      fontWeight: 600
                    }}
                  >
                    {t('about.quality.title')}
                  </h3>
                  <p className="mt-3 text-[15px] leading-7 text-white/75">
                    {t('about.quality.text')}
                  </p>

                  <div className="mt-6 border-t border-white/10 pt-5">
                    <a
                      href="https://www.bkr.se/hitta-foretag/skane/svalovs-kommun/tinal-bygg-ab/1303401"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t('about.badge.link')}
                      className="group flex w-full max-w-lg items-center gap-4 text-left sm:gap-5"
                    >
                      <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-[1.3rem] border border-white/12 bg-white/95 p-2 shadow-[0_12px_26px_rgba(0,0,0,0.16)] transition-transform duration-300 group-hover:-translate-y-1">
                        <img
                          src={bkrBadge}
                          alt={t('about.badge.alt')}
                          className="h-full w-full rounded-[1rem] object-contain"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>

                      <div className="min-w-0">
                        <p
                          className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#D7DEFF]"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                          {t('about.badge.eyebrow')}
                        </p>
                        <p
                          className="mt-2 text-base font-medium leading-snug text-white"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                          {t('about.badge.text')}
                        </p>
                        <span
                          className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[#D7DEFF] transition-colors duration-300 group-hover:text-white"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                          {t('about.badge.link')}
                          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
