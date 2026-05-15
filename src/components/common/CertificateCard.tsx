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
      whileInView={{ scale: 1 }}
      initial={{ scale: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      // Border hitam tebal (2px) dan shadow khas halaman proyek Anda
      className="dark:border-dark-secondary group relative h-64 w-64 cursor-pointer overflow-hidden rounded-[3px] border-2 border-black-primary bg-white shadow-button-card"
    >
      <Image
        src={image}
        width={1000}
        height={1000}
        className="h-full w-full object-cover"
        alt={title || "certificate image"}
        unoptimized 
      />
      
      {/* Tombol Link (Muncul dari atas saat hover) */}
      <div className="absolute right-0 top-0 z-10 flex h-1/4 w-full -translate-y-10 items-center justify-end gap-2 p-2 transition-all group-hover:translate-y-0">
        {href && href !== '#' && (
          <a
            href={href}
            target={'_blank'}
            rel="noopener noreferrer"
            className="cursor-pointer rounded-full border-2 border-black-primary bg-yellow-primary p-1.5 text-sm text-black hover:bg-orange-primary lg:p-2 lg:text-base"
          >
            <FaExternalLinkAlt />
          </a>
        )}
      </div>

      {/* Area Deskripsi (Naik saat hover - Warna Yellow Primary) */}
      <div className="dark:bg-dark-secondary absolute bottom-0 h-10 w-full border-t-2 border-black-primary bg-yellow-primary p-2 transition-all duration-300 group-hover:h-[60%] lg:group-hover:h-2/4">
        <div className="h-20">
          <h1 className="line-clamp-1 font-bold text-black-primary group-hover:line-clamp-2 uppercase text-[12px]">
            {title}{' '}
            <span className="ml-1 rounded-lg bg-black px-2 py-0.5 text-[10px] text-white">
              {type}
            </span>
          </h1>
          <p className="hidden mt-1 text-[10px] leading-tight font-normal text-black-primary group-hover:block">
            {company}
          </p>
          
          {/* Link bawah dengan warna hitam agar terbaca jelas */}
          <div className="hidden mt-3 group-hover:block border-t border-black-primary/20 pt-2">
             <span className="text-[10px] font-black text-black-primary uppercase tracking-tighter">
                VIEW CREDENTIAL →
             </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}