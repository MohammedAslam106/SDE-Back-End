const express=require('express')
const routes=express.Router()
const Project=require('../schemas/project')

routes.get('/', async(req,res)=>{
    try {
        const response=await Project.aggregate([
            {
            $lookup: {
                from: "files",
                localField: "_id",
                foreignField: "projectId",
                as: "mediaFiles"
            }
            },
            {
            $addFields: {
                media_file_count: { $size: "$mediaFiles" }
            }
            },
            {
            $project: {
                mediaFiles: 0 // Exclude mediaFiles array from the final output
            }
            }
        ]);
        return res.json({data:response})
    } catch (error) {
        console.log(error)
        return res.json({error:error.message})
    }
})


routes.post('/', async(req,response)=>{
    try {
        const body=req.body
        console.log(body)
        const image=`https://ui-avatars.com/api/?rounded=false&background=random&bold=true&format=svg&name=${body.name}`
        const res=await Project.create({
            name:body.name,
            image:image
        })
        console.log(res)
        return response.json({data:res})
        
    } catch (error) {
        console.log(error)
        return response.json({error:error.message})
    }
})



module.exports=routes