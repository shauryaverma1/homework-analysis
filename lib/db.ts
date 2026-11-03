import { MongoClient, Db } from "mongodb";
const uri=process.env.MONGODB_URI; if(!uri) throw new Error("MONGODB_URI is not configured");
const globalForMongo=globalThis as typeof globalThis & {mongoPromise?:Promise<MongoClient>};
const clientPromise=globalForMongo.mongoPromise??new MongoClient(uri).connect(); if(process.env.NODE_ENV!=="production")globalForMongo.mongoPromise=clientPromise;
export async function db():Promise<Db>{return (await clientPromise).db(process.env.MONGODB_DB||"mori");}