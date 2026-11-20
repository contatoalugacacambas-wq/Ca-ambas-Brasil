import React from 'react';
import { GALLERY_IMAGES, buildWhatsAppUrl } from '../data/siteConfig';
import { ImageWithFallback } from './ImageWithFallback';
import { WhatsAppIcon } from './WhatsAppIcon';

export const GallerySection: React.FC = () => {
  return (
    <section className="py-10 sm:py-14 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2545] tracking-tight">
            Caçambas Prontas para Sua Obra
          </h2>
          <a
            href={buildWhatsAppUrl(
              'Olá! Vi as fotos das caçambas e quero solicitar um orçamento no WhatsApp.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white text-sm font-extrabold transition-colors whitespace-nowrap w-fit shrink-0"
          >
            <WhatsAppIcon className="w-4 h-4 shrink-0" />
            <span>Solicitar Orçamento no WhatsApp</span>
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-5">
          {GALLERY_IMAGES.map((photo) => (
            <figure
              key={photo.src}
              className="rounded-2xl overflow-hidden border border-slate-200 bg-white flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-200">
                <ImageWithFallback
                  src={photo.src}
                  width={photo.width}
                  height={photo.height}
                  loading="lazy"
                  decoding="async"
                  alt={photo.alt}
                  fallbackTitle={photo.title ?? 'Caçamba para entulho'}
                  className="w-full h-full object-cover"
                />
                {photo.title && (
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#071830]/90 via-[#071830]/40 to-transparent px-3 py-2.5">
                    <span className="block text-xs sm:text-sm font-bold text-white truncate">
                      {photo.title}
                    </span>
                  </figcaption>
                )}
              </div>

              <div className="p-2.5 sm:p-3 bg-white border-t border-slate-200">
                <a
                  href={buildWhatsAppUrl(
                    `Olá! Quero solicitar orçamento de caçamba (${photo.title ?? 'obra'}) pelo WhatsApp.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 w-full py-2.5 sm:py-3 px-3 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-[#0B2545] text-xs sm:text-sm font-extrabold transition-colors whitespace-nowrap"
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0" />
                  <span>Solicitar Orçamento</span>
                </a>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
