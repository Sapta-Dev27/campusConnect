import mongoose from 'mongoose';

const examSchema = new mongoose.Schema({
  examId:{
    type:String,
    required:true,
    unique:true
  },
  examName:{
    type:String,
    required:true,
    unique:true
  },
  examSemester:{
    type:Number,
    required:true
  },
  examType:{
    type:String,
    required:true,
    enum : ["mid" , "end"]
  },
  examDate:{
    type:Date,
    required:true,
    unique:true
  },
  examMarks:{
    type :Number,
    required:true
  }
})


const Exam = new mongoose.model("Exam",examSchema);
export default Exam;