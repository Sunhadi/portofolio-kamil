'use client'

import TextSection from '@/components/common/TextSection'
import { twMerge } from 'tailwind-merge'
import { techIcons } from '@/utils/constant/TechIcons'
import { softwareIcons } from '@/utils/constant/SoftwareIcons'
import { motion } from 'framer-motion'
import Image from 'next/image'
import ExperienceTimeline from '@/components/common/ExperienceTimelime'
import { experience } from '@/utils/constant/Experience'

export default function About() {
  const fadeInAnimationVariants = {
    hidden: { opacity: 0, y: 100 },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.05 * index },
    }),
  }

  return (
    <section className="text-black-primary">
      <TextSection icon="😎" text="Tentang Saya" />
      
      <div className="mx-auto mb-12 mt-8 flex flex-col items-center justify-center gap-12 md:gap-16 lg:flex-row">
        
        {/* CONTAINER FOTO PROFIL BULAT */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative flex items-center justify-center h-72 w-72 shrink-0 md:h-[400px] md:w-[400px]"
        >
          {/* Foto Profil dengan Shadow Neo-Brutalism */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative h-full w-full overflow-hidden rounded-full border-4 border-black-primary bg-yellow-primary shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]"
          >
            <Image
              src={'/profil-2.png'}
              alt="Ahmad Sunhadi Kamil"
              width={400}
              height={400}
              priority
              className="h-full w-full object-cover object-center"
            />
          </motion.div>

          {/* Badge Rumah */}
          <div className="absolute right-4 bottom-4 z-20 flex h-16 w-16 items-center justify-center rounded-full border-4 border-black-primary bg-blue-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <span className="text-3xl">🏠</span>
          </div>
        </motion.div>

        {/* DESKRIPSI TEKS - SUDAH DIPERBAIKI */}
        <p className="mt-5 text-justify text-base text-secondary-text md:mt-0 lg:w-1/2 xl:text-lg leading-relaxed">
          Lulusan <b>Teknologi Informasi</b> dari Universitas Muhammadiyah Purworejo dengan semangat besar di dunia pengembangan perangkat lunak. Saya memiliki landasan yang kuat dalam pemrograman serta pengalaman praktis dalam membangun solusi digital dari tahap pengembangan hingga implementasi.
          <br /><br />
          Saat ini, saya fokus mengembangkan karier sebagai <b>Web Developer</b>, sambil memperluas keahlian ke ranah <b>Quality Assurance (QA)</b> dan <b>Project Management</b> untuk memastikan setiap produk yang dihasilkan memiliki kualitas tinggi, efisien, dan tepat guna.
          <br /><br />
          Sebagai <b>Web Developer</b>, saya memiliki keahlian dalam membangun antarmuka web yang modern dan responsif menggunakan <b>ReactJS</b> dan <b>NextJS</b>. Di sisi <i>back-end</i>, saya berfokus pada pengembangan sistem yang terstruktur dan aman menggunakan <b>Laravel</b>. Selain itu, saya aktif memperdalam pengembangan aplikasi <i>mobile</i> menggunakan <b>Flutter</b> serta meningkatkan kualitas perangkat lunak melalui <i>automated testing</i> menggunakan <b>Playwright</b> dan <b>Katalon</b>.
        </p>
      </div>

      {/* RINGKASAN PROFESIONAL */}
      <TextSection icon="💼" text="Ringkasan Profesional" classNames="mb-10 text-center" />
      <div className="mx-auto mb-10 flex grid-cols-9 flex-col p-2 text-blue-50 md:grid">
        {experience.map((data, index: number) => (
          <ExperienceTimeline position={index % 2 == 1} key={index} {...data} />
        ))}
      </div>

      {/* TEKNOLOGI */}
      <TextSection icon="🎯" classNames="mt-10 xl:mt-28" text="Teknologi yang saya gunakan" />
      <div className="mt-5 flex flex-wrap justify-center gap-5 xl:gap-10 xl:px-40">
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
              className="flex h-24 w-24 flex-col items-center justify-center gap-y-2 rounded-2xl border-2 bg-white duration-150 hover:scale-105 hover:border-black-primary hover:shadow-button-card md:h-36 md:w-36 md:p-4"
            >
              <Icons className="text-4xl text-black-primary md:text-6xl" />
              <p className="text-base font-bold text-black-primary md:text-xl text-center">{data.name}</p>
            </motion.div>
          )
        })}
      </div>

      {/* SOFTWARE & TOOLS */}
      <TextSection icon="🛠️" classNames="mt-16 xl:mt-28" text="Software & Tools" />
      <div className="mt-5 flex flex-wrap justify-center gap-5 xl:gap-10 xl:px-40 mb-20">
        {softwareIcons.map((data, index) => {
          const Icons = data.icons
          return (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="animate"
              variants={fadeInAnimationVariants}
              viewport={{ once: true }}
              custom={index}
              className="flex h-24 w-24 flex-col items-center justify-center gap-y-2 rounded-2xl border-2 bg-white duration-150 hover:scale-105 hover:border-black-primary hover:shadow-button-card md:h-36 md:w-36 md:p-4"
            >
              <Icons className="text-4xl text-black-primary md:text-6xl" />
              <p className="text-base font-bold text-black-primary md:text-xl text-center">{data.name}</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}