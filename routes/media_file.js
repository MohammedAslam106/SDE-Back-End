
const express=require('express')
const routes=express.Router()
const File=require('../schemas/file')

routes.get('/:id', async(req,NextResponse)=>{
    try {
        const id=req.params.id
        const res=await File.find({projectId:id})
        console.log(res)
        return NextResponse.json({data:res})
    } catch (error) {
        console.log(error.message)
        return NextResponse.json({error:error.message})
    }
})

routes.get('/get-single-media/:id', async(req,NextResponse)=>{
    try {
        const id=req.params.id
        console.log(id)
        const res=await File.findOne({_id:id})
        return NextResponse.json({data:res})
    } catch (error) {
        return NextResponse.json({error:error.message})
    }
})

routes.post('/:id', async(req,Response)=>{
    try {
        const body= req.body
        const id=req.params.id
        console.log(id)
        console.log(body)
        const res=await File.create({
            name:body.name,
            description:body.description,
            projectId:id
        })
        console.log(res)
        return Response.json({data:res})
    } catch (error) {
        return Response.json({error:error.message})
    }
})

routes.patch('/:id', async(req,Response)=>{
    try {
        const body= req.body
        const id=req.params.id
        const res=await File.updateOne({
            _id:id
        },{$set:body},{runValidators:true})
        return Response.json({data:res})
    } catch (error) {
        return Response.json({error:error.message})
    }
})

routes.delete('/:id', async(req,Response)=>{
    try {
        const id=req.params.id
        console.log(id)
        // const query=await client.sql `DELETE FROM media_file WHERE id=${id};`
        const res=await File.deleteOne({_id:id})
        return Response.json({data:res})
    } catch (error) {
        return Response.json({error:error.message})
    }
})

module.exports=routes