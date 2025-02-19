export interface Photo {
    id: number;
    collection: Collection;
    url: string;
    camera?: Camera;
    lens?: Lens;
    iso?: Iso;
    aperture?: string;
    shutter_speed?: string;
    width?: number;
    height?: number;
    rating?: number;
}

export interface Camera {
    id: number;
    name: string;
    short: string;
}

export interface Lens {
    id: number;
    name: string;
    short: string;
}

export interface Iso {
    id: number;
    name: string;
}

export interface Collection {
    id: number;
    name: string;
    name_ptbr: string;
    cover_image: Photo;
    description: string;
}
