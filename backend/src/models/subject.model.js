import mongoose from 'mongoose';


const subjectSchema = new mongoose.Schema({
  subjectId:{
    type:String,
    required:true,
    unique:true
  },
  subjectName:{
    type:String,
    required:true,
    unique:true
  },
  subjectCode:{
    type:String,
    required:true,
    unique:true
  },
  semester:{
    type:Number,
    required:true
  },
  subjectCredits:{
    type:Number,
    required:true
  },
  branchId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Branch',
    required:true
  }
})

const Subject = mongoose.model("Subject" , subjectSchema);
export default Subject;