'use client'

import ProjectCard from '@/components/common/ProjectCard'
import TextSection from '@/components/common/TextSection'
import { useState } from 'react'
import { GithubStats } from '@/components/common/GithubStats'

const PROJECT_DATA = [
  {
    title: "Tetenger",
    image: "/img-project/tetenger.png",
    description: "Solusi lengkap olah dokumen: Gabung, Pisah, dan Tanda Tangan PDF dalam satu pintu.",
    type: "web",
    repo: "#",
    tech: ["Typescript", "React", "Tailwind"]
  },
  {
    title: "Rianty Batik",
    image: "/img-project/batik.png",
    description: "Web penjualan batik khas Yogyakarta.",
    type: "web",
    repo: "#",
    tech: ["Typescript", "React", "Tailwind"]
  },
  {
    title: "Ibadah MU",
    image: "/img-project/ibadahmu.png",
    description: "Web panduan ibadah harian seperti sholat dan doa.",
    type: "web",
    repo: "#",
    tech: ["React", "Tailwind", "API"]
  },
  {
    title: "Web Desa Somongari",
    image: "/img-project/somongari.png",
    description: "Profil desa dan pemetaan potensi desa Somongari.",
    type: "web",
    repo: "#",
    tech: ["Laravel", "Tailwind", "PostgreSQL"]
  },
  {
    title: "Els Computer",
    image: "img-project/els.png",
    description: "E-commerce penjualan perangkat komputer.",
    type: "web",
    repo: "#",
    tech: ["Typescript", "React", "Tailwind, API"]
  },
  {
    title: "Nonton Film App",
    image: "img-project/Aplikasi Nonton Film.png",
    description: "Aplikasi mobile untuk katalog film.",
    type: "mobile",
    repo: "#",
    tech: ["Flutter", "API", "Firebase"]
  },
  {
    title: "Web Harisma Computer",
    image: "img-project/baru.png",
    description: "Web penjualan perangkat komputer.",
    type: "web",
    repo: "#",
    tech: ["Typescript", "React", "Tailwind, API"]
  },
]

export default function Project() {
  const [filter, setFilter] = useState('all')

  const filteredData = PROJECT_DATA.filter((item) => {
    if (filter === 'all') return true
    if (filter === 'mobile') {
      return ['android', 'ios', 'flutter', 'mobile'].includes(item.type)
    }
    return item.type === filter
  }).reverse()

  return (
    <div className="container mx-auto px-4 py-10">
      <TextSection icon="⚒️" text="Project" />
      
      <div className="my-10 hidden justify-center md:flex">
        <GithubStats />
      </div>
      
      {/* Tab Filter */}
      <div className="my-8 flex justify-center gap-4 font-semibold text-[#616D8A] dark:text-white sm:gap-6 md:gap-8 lg:gap-4">
        {['all', 'web', 'mobile', 'api'].map((cat) => (
          <button 
            key={cat}
            className="group relative flex cursor-pointer flex-col items-start justify-center uppercase" 
            onClick={() => setFilter(cat)}
          >
            <span className={`absolute bottom-0 h-1 ${filter === cat ? 'w-full' : 'w-0'} rounded-md bg-orange-primary transition-all duration-300 ease-in-out group-hover:w-full`}></span>
            <p>{cat} ({cat === 'all' ? PROJECT_DATA.length : PROJECT_DATA.filter(i => i.type === cat || (cat === 'mobile' && ['flutter', 'mobile'].includes(i.type))).length})</p>
          </button>
        ))}
      </div>

      {/* Grid List */}
      <div className="mb-2 mt-6 flex w-full flex-wrap justify-center gap-6">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <ProjectCard {...item} key={index} />
          ))
        ) : (
          <p className="text-center text-gray-500">No projects found.</p>
        )}
      </div>
    </div>
  )
}