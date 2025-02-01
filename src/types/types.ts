export interface Image {
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
    cover_image: Image;
}
