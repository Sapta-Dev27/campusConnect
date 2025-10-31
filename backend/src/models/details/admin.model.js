import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
  employeeId: {
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
    required: true,
    unique: true
  },
  phoneNo: {
    type: String,
    required: true,
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
  designation: {
    type: String,

  },
  department: {
    type: String,

  },
  salary: {
    type: Number,
  
  },
  joiningDate: {
    type: Date,
   
  },
  bloodGroup: {
    type: String,
 
    enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]
  },
  isSupeAdmin: {
    type: Boolean,
 
    default: false
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
      
    },
  },
  isActive: {
    type: Boolean,

    default: true
  },
  passWord: {
    type: String,
    required: true
  }
}, { timestamps: true });

const Admin = mongoose.model("Admin", adminSchema);
export default Admin;