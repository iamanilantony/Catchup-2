import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/dbConnect';
import Contact,  { ContactDocument }  from "@/models/Contact";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    await dbConnect();

    try {
        const contacts: ContactDocument[]  = await (Contact as any).find({}) as ContactDocument[];
        console.log(contacts,'worse')
        res.status(200).json({ status: 'success', data: contacts });
    } catch (e) {
        console.error(e);
        res.status(404).json({ status: 'error', message: 'Recipe search could not be performed.' });
    }
}
