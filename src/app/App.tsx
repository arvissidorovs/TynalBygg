import { Services } from './components/Services';
import { About } from './components/About';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Contact } from './components/Contact';
import { HeroFeatures } from './components/HeroFeatures';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Globe, FileText } from 'lucide-react';
import { DotLottieReact, type DotLottie } from '@lottiefiles/dotlottie-react';
import { useState, useEffect, useRef } from 'react';
import { Analytics } from '@vercel/analytics/react';
import logoImage from '../assets/tinal-bygg-white.svg';
import heroImage from '../assets/25.webp';
import documentLottie from '../assets/Document.json?url';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

function renderAnimatedChars(text: string, layer: 'base' | 'hover') {
  return (
    <span data-button-animate-chars="" className="inline-flex h-[1.55em] items-center leading-[1.05]">
      {Array.from(text).map((char, index) => (
        <span
          key={`${layer}-${char}-${index}`}
          className="inline-flex h-[1.55em] items-center overflow-hidden align-middle"
          style={{
            whiteSpace: char === ' ' ? 'pre' : undefined
          }}
        >
          <span
            className={`inline-block transition-transform duration-500 will-change-transform ${layer === 'base' ? 'group-hover:-translate-y-[140%]' : 'translate-y-[140%] group-hover:translate-y-0'
              }`}
            style={{
              transitionDelay: `${index * 0.01}s`,
              transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
              whiteSpace: char === ' ' ? 'pre' : undefined
            }}
          >
            {char}
          </span>
        </span>
      ))}
    </span>
  );
}

function AnimatedCtaLabel({ text, className = '' }: { text: string; className?: string }) {
  return (
    <span className={`relative inline-flex h-[1.55em] items-center overflow-hidden align-middle leading-[1.05] ${className}`}>
      <span className="flex h-full items-center">
        {renderAnimatedChars(text, 'base')}
      </span>
      <span className="absolute inset-0 flex items-center">
        {renderAnimatedChars(text, 'hover')}
      </span>
    </span>
  );
}

