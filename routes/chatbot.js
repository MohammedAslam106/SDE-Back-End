const express=require('express')
const Chatbot=require('../schemas/chatbot')
const routes=express.Router()

routes.get('/', async(req,Response)=>{
    try {
        // const response=await client.sql `SELECT * FROM chatbot;`
        const response=await Chatbot.find()
        console.log(response)
        return Response.json({data:response})
    } catch (error) {
        return Response.json({error:error.message})
    }
})


routes.post('/', async(req,Response)=>{
    try {
        const body=req.body
        console.log(body)
        const response=await Chatbot.create({
            image:body.image
        })
        return Response.json({data:response})
    } catch (error) {
        return Response.json({error:error.message})
    }
})


module.exports=routes