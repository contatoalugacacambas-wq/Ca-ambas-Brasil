import React, { useState } from 'react';
import { GALLERY_IMAGES, buildWhatsAppUrl } from '../data/siteConfig';
import { ImageWithFallback } from './ImageWithFallback';
import { WhatsAppIcon } from './WhatsAppIcon';

export const GallerySection: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const visibleImages = expanded ? GALLERY_IMAGES : GALLERY_IMAGES.slice(0, 3);

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2545] tracking-tight">
              03. Exemplos de Caçambas em Obra
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Imagens ilustrativas de caçambas estacionárias utilizadas em reformas residenciais,
              condomínios e obras comerciais.
            </p>
          </div>
          <a
            href={buildWhatsAppUrl(
              'Olá, Caçambas Brasil! Quero consultar disponibilidade e valor de caçamba para minha obra. Minha cidade e bairro são:'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0B2545] hover:text-blue-800 underline underline-offset-4 whitespace-nowrap w-fit shrink-0"
          >
            <WhatsAppIcon className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>Pedir orçamento no WhatsApp</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {visibleImages.map((photo) => (
            <figure
              key={photo.src}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 bg-slate-100"
            >
              <ImageWithFallback
                src={photo.src}
                width={photo.width}
                height={photo.height}
                loading="lazy"
                decoding="async"
                alt={photo.alt}
                fallbackTitle={photo.title ?? 'Caçamba estacionária'}
                className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-[1.02]"
              />
              {photo.title && (
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#071830]/90 via-[#071830]/40 to-transparent px-4 py-3">
                  <span className="block text-xs sm:text-sm font-semibold text-white truncate">
                    {photo.title}
                  </span>
                </figcaption>
              )}
            </figure>
          ))}
        </div>

        {GALLERY_IMAGES.length > 3 && (
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
              className="px-5 py-3 rounded-xl border border-slate-300 bg-[#F4F7FB] hover:bg-slate-200/70 text-[#0B2545] text-sm font-bold transition-colors"
            >
              {expanded ? 'Mostrar menos fotos' : 'Ver mais fotos'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
