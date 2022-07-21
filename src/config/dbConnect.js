import mongoose from "mongoose";

await mongoose.connect('mongodb+srv://alura:loserlikeme22@cluster0.xrsvarx.mongodb.net/alura-node');

let db = mongoose.connection;

export default db;