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
    company: 'SMK TKM Teknik Tamansiswa Purworejo',
    type: 'Education',
    description: 'Mempelajari dasar-dasar manufaktur dan permesinan industri, mencakup teknik pengelasan, pengoperasian mesin bubut dan frais, sistem hidrolik, serta perancangan gambar teknik presisi.',
    date: '2018 - 2021',
    tech: ['AutoCAD', 'Teknik Mesin', 'Manufaktur'],
  },
  {
    title: 'Teknologi Informasi',
    company: 'Universitas Muhammadiyah Purworejo',
    type: 'Education',
    description: 'Menyelesaikan studi dengan fokus pada Manajemen Proyek, siklus pengembangan perangkat lunak (SDLC), perancangan sistem informasi, serta implementasi arsitektur web dan seluler.',
    date: 'September 2021 - Oktober 2025',
    tech: ['Laravel', 'Manajemen Proyek', 'Javascript', 'MySQL', 'Flutter'],
  },
  {
    title: 'KPPS 4 dan Sirekap di TPS 01 Desa Somongari',
    company: 'KPU Kabupaten Purworejo',
    type: 'Work',
    description: 'Bertanggung jawab penuh atas kelancaran administrasi pemungutan suara serta memastikan akurasi tinggi dalam proses rekapitulasi dan input data mandiri ke sistem Sirekap KPU.',
    date: '2024',
    tech: ['Sirekap', 'Data Entry', 'Administrasi'],
  },
  {
    title: 'Staf Sekretariat Desa Somongari',
    company: 'KPU Kabupaten Purworejo',
    type: 'Work',
    description: 'Mengelola divisi Teknik Penyelenggaraan Pemilu, kepatuhan hukum, serta strategi komunikasi publik dan kehumasan guna memastikan transparansi informasi di tingkat desa.',
    date: '2024 - 2025',
    tech: ['Manajemen Proyek', 'Hukum Pemilu', 'Public Speaking'],
  },
  {
    title: 'Wakil Ketua Bidang Anggota',
    company: 'Koperasi Merah Putih Desa Somongari',
    type: 'Work',
    description: 'Memimpin divisi keanggotaan dalam pengelolaan basis data, analisis partisipasi, serta merumuskan strategi inovatif guna meningkatkan keterlibatan dan kepuasan anggota koperasi.',
    date: '2025 - 2026',
    tech: ['Manajemen Anggota', 'Public Speaking'],
  },
  {
    title: 'Fullstack Developer',
    company: 'Upwork freelancer jobs',
    type: 'Work',
    description: 'Merancang dan mengembangkan solusi aplikasi web kustom end-to-end bagi klien global, meliputi arsitektur frontend, backend API, hingga pemeliharaan sistem yang optimal.',
    date: '2024 - Sekarang',
    tech: ['ReactJs', 'NextJs', 'Laravel', 'Tailwind', 'VueJs'],
  },
  {
    title: 'Technical Project Manager',
    company: 'PT Stechoq Robotika Indonesia',
    type: 'Work',
    description: 'Memimpin siklus hidup pengembangan perangkat lunak (SDLC), mengoordinasikan komunikasi lintas tim (Frontend & Backend), serta mengelola alur tugas dan rilis proyek dari perencanaan hingga implementasi.',
    date: '2025 - Sekarang',
    tech: ['Manajemen Proyek', 'Agile', 'Scrum', 'ReactJS', 'Laravel', 'Jira'],
  },
]