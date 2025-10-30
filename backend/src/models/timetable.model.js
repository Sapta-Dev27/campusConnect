import mongoose from 'mongoose';

const timetableSchema = new mongoose.Schema({
  branchId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Branch',
    required:true
  },
  semester:{
    type:Number,
    required:true
  },
  timetableFile:{
    type:String,  
    required:true
  }
});


const Timetable = mongoose.model("Timetable" , timetableSchema);
export default Timetable;