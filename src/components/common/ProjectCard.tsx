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
}: any) {
  return (
    <motion.div
      whileInView={{ scale: 1 }}
      initial={{ scale: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="dark:border-dark-secondary group relative h-64 w-64 cursor-pointer overflow-hidden rounded-[3px] border-2 border-black-primary object-cover shadow-button-card"
    >
      <Image
        // PERBAIKAN: Gunakan variabel 'image' secara langsung 
        // agar bisa membaca path dari folder public
        src={image} 
        width={1000}
        height={1000}
        className="h-full w-full object-cover"
        alt={title || "project image"}
        // Tambahkan unoptimized jika Anda tidak ingin mendaftarkan domain di next.config.js
        unoptimized 
      />
      
      {/* Bagian overlay tombol */}
      <div className="absolute right-0 top-0 z-10 flex h-1/4 w-full -translate-y-10 items-center justify-end gap-2 p-2 transition-all group-hover:translate-y-0">
        {demo && demo !== 'none' && (
          <a
            href={demo}
            target={'_blank'}
            rel="noopener noreferrer"
            className="cursor-pointer rounded-full border-2 border-black-primary bg-yellow-primary p-1.5 text-sm text-black hover:bg-orange-primary lg:p-2 lg:text-base"
          >
            <FaExternalLinkAlt />
          </a>
        )}
        {repo && (
          <a
            href={repo}
            target={'_blank'}
            rel="noopener noreferrer"
            className="cursor-pointer rounded-full border-2 border-black-primary bg-yellow-primary p-1.5 text-sm text-black hover:bg-orange-primary lg:p-2 lg:text-base"
          >
            <FaGithub />
          </a>
        )}
      </div>

      {/* Bagian deskripsi (Hover) */}
      <div className="dark:bg-dark-secondary absolute bottom-0 h-10 w-full border-t-2 border-black-primary bg-yellow-primary p-2 transition-all duration-300 group-hover:h-[60%] lg:group-hover:h-2/4">
        <div className="h-20">
          <h1 className="line-clamp-1 font-bold text-black-primary group-hover:line-clamp-2">
            {title}{' '}
            <span className="ml-1 rounded-lg bg-black px-2 py-0.5 text-[10px] text-white">
              {type}
            </span>
          </h1>
          <p className="hidden mt-1 text-[10px] leading-tight font-normal text-black-primary group-hover:block">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}