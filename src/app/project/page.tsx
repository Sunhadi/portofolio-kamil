'use client'

import { useState, useEffect } from 'react'
import ProjectCard from '@/components/common/ProjectCard'
import TextSection from '@/components/common/TextSection'
import { IProject } from '@/utils/interface/Project'
import { supabase } from '@/lib/supabaseClient'
import { GithubStats } from '@/components/common/GithubStats'

const ProjectSkeleton = () => (
  <div className="h-64 w-64 animate-pulse rounded-[4px] bg-gray-200 dark:bg-gray-800 shadow-sm border border-black/10">
    <div className="h-full w-full" />
  </div>
)

export default function Project() {
  const [filter, setFilter] = useState('all')
  const [projects, setProjects] = useState<IProject[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProjects() {
      try {
        setLoading(true)
        const { data, error } = await supabase
          .from('project')
          .select('*')
        
        if (error) {
          console.error("Supabase Error:", error)
          return
        }
        
        const formattedData = (data || []).map((item) => ({
          ...item,
          image: item.image?.trim(),
          tech: typeof item.tech === 'string' 
            ? item.tech.split(',').map((t: string) => t.trim()) 
            : item.tech
        }))

        setProjects(formattedData as IProject[])
      } catch (err) {
        console.error("Unexpected error:", err)
      } finally {
        setLoading(false)
      }
    }
    fetchProjects()
  }, [])

  const filteredData = projects.filter((item) => {
    if (filter === 'all') return true
    if (filter === 'mobile') {
      return ['android', 'ios', 'flutter', 'mobile'].includes(item.type.toLowerCase())
    }
    return item.type.toLowerCase() === filter.toLowerCase()
  }).reverse()

  return (
    <div className="container mx-auto px-4 py-6 md:py-10">
      <TextSection icon="⚒️" text="Project" />
      
      <div className="my-6 md:my-10 flex justify-center w-full overflow-hidden">
        <div className="scale-[0.75] sm:scale-90 md:scale-100 origin-center">
          <GithubStats />
        </div>
      </div>
      
      <div className="my-6 md:my-8 flex justify-center gap-3 sm:gap-6 md:gap-8 lg:gap-10 font-semibold text-[#616D8A] dark:text-white">
        {['all', 'web', 'mobile', 'api'].map((cat) => (
          <button 
            key={cat}
            className="group relative flex cursor-pointer flex-col items-center justify-center uppercase text-[11px] sm:text-xs md:text-base tracking-widest" 
            onClick={() => setFilter(cat)}
          >
            <span className={`absolute bottom-[-4px] h-1 ${filter === cat ? 'w-full' : 'w-0'} rounded-md bg-orange-primary transition-all duration-300 ease-in-out group-hover:w-full`}></span>
            <p>{cat} ({cat === 'all' ? projects.length : projects.filter(i => i.type.toLowerCase() === cat || (cat === 'mobile' && ['flutter', 'android', 'ios'].includes(i.type.toLowerCase()))).length})</p>
          </button>
        ))}
      </div>

      <div className="mb-10 mt-6 flex w-full flex-wrap justify-center gap-4 sm:gap-6 md:gap-10">
        {loading ? (
          [...Array(4)].map((_, i) => <ProjectSkeleton key={i} />)
        ) : filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <ProjectCard 
              key={item.id || index} 
              {...item} 
              description={item.deskripsi}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 py-20 italic">Belum ada project.</p>
        )}
      </div>
    </div>
  )
}