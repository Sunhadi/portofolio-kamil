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
    href: "https://dicoding.com/certificates/...",
    type: "course"
  },
  {
    title: "Software Engineering intern",
    company: "HackerRank",
    image: "/sertifikat/software.png",
    href: "https://www.hackerrank.com/certificates/ff4ad25a3ab2",
    type: "competence"
  },
  {
    title: "Frontend Developer (React)",
    company: "HackerRank",
    image: "/sertifikat/react.png",
    href: "https://www.hackerrank.com/certificates/dc11096f0263",
    type: "competence"
  },
  {
    title: "Belajar Dasar AI",
    company: "Dicoding",
    image: "/sertifikat/aidasar.png",
    href: "#",
    type: "course"
  },
  {
    title: "Google Analytics Individual Qualification",
    company: "Google",
    image: "/sertifikat/analisis.png",
    href: "#",
    type: "competence"
  },
  {
    title: "Pentingnya Menjaga Keamanan Digital",
    company: "Digital Talent Scholarship - Kominfo",
    image: "/sertifikat/duniamaya.png",
    href: "#",
    type: "course"
  },
  {
    title: "Dasar-Dasar Implementasi Kecerdasan Artifisial",
    company: "Digital Talent Scholarship - Kominfo",
    image: "/sertifikat/implementasiai.png",
    href: "#",
    type: "course"
  },
  {
    title: "Rest API (intermediate)",
    company: "HackerRank",
    image: "/sertifikat/restapi.png",
    href: "#",
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
    <div className="container mx-auto px-4 py-10">
      <TextSection icon="📜" text="Certifications" />
      
      <p className="mt-2 mb-10 text-center mx-auto max-w-2xl text-[#616D8A] dark:text-gray-400">
        Daftar sertifikasi kompetensi dan kursus online yang telah saya raih untuk menunjang karir profesional.
      </p>

      {/* Filter Tabs - Identik dengan gaya Project */}
      <div className="my-10 flex justify-center gap-4 font-semibold text-[#616D8A] dark:text-white sm:gap-6 md:gap-8 lg:gap-4">
        {['all', 'course', 'competence'].map((t) => (
          <button 
            key={t}
            className="group relative flex cursor-pointer flex-col items-start justify-center uppercase" 
            onClick={() => setFilter(t)}
          >
            <span className={`absolute bottom-0 h-1 ${filter === t ? 'w-full' : 'w-0'} rounded-md bg-orange-primary transition-all duration-300 ease-in-out group-hover:w-full`}></span>
            <p>{t} ({t === 'all' ? CERTIFICATE_DATA.length : CERTIFICATE_DATA.filter(i => i.type === t).length})</p>
          </button>
        ))}
      </div>

      {/* Grid Layout - Menggunakan Flexbox agar card h-64 w-64 tetap presisi di tengah */}
      <div className="flex w-full flex-wrap justify-center gap-6">
        {filteredData.length > 0 ? (
          filteredData.map((cert, index) => (
            <CertificateCard key={index} {...cert} />
          ))
        ) : (
          <p className="text-center text-gray-500">Belum ada sertifikat dalam kategori ini.</p>
        )}
      </div>
    </div>
  )
}