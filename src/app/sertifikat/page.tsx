'use client'

import { useState, useEffect } from 'react'
import CertificateCard from '@/components/common/CertificateCard'
import TextSection from '@/components/common/TextSection'
import { ICertificate } from '@/utils/interface/Certificate'
import { supabase } from '@/lib/supabaseClient'

const CertificateSkeleton = () => (
  <div className="h-40 w-full md:w-80 animate-pulse rounded-[4px] bg-gray-200 dark:bg-gray-800 shadow-sm border border-black/10" />
)

export default function CertificatePage() {
  const [filter, setFilter] = useState('all')
  const [certificates, setCertificates] = useState<ICertificate[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchCertificates() {
      try {
        setLoading(true)
        const { data, error } = await supabase
          .from('certificates')
          .select('*')
        
        if (error) {
          console.error("Gagal mengambil data dari Supabase:", error)
          return
        }
        
        setCertificates(data as ICertificate[] || [])
      } catch (err) {
        console.error("Unexpected error:", err)
      } finally {
        setLoading(false)
      }
    }
    fetchCertificates()
  }, [])
  
  const filteredData = certificates.filter((item) => {
    if (filter === 'all') return true
    return item.type === filter
  })

  return (
    <div className="container mx-auto px-4 py-6 md:py-10">
      <TextSection icon="📜" text="Sertifikat" />
      <p className="mt-2 mb-8 text-center mx-auto max-w-2xl text-[#616D8A] dark:text-gray-400 text-sm md:text-base">
        Daftar sertifikasi kompetensi dan kursus online yang telah saya raih untuk menunjang karir profesional.
      </p>

      <div className="my-6 md:my-10 flex justify-center gap-3 sm:gap-6 md:gap-8 lg:gap-10 font-semibold text-[#616D8A] dark:text-white">
        {['all', 'course', 'competence'].map((t) => (
          <button 
            key={t}
            className="group relative flex cursor-pointer flex-col items-center justify-center uppercase text-[11px] sm:text-xs md:text-base tracking-widest" 
            onClick={() => setFilter(t)}
          >
            <span className={`absolute bottom-[-4px] h-1 ${filter === t ? 'w-full' : 'w-0'} rounded-md bg-orange-primary transition-all duration-300 ease-in-out group-hover:w-full`}></span>
            <p>{t} ({t === 'all' ? certificates.length : certificates.filter(i => i.type === t).length})</p>
          </button>
        ))}
      </div>

      <div className="mb-10 mt-6 flex w-full flex-wrap justify-center gap-4 sm:gap-6 md:gap-10">
        {loading ? (
          [...Array(6)].map((_, i) => <CertificateSkeleton key={i} />)
        ) : filteredData.length > 0 ? (
          filteredData.map((cert, index) => (
            <CertificateCard key={cert.id || index} {...cert} />
          ))
        ) : (
          <p className="text-center text-gray-500 py-20 italic">Belum ada sertifikat.</p>
        )}
      </div>
    </div>
  )
}