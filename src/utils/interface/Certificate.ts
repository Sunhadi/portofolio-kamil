export interface ICertificate {
  id?: number;
  title: string;
  company: string;
  image: string;
  href: string;
  type: 'course' | 'competence';
}