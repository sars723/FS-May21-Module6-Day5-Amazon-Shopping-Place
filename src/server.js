import express from 'express'
import cors from 'cors'
import {syncSequelize} from "./db/dbConnection.js"
import categoryRoutes from "./services/categories/index.js"
import reviewRoutes from "./services/reviews/index.js"
import productRoutes from "./services/products/index.js"
import cartRoutes from "./services/cart/index.js"
import userRoutes from "./services/users/index.js"

const port=process.env.PORT
const server=express()

server.use(cors())
server.use(express.json())

server.use('/categories',categoryRoutes)
server.use('/reviews',reviewRoutes )
server.use("/products",productRoutes)
server.use("/cart",cartRoutes)
server.use("/users",userRoutes)

server.listen(port, async () => {
    console.log(" Server is running on port ", port);
    await syncSequelize();
  });
  
  server.on("error", (error) => console.log(" Server is crashed due to ", error));
  
