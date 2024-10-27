import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";
import sql from './db.js'
// import { createClient } from '@supabase/supabase-js'

const app = express()
const port = 4040
app.use(cors())
app.use(express.json())
dotenv.config()

// Create a single supabase client for interacting with your database
// const supabase = createClient('https://xyzcompany.supabase.co', 'public-anon-key')

// const { Client } = pg;

// const client = new Client({
// 	user: process.env.USER,
// 	password: process.env.PSWD,
// 	host: process.env.HOST,
// 	port: process.env.PORT,
// 	database: process.env.DATABASE,
// });

const db = new pg.Pool({
	connectionString: process.env.DB_URL
})

app.get("/", function(req, res){
    res.status(200).send({message: "Server is live."})
})



app.post("/message",async function(req, res){
    // const {username, msg_title, content} = req.body
    

// async function getUsersOver(age) {
  const {username, msg_title, content} = await req.body
  // console.log(username, msg_title, content)
  // const data = await sql`
  //   select username, msg_title, content
  //   from messages

    //   return data
    const result = await db.query("INSERT INTO messages (username, msg_title, content) VALUES ($1, $2, $3)", [username, msg_title, content]);
    res.status(200).send({message: result})
})

app.listen(port, function(){
    console.log(`App is running on ${port}`)
})
