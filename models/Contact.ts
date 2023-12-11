import {Document, Schema, models, model} from 'mongoose';

export interface ContactDocument extends Document{
    id: string,
    name: string,
    relationship: string,
    duration: string,
} 

const ContactSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    relationship: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        enum: ['daily','every-other-day','every-three-day','weekly', 'bi-weekly', 'monthly', 'bi-monthly', 'quarterly', 'semi-annually'],
        required: true,
        default: 'monthly',
    },
});

export default models.Contact || model<ContactDocument>('Contact', ContactSchema);