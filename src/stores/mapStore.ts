import { atom } from "nanostores";

export enum TypeSite {
    ECOTURISMO = 'Ecoturismo',
    CULTURAL = 'Cultural',
    GASTRONOMICO = 'Gastronómico'
}

export interface Point {
    id: string,
    geom: any,
    name: string,
    image: string,
    description: string,
    type: TypeSite
} 

export const points = atom<Array<Point>>([])