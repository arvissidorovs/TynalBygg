import placeholder from '../../assets/11.webp';
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
    <section id="about" className="relative isolate overflow-hidden bg-gray-900 px-8 py-28 lg:px-16 lg:py-32">
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

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image Side */}
          <div className="order-2 lg:order-1">
            <div className="relative h-[600px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/25">
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
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Text Side */}
          <div className="order-1 lg:order-2">
            <h2
              className="mb-12 text-5xl md:text-6xl lg:mb-14"
              style={{
                fontFamily: 'Oswald, sans-serif',
                fontWeight: 600,
                color: '#FFFFFF'
              }}
            >
              {t('about.title')}
            </h2>

            <div className="space-y-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              <p className="text-white/85 text-lg leading-relaxed mb-8">
                {t('about.intro')}
              </p>

              <p className="text-white/85 text-lg leading-relaxed">
                {t('about.work')}
              </p>

              <div className="pt-8">
                <h3
                  className="text-2xl mb-4"
                  style={{
                    fontFamily: 'Oswald, sans-serif',
                    fontWeight: 600,
                    color: '#FFFFFF'
                  }}
                >
                  {t('about.experience.title')}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {t('about.experience.text')}
                </p>
              </div>

              <div className="pt-8">
                <h3
                  className="text-2xl mb-4"
                  style={{
                    fontFamily: 'Oswald, sans-serif',
                    fontWeight: 600,
                    color: '#FFFFFF'
                  }}
                >
                  {t('about.reliability.title')}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {t('about.reliability.text')}
                </p>
              </div>

              <div className="pt-8">
                <h3
                  className="text-2xl mb-4"
                  style={{
                    fontFamily: 'Oswald, sans-serif',
                    fontWeight: 600,
                    color: '#FFFFFF'
                  }}
                >
                  {t('about.quality.title')}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {t('about.quality.text')}
                </p>

                <a
                  href="https://www.bkr.se/hitta-foretag/skane/svalovs-kommun/tinal-bygg-ab/1303401"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t('about.badge.link')}
                  className="mt-12 flex w-full max-w-md items-center gap-5 rounded-2xl border border-white/15 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <img
                    src={bkrBadge}
                    alt={t('about.badge.alt')}
                    className="h-24 w-24 shrink-0 rounded-2xl"
                    loading="lazy"
                    decoding="async"
                  />

                  <div className="min-w-0">
                    <p
                      className="text-xs font-semibold uppercase tracking-[0.24em] text-[#384A9C]"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {t('about.badge.eyebrow')}
                    </p>
                    <p
                      className="mt-2 text-base font-medium leading-snug text-gray-900"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {t('about.badge.text')}
                    </p>
                    <span
                      className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[#384A9C]"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {t('about.badge.link')}
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
