import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      unique: true,
    },
    phone: String,
    description: String,
    password: String,
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user'
    },
    messages: [
      { name: {type: String},
        email: {type: String},
        phone: {type: String},
        message: {type: String},
        status: {type: String, enum: ['Read', 'UnRead'], default: 'UnRead'},
        createdAt: {
          type: Date,
          default: Date.now
        }
      }],
    bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Booking" }],
  },
  { timestamps: true }
);

export default mongoose.models.User ||
  mongoose.model("User", UserSchema);