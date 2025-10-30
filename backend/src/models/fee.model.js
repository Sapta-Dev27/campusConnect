import mongoose from 'mongoose';


const feeSchema = new mongoose.Schema({
  studentId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Student',
    required:true
  },
  semsester:{
    type:Number,
    required:true
  },
  feeType:{
    type:String,
    required:true,
    enum :['semester','library','exams','miscellaneous']
  },
  amount:{
    type: Number,
    required:true
  },
  paymentMode:{
    type:String,
    required:true,
    enum :['Cash','Card','UPI','NetBanking' , 'Cheque']
  },
  paymentDate:{
    type:Date, 
    required:true
  },
  trasactionId:{
    type:String,
    required:true,
    unique:true
  },
  status:{
    type:String,
    required:true,
    enum :['Paid','Pending','Failed']
  }
})

const Fee = mongoose.model("Fee" , feeSchema);
export default Fee;