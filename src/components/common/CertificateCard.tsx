'use client'

import Image from 'next/image'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { ICertificate } from '@/utils/interface/Certificate'

export default function CertificateCard({ 
  title, 
  company, 
  image, 
  href, 
  type 
}: ICertificate) {
  return (
    <motion.div
      whileInView={{ scale: 1, opacity: 1 }}
      initial={{ scale: 0.8, opacity: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      // Ukuran kartu h-64 w-64, border tebal, dan shadow khas
      className="dark:border-dark-secondary group relative h-64 w-64 cursor-pointer overflow-hidden rounded-[4px] border-2 border-black-primary bg-white shadow-button-card transition-shadow hover:shadow-xl"
    >
      <Image
        src={image}
        width={500}
        height={500}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        alt={title || "certificate image"}
        unoptimized 
      />
      
      {/* Tombol Link (Kanan Atas - Muncul saat hover/tap) */}
      <div className="absolute right-0 top-0 z-20 flex h-1/4 w-full -translate-y-10 items-center justify-end gap-2 p-2 transition-all duration-300 group-hover:translate-y-0">
        {href && href !== '#' && (
          <a
            href={href}
            target={'_blank'}
            rel="noopener noreferrer"
            className="rounded-full border-2 border-black-primary bg-yellow-primary p-2 text-sm text-black hover:bg-orange-primary shadow-sm"
          >
            <FaExternalLinkAlt size={14} />
          </a>
        )}
      </div>

      {/* Area Deskripsi (Naik saat hover/tap - Warna Yellow Primary) */}
      <div className="dark:bg-dark-secondary absolute bottom-0 z-10 w-full border-t-2 border-black-primary bg-yellow-primary p-3 transition-all duration-300 h-12 group-hover:h-[75%]">
        <div className="h-full flex flex-col overflow-hidden">
          <h1 className="line-clamp-1 text-[12px] font-bold text-black-primary group-hover:line-clamp-2 uppercase tracking-tight">
            {title}{' '}
            <span className="ml-1 rounded-md bg-black px-1.5 py-0.5 text-[9px] text-white uppercase tracking-tighter">
              {type}
            </span>
          </h1>
          
          <p className="hidden mt-2 text-[10px] leading-relaxed font-medium text-black-primary group-hover:block line-clamp-2 border-t border-black-primary/10 pt-1">
            {company}
          </p>
          
          {/* Link bawah warna hitam agar terbaca jelas */}
          <div className="hidden mt-auto group-hover:block border-t border-black-primary/10 pt-2">
             <span className="text-[10px] font-black text-black-primary uppercase tracking-tighter flex items-center gap-1">
                VIEW CREDENTIAL <span className="transition-transform group-hover:translate-x-1">→</span>
             </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}