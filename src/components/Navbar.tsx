'use client'

import { useEffect, useState } from 'react'
import { IconContext } from 'react-icons'
import { RxHamburgerMenu } from 'react-icons/rx'
import { RiCloseFill } from 'react-icons/ri'
import { twMerge } from 'tailwind-merge'
import { logoLinks } from '@/utils/constant/LogoLinks'
import TransitionLink from './common/transitionLink'
import { Tooltip } from '@material-tailwind/react'
import { usePathname, useRouter } from 'next/navigation'
import { animatePageOut } from '@/utils/animation/animatePage'

export default function Navbar() {
  const [isActive, setIsActive] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [navBg, setNavBg] = useState(false)

  const pathName = usePathname()
  const router = useRouter()

  const navLinks = [
    { name: '🚀 Home', href: '/' },
    { name: '😎 About', href: '/about' },
    { name: '⚒️ Project', href: '/project' },
    { name: '📜 Sertifikat', href: '/sertifikat' },
    { name: '📲 Contact', href: '/contact' },
  ]

  const navigationRoutes: Record<string, string> = {
    '/': '/about',
    '/about': '/project',
    '/project': '/sertifikat',
    '/sertifikat': '/resume',
  }

  useEffect(() => {
    setMounted(true)
    const changeNavBg = () => {
      window.scrollY >= 100 ? setNavBg(true) : setNavBg(false)
    }

    if (isActive) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    window.addEventListener('scroll', changeNavBg)
    return () => window.removeEventListener('scroll', changeNavBg)
  }, [isActive])

  return (
    <nav
      className={twMerge(
        `sticky top-0 z-50 flex items-center justify-end bg-transparent px-5 py-3 text-[#616D8A] duration-200 dark:text-white md:px-10 md:py-5`,
        navBg && 'md:justify-center md:py-2',
      )}
    >
      {/* Desktop Menu */}
      <ul
        className={twMerge(
          'hidden gap-6 text-lg md:flex',
          navBg &&
            'gap-4 rounded-xl border-2 border-black-primary bg-white p-4 text-black-primary shadow-nav-card',
        )}
      >
        {navLinks.map((link, index) => (
          <TransitionLink key={index} href={link.href} label={link.name} />
        ))}
      </ul>
      
      {/* Next Page Floating Button */}
      {navBg && mounted && (
        <div
          onClick={() => {
            const targetRoute = navigationRoutes[pathName]
            if (targetRoute) {
              animatePageOut(targetRoute, router)
            }
          }}
          className="fixed top-0 my-4 hidden h-16 w-16 -rotate-120 cursor-pointer rounded-full border-4 border-black-primary bg-yellow-primary duration-150 hover:-rotate-90 md:right-16 md:block"
        >
          <Tooltip content="Next Page">
            <svg xmlns="http://www.w3.org/2000/svg" className="p-2" viewBox="0 0 24 24">
              <g fill="none" stroke="black" strokeLinecap="round" strokeWidth={2}>
                <path strokeDasharray="2 4" strokeDashoffset={6} d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21">
                  <animate attributeName="stroke-dashoffset" dur="0.6s" repeatCount="indefinite" values="6;0" />
                </path>
                <path strokeDasharray={30} strokeDashoffset={30} d="M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3">
                  <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.1s" dur="0.3s" values="30;0" />
                </path>
                <path strokeDasharray={10} strokeDashoffset={10} d="M12 8v7.5">
                  <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="10;0" />
                </path>
                <path strokeDasharray={6} strokeDashoffset={6} d="M12 15.5l3.5 -3.5M12 15.5l-3.5 -3.5">
                  <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="6;0" />
                </path>
              </g>
            </svg>
          </Tooltip>
        </div>
      )}

      {/* MOBILE SECTION */}
      <div className="flex md:hidden">
        <button
          onClick={() => setIsActive(!isActive)}
          className="relative z-[60] flex h-12 w-12 items-center justify-center rounded-full border-2 border-black-primary bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform active:scale-90"
        >
          <div className={twMerge("transition-all duration-300", isActive ? "rotate-180" : "rotate-0")}>
            <IconContext.Provider value={{ className: 'text-2xl text-black-primary' }}>
              {isActive ? <RiCloseFill /> : <RxHamburgerMenu />}
            </IconContext.Provider>
          </div>
        </button>
      </div>

      <div
        className={twMerge(
          'fixed inset-0 h-screen w-full bg-white/80 backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] md:hidden',
          isActive ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0',
          'z-[55]' 
        )}
      >
        <div className="flex h-full flex-col items-center justify-center px-6">
          <ul className="flex w-full flex-col gap-4">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className={twMerge(
                  "transform transition-all duration-500",
                  isActive ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                )}
                style={{ transitionDelay: `${index * 75}ms` }}
                onClick={() => setIsActive(false)}
              >
                <a 
                  href={link.href}
                  className="block rounded-2xl border-2 border-black-primary bg-gray-50 p-5 text-center text-xl font-bold text-[#616D8A] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none transition-all"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div 
            className={twMerge(
              "mt-12 flex gap-6 transition-all duration-700 delay-[400ms]",
              isActive ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
          >
            {logoLinks.slice(0, 5).map((link, index) => {
              // PERBAIKAN: Definisikan tipe Icon sebagai ElementType untuk TypeScript
              const Icon: React.ElementType = link.icon
              return (
                <a 
                  key={index} 
                  href={link.href} 
                  target="_blank" 
                  rel="noreferrer"
                  className="rounded-full border-2 border-black-primary bg-white p-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:shadow-none transition-all"
                >
                  <Icon className="text-2xl text-black-primary" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}