function AppContent() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavCTA, setShowNavCTA] = useState(false);
  const [hoveredNavIndex, setHoveredNavIndex] = useState<number | null>(null);
  const [hoverPillStyle, setHoverPillStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const heroCtaRef = useRef<HTMLButtonElement>(null);
  const heroCtaLottieRef = useRef<DotLottie | null>(null);
  const navCtaLottieRef = useRef<DotLottie | null>(null);
  const navListRef = useRef<HTMLUListElement>(null);
  const navItemRefs = useRef<Array<HTMLLIElement | null>>([]);

  // Preload hero image
  useEffect(() => {
    const existing = document.querySelector(`link[rel="preload"][href="${heroImage}"]`);
    if (existing) return;
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = heroImage;
    link.setAttribute('fetchpriority', 'high');
    document.head.appendChild(link);
  }, []);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Check if hero CTA button is out of view
      if (heroCtaRef.current) {
        const rect = heroCtaRef.current.getBoundingClientRect();
        // Show nav CTA when hero CTA has scrolled past the top of viewport
        setShowNavCTA(rect.bottom < 0);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // Offset for fixed header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'sv' : 'en');
  };

  const playCtaLottie = (animation: DotLottie | null) => {
    if (!animation) return;

    animation.stop();
    animation.play();
  };

  const stopCtaLottie = (animation: DotLottie | null) => {
    animation?.stop();
  };

  useEffect(() => {
    if (hoveredNavIndex === null) {
      setHoverPillStyle((current) => ({ ...current, opacity: 0 }));
      return;
    }

    const navItem = navItemRefs.current[hoveredNavIndex];
    const navList = navListRef.current;
    if (!navItem || !navList) return;

    const itemRect = navItem.getBoundingClientRect();
    const listRect = navList.getBoundingClientRect();

    setHoverPillStyle({
      left: itemRect.left - listRect.left,
      width: itemRect.width,
      opacity: 1
    });
  }, [hoveredNavIndex, language]);

  return (
    <div className="relative w-full overflow-hidden bg-gray-900">
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden bg-gray-900">
        {/* Image Background */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={heroImage}
            alt="TINAL BYGG AB Interior"
            className="h-full w-full object-cover"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />

          {/* Dark Overlay for Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/62 via-black/52 to-black/74"></div>
        </div>

        {/* Navigation Bar */}
        <nav className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-700 ease-in-out ${isScrolled ? 'border-white/10 bg-black/72 shadow-[0_10px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl' : 'border-transparent bg-black/24 backdrop-blur-md'
          } ${showNavCTA ? 'py-3' : 'py-4'}`}>
          <div className="mx-auto flex w-full max-w-[90rem] items-center justify-between px-5 sm:px-6 md:grid md:grid-cols-[1fr_auto_1fr] md:items-center lg:px-10 xl:px-14">
            {/* Logo - Left */}
            <div className="flex-shrink-0">
              <img
                src={logoImage}
                alt="TINAL BYGG AB"
                className="h-10 cursor-pointer transition duration-300 hover:opacity-85 sm:h-11"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              />
            </div>

            {/* Navigation Menu - Center */}
            <ul
              ref={navListRef}
              className="relative hidden md:flex items-center justify-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1.5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] xl:gap-2"
              style={{ fontFamily: 'Inter, sans-serif' }}
              onMouseLeave={() => setHoveredNavIndex(null)}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-1.5 rounded-full border border-white/8 bg-white/10 transition-all duration-300 ease-out"
                style={{
                  left: `${hoverPillStyle.left}px`,
                  width: `${hoverPillStyle.width}px`,
                  opacity: hoverPillStyle.opacity
                }}
              />
              <li
                ref={(element) => {
                  navItemRefs.current[0] = element;
                }}
                className="relative cursor-pointer rounded-full px-4 py-2.5"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                onMouseEnter={() => setHoveredNavIndex(0)}
                onFocus={() => setHoveredNavIndex(0)}
              >
                <span className={`relative block text-[15px] font-medium tracking-[0.02em] transition-all duration-300 ease-out ${hoveredNavIndex === 0 ? 'text-white' : 'text-white/78'}`}>
                  {t('nav.home')}
                </span>
              </li>
              <li
                ref={(element) => {
                  navItemRefs.current[1] = element;
                }}
                className="relative cursor-pointer rounded-full px-4 py-2.5"
                onClick={() => scrollToSection('why-us')}
                onMouseEnter={() => setHoveredNavIndex(1)}
                onFocus={() => setHoveredNavIndex(1)}
              >
                <span className={`relative block text-[15px] font-medium tracking-[0.02em] transition-all duration-300 ease-out ${hoveredNavIndex === 1 ? 'text-white' : 'text-white/78'}`}>
                  {t('nav.why-us')}
                </span>
              </li>
              <li
                ref={(element) => {
                  navItemRefs.current[2] = element;
                }}
                className="relative cursor-pointer rounded-full px-4 py-2.5"
                onClick={() => scrollToSection('services')}
                onMouseEnter={() => setHoveredNavIndex(2)}
                onFocus={() => setHoveredNavIndex(2)}
              >
                <span className={`relative block text-[15px] font-medium tracking-[0.02em] transition-all duration-300 ease-out ${hoveredNavIndex === 2 ? 'text-white' : 'text-white/78'}`}>
                  {t('nav.services')}
                </span>
              </li>
              <li
                ref={(element) => {
                  navItemRefs.current[3] = element;
                }}
                className="relative cursor-pointer rounded-full px-4 py-2.5"
                onClick={() => scrollToSection('about')}
                onMouseEnter={() => setHoveredNavIndex(3)}
                onFocus={() => setHoveredNavIndex(3)}
              >
                <span className={`relative block text-[15px] font-medium tracking-[0.02em] transition-all duration-300 ease-out ${hoveredNavIndex === 3 ? 'text-white' : 'text-white/78'}`}>
                  {t('nav.about')}
                </span>
              </li>
              <li
                ref={(element) => {
                  navItemRefs.current[4] = element;
                }}
                className="relative cursor-pointer rounded-full px-4 py-2.5"
                onClick={() => scrollToSection('contact')}
                onMouseEnter={() => setHoveredNavIndex(4)}
                onFocus={() => setHoveredNavIndex(4)}
              >
                <span className={`relative block text-[15px] font-medium tracking-[0.02em] transition-all duration-300 ease-out ${hoveredNavIndex === 4 ? 'text-white' : 'text-white/78'}`}>
                  {t('nav.contact')}
                </span>
              </li>
            </ul>

            {/* CTA & Language Switcher - Right */}
            <div className="ml-auto flex items-center justify-end gap-3 sm:gap-4 md:ml-0 md:gap-5">
              {/* CTA Button - Only show when scrolled */}
              <button
                aria-label={t('nav.cta')}
                className={`group flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] p-2 text-white transition-all duration-300 hover:border-white/16 hover:bg-white/[0.08] ${showNavCTA
                  ? 'pointer-events-auto translate-y-0 scale-100 opacity-100'
                  : 'pointer-events-none -translate-y-1 scale-95 opacity-0'
                  }`}
                onMouseEnter={() => playCtaLottie(navCtaLottieRef.current)}
                onMouseLeave={() => stopCtaLottie(navCtaLottieRef.current)}
                onFocus={() => playCtaLottie(navCtaLottieRef.current)}
                onBlur={() => stopCtaLottie(navCtaLottieRef.current)}
                onClick={() => window.open('https://tally.so/r/7Rx0B9', '_blank')}
              >
                <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center">
                  <DotLottieReact
                    src={documentLottie}
                    loop={false}
                    autoplay={false}
                    className="pointer-events-none h-[18px] w-[18px]"
                    dotLottieRefCallback={(dotLottie) => {
                      navCtaLottieRef.current = dotLottie;
                      dotLottie?.stop();
                    }}
                  />
                </span>
              </button>

              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-white transition-all duration-300 hover:border-white/16 hover:bg-white/[0.08]"
                style={{ fontFamily: 'Inter, sans-serif' }}
                aria-label={`Switch language to ${language === 'en' ? 'sv' : 'en'}`}
              >
                <Globe className="h-[18px] w-[18px]" />
                <span className="text-xs font-semibold uppercase tracking-wide sm:text-sm">
                  {language}
                </span>
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Content - Centered */}
        <div className="relative z-10 flex h-[calc(100vh-88px)] flex-col items-center justify-center px-8 pt-20 text-center">
          <h1
            className="mb-4 text-5xl font-bold tracking-wider text-white md:text-6xl lg:text-7xl"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            TINAL BYGG AB
          </h1>

          <p
            className="mb-16 max-w-2xl text-xl font-light tracking-wide text-white/90 md:text-2xl lg:text-3xl"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {t('hero.subtitle')}
          </p>

          <button
            ref={heroCtaRef}
            aria-label={t('nav.cta')}
            className="group flex cursor-pointer items-center gap-3 overflow-hidden rounded-md bg-[#384A9C] px-4 py-2 text-white hover:bg-[#2f3f8a] hover:shadow-[0_16px_34px_rgba(18,27,67,0.35)]"
            style={{
              fontFamily: 'Inter, sans-serif',
              boxShadow: '0 10px 24px rgba(56, 74, 156, 0.22)'
            }}
            onMouseEnter={() => playCtaLottie(heroCtaLottieRef.current)}
            onMouseLeave={() => stopCtaLottie(heroCtaLottieRef.current)}
            onFocus={() => playCtaLottie(heroCtaLottieRef.current)}
            onBlur={() => stopCtaLottie(heroCtaLottieRef.current)}
            onClick={() => window.open('https://tally.so/r/7Rx0B9', '_blank')}
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center">
              <DotLottieReact
                src={documentLottie}
                loop={false}
                autoplay={false}
                className="pointer-events-none h-8 w-8"
                dotLottieRefCallback={(dotLottie) => {
                  heroCtaLottieRef.current = dotLottie;
                  dotLottie?.stop();
                }}
              />
            </span>
            <AnimatedCtaLabel text={t('nav.cta')} className="inline-flex items-center text-base font-medium tracking-wide" />
          </button>

          {/* Optional: Subtle scroll indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            <div className="flex flex-col items-center gap-2 px-[0px] py-[11px] text-white/60">
              <span className="text-xs uppercase tracking-widest" style={{ fontFamily: 'Inter, sans-serif' }}>
                {t('hero.scroll')}
              </span>
              <div className="h-12 w-px bg-white/40"></div>
            </div>
          </div>
        </div>
      </div>

      {/* All Sections Below Hero */}
      <HeroFeatures />
      <About />
      <Services />
      <WhyChooseUs />
      <Contact />

      {/* Footer */}
      <footer className="relative isolate overflow-hidden bg-gray-900 px-6 py-14 text-white sm:px-8 lg:px-16">
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-16 top-0 h-40 w-40 rounded-full bg-[#384A9C]/20 blur-3xl" />
        <div className="site-shell relative z-10 text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
          <p className="text-sm text-gray-400">
            {t('footer.rights')}
          </p>
          <p className="mt-2 text-xs text-gray-500">
            {t('footer.org')}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
      <Analytics />
    </LanguageProvider>
  );
}
