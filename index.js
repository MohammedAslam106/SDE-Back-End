const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const apiRoutes=require('./routes')
require('dotenv').config()

mongoose.connect(`${process.env.MONGODB_URL}`).then(res=>console.log('mongodb connected succesfully')).catch(error=>console.log(error))

const server=express()
server.use(express.json())
server.use(cors())
server.use('/route',apiRoutes)


server.listen(process.env.PORT ?? 3001,()=>{
    console.log(`server running on port ${process.env.PORT}`)
})