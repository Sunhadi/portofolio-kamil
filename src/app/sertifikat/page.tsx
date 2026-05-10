'use client'

import CertificateCard from '@/components/common/CertificateCard'
import TextSection from '@/components/common/TextSection'
import { ICertificate } from '@/utils/interface/Certificate'

// Data manual sertifikat kamu
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
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Header Section */}
      <TextSection icon="📜" text="Certifications" />
      
      <p className="mt-2 mb-10 text-center mx-auto max-w-2xl text-[#616D8A] dark:text-gray-400">
        Daftar sertifikasi kompetensi, kursus online, dan penghargaan yang telah saya raih untuk menunjang karir profesional.
      </p>

      {/* Grid Layout untuk Sertifikat */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {CERTIFICATE_DATA.length > 0 ? (
          CERTIFICATE_DATA.map((cert, index) => (
            <CertificateCard key={index} {...cert} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            Belum ada sertifikat yang ditambahkan.
          </p>
        )}
      </div>
    </div>
  )
}