import express from 'express'
import db from '../../db/models/association-models.js'
import Review from '../../db/models/Review.js'
import User from '../../db/models/User.js'
const {Category}=db
const Product=db.Product

const router=express.Router()

router.get("/",async(req,res,next)=>{
    try {
        const data=await Product.findAll({include:[{model:Category},{model:Review,include:{model:User}}]})
        res.send(data)
    } catch (error) {
        console.log(error)
        next(error)
    }
})
router.post("/",async(req,res,next)=>{
    try {
        const data=await Product.create(req.body)
        res.send(data)
    } catch (error) {
        console.log(error)
        next(error)
    }
})
router.get("/:id",async(req,res,next)=>{
    try {
        const data=await Product.findByPk(req.params.id)
        if(data){
            res.send(data)
        }
        else{
            res.status(404).send("not found")
        }
    } catch (error) {
        console.log(error)
        next(error)
    }
})
router.put("/:id",async(req,res,next)=>{
    try {
        const data=await Product.update(req.body,{where:{id:req.params.id},returning:true})
        res.send(data)
    } catch (error) {
        console.log(error)
        next(error)
    }
})

router.delete("/:id",async(req,res,next)=>{
   try {
    const data=await Product.destroy({where:{id:req.params.id}})
    if(data>0){
        res.send("deleted")
    }
    else{
        res.status(404).send("not found")
    }
   } catch (error) {
       console.log(error)
       next(error)
   }
})
export default router