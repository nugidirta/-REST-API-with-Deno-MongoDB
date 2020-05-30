import { init, MongoClient } from "https://deno.land/x/mongo@v0.6.0/mod.ts";
//import "https://deno.land/x/dotenv/load.ts";

// Initialize the plugin
await init();


const client = new MongoClient();

client.connectWithUri(
  "mongodb://localhost:27017"
  //"mongodb://"+ Deno.env.get("DB_HOST") +":"+ parseInt(Deno.env.get("DB_PORT")!) +""
  //"mongodb+srv://dbUser:B3D5571h9C8qOBIl@cluster0-gbqi8.mongodb.net/test?retryWrites=true&w=majority",
);

const dbname :string = "deno"; 
const db = client.database(dbname);

const colldb = db.collection("book");

export { db, colldb };