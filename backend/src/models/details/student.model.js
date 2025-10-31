import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  enrollNo: {
    type: String,
    unique: true
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  
  },
  email: {
    type: String,

    unique: true
  },
  phoneNo: {
    type: String,
    
    unique: true
  },
  profile: {
    type: String
  },
  address: {
    type: String,
  
  },
  city: {
    type: String,

  },
  state: {
    type: String,
 
  },
  country: {
    type: String,
  
  },
  pinCode: {
    type: String,

  },
  gender: {
    type: String,
   
    enum: ["male", "female", "prefer not to say"]
  },
  dob: {
    type: Date,
  
  },
  semester: {
    type: Number,
    
  },
  branchId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Branch",
    
  },
  bloodGroup: {
    type: String,

    enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]
  },
  emergencyContact: {
    fullName: {
      type: String,

    },
    relationship: {
      type: String,
  
    },
    phoneNo: {
      type: String,
     
    }
  },
  passWord: {
    type: String,

  },
  isActive: {
    type: Boolean,
    
    default: true
  }
}, { timestamps: true });

const Student = mongoose.model("Student", studentSchema);
export default Student;