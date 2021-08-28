import express from 'express'
import db from '../../db/models/association-models.js'

const {User}=db

const router=express.Router()

router.route("/").get(async(req,res,next)=>{
try {
    const data=await User.findAll()
    res.send(data)
} catch (error) {
    console.log(error)
    next(error)
}
}).post(async(req,res,next)=>{
    try {
       const data=await User.create(req.body) 
       res.send(data)
    } catch (error) {
        console.log(error)
        next(error)
    }
})

router.route("/:id").get(async(req,res,next)=>{
try {
    const data=await User.findByPK(req.params.id)
    if(data){
        res.send(data)
    }else{
        res.status(404).send("not found")
    }
} catch (error) {
    console.log(error)
    next(error)
}
}).put(async(req,res,next)=>{
try {
    const data=await User.update(req.body,{where:{id:req.params.id},returning:true})
    res.send(data)
} catch (error) {
    console.log(error)
    next(error)
}
}).delete(async(req,res,next)=>{
try {
    const data=await User.destroy({where:{id:req.params.id}})
    if(data>0){
        res.send("deleted")
    }else{
        res.status(404).send("not found")
    }
} catch (error) {
    console.log(error)
    next(error)
}
})
export default router