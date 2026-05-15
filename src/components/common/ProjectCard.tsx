'use client'

import Image from 'next/image'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function ProjectCard({
  image,
  title,
  description,
  repo,
  demo,
  type,
  tech,
}: any) {
  return (
    <motion.div
      whileInView={{ scale: 1, opacity: 1 }}
      initial={{ scale: 0.8, opacity: 0 }}
      whileHover={{ y: -5 }} 
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      // Ukuran kartu tetap h-64 w-64 untuk konsistensi grid
      className="dark:border-dark-secondary group relative h-64 w-64 cursor-pointer overflow-hidden rounded-[4px] border-2 border-black-primary bg-white shadow-button-card transition-shadow hover:shadow-xl"
    >
      <Image
        src={image} 
        width={500} 
        height={500}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        alt={title || "project image"}
        unoptimized 
      />
      
      {/* Tombol Aksi: Muncul saat di-hover (atau di-tap pada mobile) */}
      <div className="absolute right-0 top-0 z-20 flex h-1/4 w-full -translate-y-10 items-center justify-end gap-2 p-2 transition-all duration-300 group-hover:translate-y-0">
        {demo && demo !== 'none' && (
          <a
            href={demo}
            target={'_blank'}
            rel="noopener noreferrer"
            className="rounded-full border-2 border-black-primary bg-yellow-primary p-2 text-sm text-black hover:bg-orange-primary shadow-sm"
          >
            <FaExternalLinkAlt size={14} />
          </a>
        )}
        {repo && repo !== '#' && (
          <a
            href={repo}
            target={'_blank'}
            rel="noopener noreferrer"
            className="rounded-full border-2 border-black-primary bg-yellow-primary p-2 text-sm text-black hover:bg-orange-primary shadow-sm"
          >
            <FaGithub size={14} />
          </a>
        )}
      </div>

      {/* Panel Deskripsi & Tech Stack (Warna Yellow Primary) */}
      <div className="dark:bg-dark-secondary absolute bottom-0 z-10 w-full border-t-2 border-black-primary bg-yellow-primary p-3 transition-all duration-300 h-12 group-hover:h-[75%]">
        <div className="h-full flex flex-col overflow-hidden">
          {/* Baris Judul & Tipe */}
          <h1 className="line-clamp-1 text-[13px] font-bold text-black-primary group-hover:line-clamp-2">
            {title}
            <span className="ml-2 rounded-md bg-black px-1.5 py-0.5 text-[9px] text-white uppercase tracking-tighter">
              {type}
            </span>
          </h1>

          {/* Bagian Tech Stack: Hanya muncul saat di-hover/tap */}
          <div className="mt-2 hidden group-hover:flex flex-wrap gap-1">
            {tech?.map((item: string, idx: number) => (
              <span 
                key={idx} 
                className="bg-orange-primary border border-black-primary text-[8px] font-extrabold px-1.5 py-0.5 rounded text-black uppercase"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Deskripsi Singkat */}
          <p className="hidden mt-2 text-[10px] leading-relaxed font-medium text-black-primary group-hover:block line-clamp-3 italic border-t border-black-primary/10 pt-1">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}