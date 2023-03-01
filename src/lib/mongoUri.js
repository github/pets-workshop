import { MongoMemoryServer } from "mongodb-memory-server";

const mongoURI = process.env.MONGODB_URI;

if (!mongoURI) {
  if (process.env.NODE_ENV === "development") {
    // throw error for development
    throw new Error(
      "Please define the MONGODB_URI environment variable inside .env.local"
    );
  } 
}

async function getMongoUri() {
  if (mongoURI === "test") {
    // use test in-memory database for testing
    if (!global.mongoMemoryServer) {
      global.mongoMemoryServer = await MongoMemoryServer.create()
    }
    const mongoMemoryServer = global.mongoMemoryServer;
    console.log(mongoMemoryServer.getUri())
    return mongoMemoryServer.getUri();
  } else {
    // use environment variable for development
    return mongoURI;
  }
}

export default getMongoUri;
