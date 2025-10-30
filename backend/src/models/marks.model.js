import mongoose from 'mongoose';


const marksSchema = new mongoose.Schema({
  studentId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Student',
    required:true
  },
  examId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Exam',
    required:true
  },
  subjectId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Subject',
    required:true
  },
  marksObtained:{
    type:Number,
    required:true
  },
  semester :{
    type:Number,
    required:true
  }
})

const Marks = mongoose.model("Marks:" , marksSchema);
export default Marks;