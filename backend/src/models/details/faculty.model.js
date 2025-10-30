import mongoose from 'mongoose';

const facultySchema = new mongoose.Schema({
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
    }

  },
  passWord: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    required: true,
    default: true
  },
  branchId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Branch",
    required: true
  }
}, { timestamps: true });

const Faculty = mongoose.model("Faculty", facultySchema);
export default Faculty;