import express from 'express'
import db from '../../db/models/association-models.js'
const {Cart,Product}=db

const router=express.Router()

router.route("/:userId").get(async(req,res,next)=>{
    try {
        const data=await Cart.findAll({
            where:{userId:req.params.userId},
            include:[Product]
        })
        res.send(data)
    } catch (error) {
        console.log(error)
        next(error)
    }
})

router.route("/:userId/:productId").post(async(req,res,next)=>{
    try {
        const data=await Cart.create({userId:req.params.userId,productId:req.params.productId})
        res.send(data)
    } catch (error) {
        console.log(next)
        next(error)
    }
}).delete(async(req,res,next)=>{
    try {
        const data=await Cart.destroy({where:{userId:req.params.userId,productId:req.params.productId}})
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
/* .get(async(req,res,next)=>{
    try {
        const data=await Cart.findByPk(req.params.id)
        if(data){
            res.send(data)
        }
        else{
            res.send("not found")
        }
    } catch (error) {
        console.log(error)
        next(error)
    }
}).put(async(req,res,next)=>{
    try {
        const data=await Cart.update(req.body,{where:{id:req.params.id},returning:true})
        res.send(data)


    } catch (error) {
        console.log(error)
        next(error)
    }
}) */

export default router