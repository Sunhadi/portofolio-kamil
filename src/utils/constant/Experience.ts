// utils/constant/Experience.ts

export interface IExperience {
  title: string
  company: string
  type: string
  description: string
  date: string
  tech?: string[]
}

export const experience: IExperience[] = [
  {
    title: 'Teknik Mekanik Industri',
    company: 'SMK TKM TEKNIK TAMANSISWA PURWOREJO',
    type: 'Education',
    description: 'Mempelajari dasar manufaktur dan permesinan industri. Skill utama meliputi teknik pengelasan, pengoperasian mesin bubut dan frais, sistem hidrolik, serta perancangan gambar teknik mesin.',
    date: '2018 - 2021',
    tech: ['AutoCAD', 'Teknik Mesin', 'Manufaktur'],
  },
  {
    title: 'Teknologi Informasi',
    company: 'Universitas Muhammadiyah Purworejo',
    type: 'Education',
    description: 'Mempelajari Manajemen Proyek, Pengembangan Perangkat Lunak, dan Sistem Informasi.',
    date: 'September 2021 - Oktober 2025',
    tech: ['PHP', 'Laravel', 'MySQL', 'Java','Html', 'CSS', 'JavaScript', 'ReactJS', 'C++', 'Flutter'],
  },
  {
    title: 'Freelancer',
    company: 'Pengembangan Web dan aplikasi mobile',
    type: 'Work',
    description: 'Merancang dan membangun solusi digital kustom untuk klien, mencakup pengembangan front-end, back-end, hingga maintenance aplikasi berbasis web.',
    date: '2024 - Sekarang',
    tech: ['Laravel', 'NextJS', 'ReactJs', 'Tailwind'],
  },
  {
    title: 'KPPS 4 dan Sirekap di TPS 01 Desa Somongari',
    company: 'KPU Kabupaten Purworejo',
    type: 'Work',
    description: 'Bertanggung jawab atas administrasi pemungutan suara dan input data akurat ke sistem Sirekap KPU selama pemilu.',
    date: '2024',
    tech: ['Sirekap', 'Data Entry', 'Administrasi'],
  },
  {
    title: 'Staf Sekretariat Desa Somongari',
    company: 'KPU Kabupaten Purworejo',
    type: 'Work',
    description: 'Mengelola divisi Teknik Penyelenggaraan Pemilu, hukum, serta hubungan masyarakat (Humas) di tingkat desa.',
    date: '2024 - 2025',
    tech: ['Manajemen Proyek', 'Hukum Pemilu', 'Public Speaking'],
  },
  {
    title: 'Wakil Ketua Bidang Anggota',
    company: 'Koperasi Merah Putih Desa Somongari',
    type: 'Work',
    description: 'Memimpin divisi anggota, mengelola data anggota, serta merancang strategi untuk meningkatkan partisipasi dan kepuasan anggota koperasi.',
    date: '2025 - 2026',
    tech: ['Manajemen Anggota', 'Public Speaking'],
  },
]