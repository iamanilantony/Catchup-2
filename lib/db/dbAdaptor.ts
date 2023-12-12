import { MongoClient } from "mongodb";

async function connectToMongoDB(): Promise<MongoClient> {
  return new Promise<MongoClient>(async (resolve, reject) => {
    try {
      const url: string =
        process.env.MONGODB_URI || "mongodb://localhost:27017";
      const client: MongoClient = new MongoClient(url);
      await client.connect();
      resolve(client);
    } catch (error) {
      reject(error);
    }
  });
}

export default connectToMongoDB;
