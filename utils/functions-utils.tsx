import { PropertyListItem } from "@/types/types"
export const PropertySlugify = (property: PropertyListItem) => {
    return `${property.additionalInformation.bedrooms}-bhk-bedroom-${property.name}-for-sale-in-${property.address.replace(/\s+/g, '-').toLowerCase()}-${property._id}`
}