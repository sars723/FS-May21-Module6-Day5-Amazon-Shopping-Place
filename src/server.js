import express from 'express'
import cors from 'cors'
import {syncSequelize} from "./db/dbConnection.js"
import categoryRouters from "./services/categories/index.js"

const PORT=process.env.PORT
const server=express()

server.use(cors())
server.use(express.json())

server.use('/categories',categoryRouters)

server.listen(PORT,async()=>{
    console.log("server is running on port"+PORT)

    await syncSequelize();
})
