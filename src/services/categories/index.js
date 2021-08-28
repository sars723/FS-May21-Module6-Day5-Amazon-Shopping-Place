import express from "express";

import db from '../../db/models/association-models.js'
const Category=db.Category

const router = express.Router();
router.get("/",async(req,res)=>{
try {
   const data=await Category.findAll()
   res.send(data)
    res.send("test")
} catch (error) {
    console.log(error)
}
})
router.post("/", async(req,res)=>{
try {
    const data=await Category.create(req.body)
res.send(data)
} catch (error) {
    console.log(error)
}
})

router.get("/:id",async(req,res)=>{
try {
    const data=await Category.findByPk(req.params.id)
  if(data){
      res.send(data) 
  }
   else{

   }
  
} catch (error) {
    console.log(data)
}
})

router.put("/:id",async(req,res,next)=>{
    try {
        const data=await Category.update(req.body ,{where:{id:req.params.id},
        returning:true})
        res.send(data)
    } catch (error) {
        console.log(error)
        next(error)
    }
})

router.delete("/:id", async(req,res,next)=>{
    try {
        const data=await Category.destroy({where:{id:req.params.id}})
        if(data>0){
            res.send("ok")
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