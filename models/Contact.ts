import { getAuthSession } from "@/lib/auth/auth";
import mongoose, { Document, Schema, models, model } from "mongoose";

export interface ContactDocument extends Document {
  id: string;
  name: string;
  relationship: string;
  duration: string;
}

const ContactSchema = new Schema({
  _id: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    ref: "users"
  },
  name: {
    type: String,
    required: true
  },
  relationship: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    enum: [
      "daily",
      "every-other-day",
      "every-three-day",
      "weekly",
      "bi-weekly",
      "monthly",
      "bi-monthly",
      "quarterly",
      "semi-annually"
    ],
    required: true,
    default: "monthly"
  },
  lastContacted: {
    type: Date,
    required: false
  },
  startFrom: {
    type: Date,
    required: false
  },
  dayToContact: {
    type: String,
    enum: [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday"
    ],
    required: false
  },
  removed: {
    type: Boolean,
    default: false,
    required: true
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  createdBy: { type: String },
  updatedBy: { type: String }
});

export default models.Contact ||
  model<ContactDocument>("contacts", ContactSchema);
