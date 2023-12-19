const mongoose=require('mongoose')

const ChatbotShcema=new mongoose.Schema({
    image:{
        type:String,
        required:true
    }
})


const Chatbot= mongoose.models.Chatbot || new mongoose.model('Chatbot',ChatbotShcema)

module.exports=Chatbot
