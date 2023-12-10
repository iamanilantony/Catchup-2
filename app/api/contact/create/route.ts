import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/dbConnect';
import Contact,  { ContactDocument }  from "@/models/Contact";

export async function POST() {
    const res = await fetch('https://data.mongodb-api.com/...', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'API-Key': process.env.DATA_API_KEY!,
      },
      body: JSON.stringify({ time: new Date().toISOString() }),
    })
   
    const data = await res.json()
   
    return data
  }

