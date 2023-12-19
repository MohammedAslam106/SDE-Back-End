const express=require('express')

const chatbot=require('./chatbot')
const file=require('./media_file')
const project=require('./projects')

const router=express.Router()

router.use('/chatbot',chatbot)
router.use('/file',file)
router.use('/project',project)


module.exports=router