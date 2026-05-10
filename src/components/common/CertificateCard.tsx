'use client'

import { ICertificate } from '@/utils/interface/Certificate'
import Image from 'next/image'

export default function CertificateCard({ title, company, image, href, type }: ICertificate) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:shadow-lg dark:border-gray-800 dark:bg-[#1a1a1a]"
    >
      {/* Container Gambar */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {/* Badge Tipe Sertifikat */}
        <div className="absolute right-3 top-3">
          <span className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase text-white ${
            type === 'competition' ? 'bg-blue-500' : 
            type === 'competence' ? 'bg-green-500' : 'bg-orange-primary'
          }`}>
            {type}
          </span>
        </div>
      </div>

      {/* Konten Teks */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold leading-tight text-gray-900 dark:text-white line-clamp-2">
          {title}
        </h3>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          {company}
        </p>
        
        <div className="mt-auto pt-4">
          <span className="text-sm font-semibold text-orange-primary group-hover:underline">
            Lihat Detail Sertifikat →
          </span>
        </div>
      </div>
    </a>
  )
}