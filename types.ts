export interface NavItem {
  id: string;
  label: string;
}

export interface EventItem {
  id: number;
  title: string;
  location: string;
  date: string;
  image: string;
}

export interface BrandItem {
  id: number;
  name: string;
  logo: string; // URL or placeholder text
}

export enum ViewState {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  EVENTS = 'EVENTS',
  BRANDS = 'BRANDS',
  GAME = 'GAME',
  BRAND_DETAIL = 'BRAND_DETAIL',
}