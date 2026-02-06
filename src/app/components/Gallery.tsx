import image_1 from '../../assets/1.webp';
import image_1_fallback from '../../assets/fallback/1.jpg';
import image_2 from '../../assets/2.webp';
import image_2_fallback from '../../assets/fallback/2.jpg';
import image_3 from '../../assets/3.webp';
import image_3_fallback from '../../assets/fallback/3.png';
import image_4 from '../../assets/4.webp';
import image_4_fallback from '../../assets/fallback/4.png';
import image_6 from '../../assets/6.webp';
import image_6_fallback from '../../assets/fallback/6.png';
import image_7 from '../../assets/7.webp';
import image_7_fallback from '../../assets/fallback/7.png';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../context/LanguageContext';

const galleryImages = [
  {
    url: image_3,
    fallback: image_3_fallback,
    alt: 'Completed roof construction',
    span: 'col-span-2 row-span-2'
  },
  {
    url: image_2,
    fallback: image_2_fallback,
    alt: 'Modern facade renovation',
    span: 'col-span-1 row-span-1'
  },
  {
    url: image_1,
    fallback: image_1_fallback,
    alt: 'Elegant bathroom renovation',
    span: 'col-span-1 row-span-1'
  },
  {
    url: image_4,
    fallback: image_4_fallback,
    alt: 'Scandinavian bedroom interior',
    span: 'col-span-1 row-span-1'
  },
  {
    url: image_6,
    fallback: image_6_fallback,
    alt: 'Modern kitchen renovation',
    span: 'col-span-1 row-span-1'
  },
  {
    url: image_7,
    fallback: image_7_fallback,
    alt: 'Roof construction detail',
    span: 'col-span-2 row-span-1'
  }
];

export function Gallery() {
  const { t } = useLanguage();

  return (
    <section id="gallery" className="bg-white py-24 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            style={{
              fontFamily: 'Oswald, sans-serif',
              fontWeight: 600,
              color: '#384A9C',
              fontSize: '34px',
              lineHeight: '1.5'
            }}
          >
            {t('gallery.title')}
          </h2>
          <p
            className="text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', lineHeight: '1.5' }}
          >
            {t('gallery.subtitle')}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`${image.span} overflow-hidden group rounded-lg`}
            >
              <ImageWithFallback
                src={image.url}
                fallbackSrc={image.fallback}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
