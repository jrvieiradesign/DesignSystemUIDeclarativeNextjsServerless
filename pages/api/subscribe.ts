import { VercelRequest, VercelResponse } from "@vercel/node";
import { MongoClient, Db } from "mongodb";
// import url from 'url';

let cacheDb: Db = null;

async function connectToDatabase(uri: string) {
  if (cacheDb) {
    return cacheDb;
  }
  const client = await MongoClient.connect(uri ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const dbName = new URL(uri).pathname.substr(1);

  const db = client.db(dbName);

  cacheDb = db;

  return db;
}

export default async(req: VercelRequest, res: VercelResponse) => {
  const { email } = req.body;

  const db = await connectToDatabase(process.env.MONGODB_URI);

  const collection = db.collection('subscribers');

  await collection.insertOne({
    email,
    subscribedAt: new Date(),
  })

  return res.status(201).json({ ok: true });
}