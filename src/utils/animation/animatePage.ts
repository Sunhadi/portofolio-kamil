import gsap from 'gsap'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

const banners = ['#banner-1', '#banner-2', '#banner-3', '#banner-4']

export const animatePageIn = () => {
  if (document.querySelector(banners[0])) {
    const tl = gsap.timeline()

    tl.set(banners, {
      yPercent: 0,
    }).to(banners, {
      yPercent: 100,
      stagger: 0.1, // Cepat dan rapat
      ease: 'power4.inOut',
      duration: 1,
    })
  }
}

export const animatePageOut = (href: string, router: AppRouterInstance) => {
  if (document.querySelector(banners[0])) {
    const tl = gsap.timeline()

    tl.set(banners, {
      yPercent: -100,
    }).to(banners, {
      yPercent: 0,
      stagger: 0.1,
      ease: 'power4.inOut',
      duration: 1,
      onComplete: () => {
        router.push(href)
      },
    })
  }
}