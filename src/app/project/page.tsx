'use client'

import ProjectCard from '@/components/common/ProjectCard'
import TextSection from '@/components/common/TextSection'
import { useState } from 'react'
import { IProject } from '@/utils/interface/Project'
import { GithubStats } from '@/components/common/GithubStats'

// 1. Data manual yang sudah disesuaikan dengan interface IProject
const PROJECT_DATA: IProject[] = [
  {
    title: "Tetenger",
    image: "/img-project/tetenger.png",
    deskripsi: "tetenger",
    type: "web",
    repo: "#",
    demo: "#" // Opsional
  },
  {
    title: "Rianty Batik",
    image: "/img-project/batik.png",
    deskripsi: "Rianty Batik Merupakan Web Penjualan Batik Khas Yogyakarta.",
    type: "Web",
    repo: "#",
  },
  {
    title: "Ibadah MU",
    image: "/img-project/ibadahmu.png",
    deskripsi: "IbadahMu Merupakan Web Untuk Sholat, Doa doa dll",
    type: "web",
    repo: "#",
  },
  {
    title: "Web Desa Somongari",
    image: "/img-project/somongari.png",
    deskripsi: "Web Profil Desa Somongari",
    type: "web",
    repo: "#"
  },
  {
    title: "Els Computer",
    image: "img-project/els.png",
    deskripsi: "Els Computer Merupakan Web Penjualan Komputer",
    type: "web",
    repo: "#"
  },
  {
    title: "Nonton Film App",
    image: "img-project/Aplikasi Nonton Film.png",
    deskripsi: "Aplikasi Nonton Film Merupakan Aplikasi Untuk Menonton Film",
    type: "mobile",
    repo: "#"
  },
  {
    title: "Web Harisma Computer",
    image: "img-project/baru.png",
    deskripsi: "Web Harisma Computer Merupakan Web Penjualan Komputer",
    type: "web",
    repo: "#"
  },
]

export default function Project() {
  const [filter, setFilter] = useState('all')

  // 2. Logika filter data manual
  const filteredData = PROJECT_DATA.filter((item) => {
    if (filter === 'all') return true
    if (filter === 'mobile') {
      return ['android', 'ios', 'flutter', 'mobile'].includes(item.type)
    }
    if (filter === 'web') return item.type === 'web'
    if (filter === 'api') return item.type === 'api'
    return item.type === filter
  }).reverse() // Membalik urutan agar project terbaru (bawah di array) muncul di atas

  return (
    <div className="">
      <TextSection icon="⚒️" text="Project" />
      <div>
        <div className="my-10 hidden justify-center md:flex">
          <GithubStats />
        </div>
        
        {/* Bagian Tab Filter */}
        <div className="my-4 flex justify-center gap-4 font-semibold text-[#616D8A] dark:text-white sm:gap-6 md:gap-8 lg:gap-4">
          
          {/* Button All */}
          <button 
            className="group relative flex cursor-pointer flex-col items-start justify-center" 
            onClick={() => setFilter('all')}
          >
            <span className={`absolute bottom-0 h-1 ${filter === 'all' ? 'w-full' : 'w-0'} rounded-md bg-orange-primary transition-all duration-300 ease-in-out group-hover:w-full`}></span>
            <p>All ({PROJECT_DATA.length})</p>
          </button>

          {/* Button Web */}
          <button 
            className="group relative flex cursor-pointer flex-col items-start justify-center" 
            onClick={() => setFilter('web')}
          >
            <span className={`absolute bottom-0 h-1 ${filter === 'web' ? 'w-full' : 'w-0'} rounded-md bg-orange-primary transition-all duration-300 ease-in-out group-hover:w-full`}></span>
            <p>Web ({PROJECT_DATA.filter(i => i.type === 'web').length})</p>
          </button>

          {/* Button Mobile */}
          <button 
            className="group relative flex cursor-pointer flex-col items-start justify-center" 
            onClick={() => setFilter('mobile')}
          >
            <span className={`absolute bottom-0 h-1 ${filter === 'mobile' ? 'w-full' : 'w-0'} rounded-md bg-orange-primary transition-all duration-300 ease-in-out group-hover:w-full`}></span>
            <p>Mobile ({PROJECT_DATA.filter(i => ['android', 'ios', 'flutter', 'mobile'].includes(i.type)).length})</p>
          </button>

          {/* Button API */}
          <button 
            className="group relative flex cursor-pointer flex-col items-start justify-center" 
            onClick={() => setFilter('api')}
          >
            <span className={`absolute bottom-0 h-1 ${filter === 'api' ? 'w-full' : 'w-0'} rounded-md bg-orange-primary transition-all duration-300 ease-in-out group-hover:w-full`}></span>
            <p>Api ({PROJECT_DATA.filter(i => i.type === 'api').length})</p>
          </button>
          
        </div>
      </div>

      {/* Bagian List Card */}
      <div className="mb-2 mt-6 flex w-full flex-wrap justify-center gap-4 sm:mb-4 md:mb-5 lg:mb-6 lg:gap-6">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <ProjectCard {...item} key={index} />
          ))
        ) : (
          <p className="text-center">No projects found.</p>
        )}
      </div>
    </div>
  )
}