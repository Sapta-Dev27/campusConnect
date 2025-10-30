import mongoose from 'mongoose';

const materialSchema = new mongoose.Schema({
  materialId:{
    type:String,
    required:true,
    unique:true
  },
  materialTitle:{
    type:String,
    required:true
  },
  materialContent:{
   type:String,
   required:true
  },
  subjectId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Subject',
    required:true 
  },
  facultyId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Faculty',
    required:true
  },
  branchId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Branch',
    required:true
  },
  semester:{
    type:Number,
    required:true
  },
  materialType:{
    type:String,
    required:true,
    enum: ['syallus', 'notes', 'assignment', 'others']
  }
},
{
  timestamps: true
}
)

const Material = mongoose.model("Material" , materialSchema);
export default Material;

