import mongoose from "mongoose";

const PropertySchema = new mongoose.Schema(
  {
    name: {
        type: String,
        required: true,
    },
    images: [{type: String}],
    video: {type: String},
    description: {
        type: String
    },
    address: {
      type: String,
      required: true,
    },
    zipCode: {
        type: String,
        required: true
    },
    country: {
        type: String
    },
    state: {
        type: String
    },
    city: {
        type: String
    },
    sold: {
        type: Boolean
    },
    status: {
        type: String,

    },
    agent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    propertyPrices: {
        propertyPrice: {type: Number, requried: true},
        unitPrice: {type: Number},
        beforePriceLabel: {type: Number},
        afterPriceLabel: {type: Number},
    },
    additionalInformation: {
        propertySize: {
            type: String,
            required: true
        },
        landArea: {
            type: String,
            required: true
        },
        rooms: {
            type: Number,
            required: true
        },
        bedrooms: {
            type: Number,
            required: true
        },
        bathrooms: {
            type: Number,
            required: true,
        },
        garages: {
            type: Number
        },
        garageSize: {
            type: String
        },
        yearBuilt: {
            type: String
        }
    },
    amenities: {
        type: [String],
        default: [],
    },
    floors: [{
        floorNumber: {type: Number},
        floorImage: {type: String},
        floorPrice: {type: Number},
        floorSize: {type: Number},
        bedrooms: {type: Number},
        bathrooms: {type: Number},
    }],
  },
  { timestamps: true }
);

export default mongoose.models.Property ||
  mongoose.model("Property", PropertySchema);