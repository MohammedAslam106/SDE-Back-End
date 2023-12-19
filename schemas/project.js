const mongoose=require('mongoose')

const projectShcema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    episodeCount:{
        type:Number
    }
},
{ timestamps:true }
)

const Project= mongoose.models.Project || new mongoose.model('Project',projectShcema)

module.exports= Project
