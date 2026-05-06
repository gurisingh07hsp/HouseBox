export interface PropertyListItem {
    _id?: string;
    name: string;
    images: string[];
    video: string;
    description: string;
    address: string;
    zipCode: string;
    country: string;
    state: string;
    city: string;
    sold: boolean;
    status: string;
    agent: string;
    propertyPrices: {
        propertyPrice: number;
        unitPrice: number;
        beforePriceLabel: number;
        afterPriceLabel: number;
    },
    additionalInformation: {
        propertySize: string;
        landArea: string;
        rooms: number;
        bedrooms: number;
        bathrooms: number;
        garages: number;
        garageSize: string;
        yearBuilt: string;
    },
    amenities: string[],
    floors: {
        floorNumber: number;
        floorImage: string;
        floorPrice: number;
        floorSize: number;
        bedrooms: number;
        bathrooms: number;
    }[],
}