import { MongoClient, Db } from "mongodb";

async function connectToMongoDB(): Promise<Db> {
  return new Promise<Db>(async (resolve, reject) => {
    try {
      const url: string =
        process.env.MONGODB_URI || "mongodb://localhost:27017";
      const client: MongoClient = new MongoClient(url);
      await client.connect();
      const db = client.db("catchup");
      resolve(db);
    } catch (error) {
      reject(error);
    }
  });
}

export default connectToMongoDB;
