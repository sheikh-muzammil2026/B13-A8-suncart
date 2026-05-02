// import { betterAuth } from "better-auth";
// import { MongoClient } from "mongodb";
// import { mongodbAdapter } from "better-auth/adapters/mongodb";

// const client = new MongoClient(process.env.MONGODB_URI);

// await client.connect();
// const db = client.db("suncart");



// export const auth = betterAuth({
//   database: mongodbAdapter(db, {
    
//     client
//   }),
//    emailAndPassword: { 
//     enabled: true, 
    
//   },
//   user: {
//         fields: {
//             image: "image", 
//         }
//     }
// });

import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("suncart");

export const auth = betterAuth({
  database: mongodbAdapter(db), // এখানে শুধু db দিলেই অনেক সময় কাজ করে
  emailAndPassword: {
    enabled: true,
  },
  // যদি ডিফল্ট ফিল্ডই ব্যবহার করেন, তবে user object রাখার প্রয়োজন নেই
});