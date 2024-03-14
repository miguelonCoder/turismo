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
    image360: string,
    description: string,
    type: TypeSite,
    activities?: Array<string>,
    horarios?: Array<String>
} 

export interface Story {
    id:string,
    site: Point,
    image: string,
    datePublished: Date,
    description: string,
    title: string
}

export interface Event {
    id: string,
    site?: Point,
    descrition: string,
    title: string,

}

export const events = atom<Array<Event>>([])
export const stories = atom<Array<Story>>([])
export const points = atom<Array<Point>>([])