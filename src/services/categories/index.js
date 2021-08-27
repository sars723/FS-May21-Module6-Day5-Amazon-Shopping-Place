import express from "express";
const router = express.Router();
import db from '../../db/models/association-models.js'
const {Category}=db

router.get("/",async(req,res)=>{
try {
    console.log("test")
    res.send("test")
} catch (error) {
    
}
})
export default router