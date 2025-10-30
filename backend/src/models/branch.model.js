import mongoose from 'mongoose';

const branchSchema = new mongoose.Schema({
  branchId:{
    type:String,
    required:true,
    unique:true
  },
  branchName:{
    type:String,
    required:true,
    unique:true
  }
})

const Branch = new mongoose.model("Branch",branchSchema);
export default Branch;