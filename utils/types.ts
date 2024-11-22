export interface Perk {
  slug: string;
  name: string;
  tags: string[];
  type: 'killer' | 'survivor';
  character?: string;
}