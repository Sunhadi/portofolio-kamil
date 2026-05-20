import { 
  SiVisualstudiocode, 
  SiGithub, 
  SiPostman, 
  SiFigma, 
  SiPlaywright, 
  SiTrello,
  SiDocker,
  SiLaragon,
  SiNotion,
  SiTestinglibrary // Menggantikan SiKatalon
} from 'react-icons/si'

export const softwareIcons = [
  { name: 'VS Code', icons: SiVisualstudiocode },
  { name: 'GitHub', icons: SiGithub },
  { name: 'Postman', icons: SiPostman },
  { name: 'Figma', icons: SiFigma },
  { name: 'Playwright', icons: SiPlaywright },
  { name: 'Trello', icons: SiTrello },
  { name: 'Docker', icons: SiDocker },
  { name: 'Laragon', icons: SiLaragon },
  { name: 'Notion', icons: SiNotion },
  { name: 'Katalon', icons: SiTestinglibrary }, // Tetap tampilkan label Katalon, tapi ikonnya testing library
]