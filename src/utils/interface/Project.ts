export interface IProject {
  id?: number;
  title: string;
  image: string;
  deskripsi: string; // Matches database schema
  repo?: string;
  type: 'web' | 'mobile' | 'api';
  tech?: string[];
}