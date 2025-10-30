import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
  employeeId: {
    type: String,
    required: true,
    unique: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
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
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  pinCode: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female", "prefer not to say"]
  },
  dob: {
    type: Date,
    required: true
  },
  designation: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  salary: {
    type: Number,
    required: true
  },
  joiningDate: {
    type: Date,
    required: true
  },
  bloodGroup: {
    type: String,
    required: true,
    enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]
  },
  isSupeAdmin: {
    type: Boolean,
    required: true,
    default: false
  },
  emergencyContact: {
    fullName: {
      type: String,
      required: true
    },
    relationship: {
      type: String,
      required: true
    },
    phoneNo: {
      type: String,
      required: true
    },
  },
  isActive: {
    type: Boolean,
    required: true,
    default: true
  },
  passWord: {
    type: String,
    required: true
  }
}, { timestamps: true });

const Admin = mongoose.model("Admin", adminSchema);
export default Admin;