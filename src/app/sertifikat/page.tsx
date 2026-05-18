'use client'

import { useState } from 'react'
import CertificateCard from '@/components/common/CertificateCard'
import TextSection from '@/components/common/TextSection'
import { ICertificate } from '@/utils/interface/Certificate'

const CERTIFICATE_DATA: ICertificate[] = [
  {
    title: "Fullstack Web Developer",
    company: "Digital Talent Scholarship - Kominfo",
    image: "/sertifikat/komdigi.png",
    href: "#",
    type: "course"
  },
  {
    title: "Software Engineering intern",
    company: "HackerRank",
    image: "/sertifikat/software.png",
    href: "https://www.hackerrank.com/certificates/iframe/ff4ad25a3ab2",
    type: "competence"
  },
  {
    title: "Frontend Developer (React)",
    company: "HackerRank",
    image: "/sertifikat/react.png",
    href: "https://www.hackerrank.com/certificates/iframe/dc11096f0263",
    type: "competence"
  },
  {
    title: "Google Analytics Individual Qualification",
    company: "Google",
    image: "/sertifikat/analisis.png",
    href: "#",
    type: "competence"
  },
  {
    title: "Rest API (intermediate)",
    company: "HackerRank",
    image: "/sertifikat/restapi.png",
    href: "https://www.hackerrank.com/certificates/iframe/1a8b894f670a",
    type: "competence"
  },
  {
    title: "Spec-Driven Development dengan Kiro",
    company: "Dicoding",
    image: "/sertifikat/kiro.png",
    href: "https://www.dicoding.com/certificates/L4PQ9W4QQPO1",
    type: "course"
  },
  {
    title: "Dasar Cloud dan Gen AI AWS",
    company: "Dicoding",
    image: "/sertifikat/aws-dasar.png",
    href: "https://www.dicoding.com/certificates/JMZVOLG1NXN9",
    type: "course"
  },
  {
    title: "SQL (Advenced)",
    company: "HackerRank",
    image: "/sertifikat/sql.png",
    href: "https://www.hackerrank.com/certificates/iframe/7c253c6d9491",
    type: "competence"
  }
]

export default function CertificatePage() {
  const [filter, setFilter] = useState('all')

  const filteredData = CERTIFICATE_DATA.filter((item) => {
    if (filter === 'all') return true
    return item.type === filter
  }).reverse()

  return (
    <div className="container mx-auto px-4 py-6 md:py-10">
      <TextSection icon="📜" text="Certifications" />
      
      <p className="mt-2 mb-8 text-center mx-auto max-w-2xl text-[#616D8A] dark:text-gray-400 text-sm md:text-base">
        Daftar sertifikasi kompetensi dan kursus online yang telah saya raih untuk menunjang karir profesional.
      </p>

      {/* Filter Tabs - Responsif (Text kecil di mobile agar tidak overflow) */}
      <div className="my-6 md:my-10 flex justify-center gap-3 sm:gap-6 md:gap-8 lg:gap-10 font-semibold text-[#616D8A] dark:text-white">
        {['all', 'course', 'competence'].map((t) => (
          <button 
            key={t}
            className="group relative flex cursor-pointer flex-col items-center justify-center uppercase text-[11px] sm:text-xs md:text-base tracking-widest" 
            onClick={() => setFilter(t)}
          >
            <span className={`absolute bottom-[-4px] h-1 ${filter === t ? 'w-full' : 'w-0'} rounded-md bg-orange-primary transition-all duration-300 ease-in-out group-hover:w-full`}></span>
            <p>{t} ({t === 'all' ? CERTIFICATE_DATA.length : CERTIFICATE_DATA.filter(i => i.type === t).length})</p>
          </button>
        ))}
      </div>

      {/* Grid Layout - Jarak (gap) disesuaikan untuk mobile */}
      <div className="mb-10 mt-6 flex w-full flex-wrap justify-center gap-4 sm:gap-6 md:gap-10">
        {filteredData.length > 0 ? (
          filteredData.map((cert, index) => (
            <CertificateCard key={index} {...cert} />
          ))
        ) : (
          <p className="text-center text-gray-500 py-20 italic">Belum ada sertifikat dalam kategori ini.</p>
        )}
      </div>
    </div>
  )
}