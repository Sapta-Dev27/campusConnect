import mongoose from 'mongoose';

const noticeSchema = new mongoose.Schema({
  noticeId:{
    type:String,
    required:true,
    unique:true
  },
  noticeTitle:{
    type:String,
    required:true
  },
  noticeDescription:{
    type:String,
    required:true
  },
  noticeType:{
    type:String,
    required:true,
    enum:["faculty","student","general"]
  }
},
{ timestamps: true });

const Notice = mongoose.model("Notice" , noticeSchema);
export default Notice;