'use client'

import TextSection from '@/components/common/TextSection'
import { twMerge } from 'tailwind-merge'
import { techIcons } from '@/utils/constant/TechIcons'
import { motion } from 'framer-motion'
import Image from 'next/image'
import ExperienceTimeline from '@/components/common/ExperienceTimelime'
import { experience } from '@/utils/constant/Experience'

export default function About() {
  const fadeInAnimationVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.05 * index,
      },
    }),
  }

  return (
    <section className="text-black-primary">
      <TextSection icon="😎" text="Tentang Saya" />
      
      <div className="mx-auto mb-12 mt-8 flex flex-col items-center justify-center gap-8 md:gap-10 lg:flex-row">
        {/* CONTAINER FOTO PROFIL NEO-BRUTALISM IMPROVED */}
        <div className="relative group h-72 w-72 shrink-0 rounded-3xl border-4 border-black-primary bg-yellow-primary shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:h-[400px] md:w-[350px]">
          
          {/* Badge Ikon Kopi Animasi */}
          <div className="absolute -right-4 -top-4 z-10 flex h-14 w-18 items-center justify-center rounded-xl border-4 border-black-primary bg-orange-primary shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:h-16 md:w-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 md:h-12 md:w-12"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              >
                <path
                  strokeDasharray={48}
                  strokeDashoffset={48}
                  d="M17 9v9a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V9z"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.6s"
                    values="48;0"
                  />
                </path>
                <path
                  strokeDasharray={14}
                  strokeDashoffset={14}
                  d="M17 14H20C20.55 14 21 13.55 21 13V10C21 9.45 20.55 9 20 9H17"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.6s"
                    dur="0.2s"
                    values="14;28"
                  />
                </path>
              </g>
              <mask id="lineMdCoffeeLoop0">
                <path
                  fill="none"
                  stroke="#fff"
                  strokeWidth={2}
                  d="M8 0c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4M12 0c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4M16 0c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4"
                >
                  <animateMotion
                    calcMode="linear"
                    dur="3s"
                    path="M0 0v-8"
                    repeatCount="indefinite"
                  />
                </path>
              </mask>
              <rect
                width={24}
                height={0}
                y={7}
                fill="currentColor"
                mask="url(#lineMdCoffeeLoop0)"
              >
                <animate
                  fill="freeze"
                  attributeName="y"
                  begin="0.8s"
                  dur="0.6s"
                  values="7;2"
                />
                <animate
                  fill="freeze"
                  attributeName="height"
                  begin="0.8s"
                  dur="0.6s"
                  values="0;5"
                />
              </rect>
            </svg>
          </div>

          {/* Wrapper Image agar pas dengan border radius bingkai */}
          <div className="w-full h-full overflow-hidden rounded-[20px]">
            <Image
              src={'/me.png'}
              alt="Picture of the author"
              width={500}
              height={500}
              priority
              className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* DESKRIPSI TEKS */}
        <p className="mt-5 text-justify text-base text-secondary-text md:mt-0 lg:w-1/2 xl:text-lg leading-relaxed">
          Saya adalah lulusan dari Jurusan <b>Teknologi Informasi</b> di Universitas Muhammadiyah Purworejo. 
          memiliki pemahaman yang kuat tentang bahasa pemrograman dan pengembangan web, serta pengalaman langsung dalam proyek <b>pengembangan perangkat lunak</b>.
          <br />
          <br />
          Saat ini, fokus saya adalah terus mengembangkan kemampuan di bidang <b>pengembangan web dan Android</b>.
          <br />
          <br />
          Saya memiliki pengalaman menggunakan <b>ReactJS</b> dan <b>NextJS</b> untuk pengembangan front-end, serta <b>ExpressJS</b> dan <b>AdonisJS</b> untuk pengembangan back-end. 
          Selain itu, saya juga sedang memperdalam <b>Kotlin</b> untuk pengembangan aplikasi Android.
        </p>
      </div>

      <TextSection
        icon="💼"
        text="Ringkasan Profesional"
        classNames="mb-10 text-center"
      />
      <div className="mx-auto mb-10 flex grid-cols-9 flex-col p-2 text-blue-50 md:grid">
        {experience.map((data, index: number) => (
          <ExperienceTimeline position={index % 2 == 1} key={index} {...data} />
        ))}
      </div>

      <TextSection
        icon="🎯"
        classNames="mt-10 xl:mt-28"
        text="Teknologi yang saya gunakan"
      />
      <div className="mt-5 flex flex-wrap justify-center justify-items-center gap-5 xl:gap-10 xl:px-40">
        {techIcons.map((data, index) => {
          const Icons = data.icons
          return (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="animate"
              variants={fadeInAnimationVariants}
              viewport={{ once: true }}
              custom={index}
              className={twMerge(
                `flex h-24 w-24 flex-col items-center justify-center gap-y-2 rounded-2xl border-2 bg-white duration-150 hover:scale-105 hover:border-black-primary hover:shadow-button-card md:h-36 md:w-36 md:p-4`,
              )}
            >
              <Icons
                className={twMerge(`text-4xl text-black-primary md:text-6xl`)}
              />
              <p className="text-base font-bold text-black-primary md:text-xl">
                {data.name}
              </p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}