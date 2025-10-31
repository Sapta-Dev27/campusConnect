import mongoose from 'mongoose';

const facultySchema = new mongoose.Schema({
  employeeId: {
    type: String,
    unique: true
  },
  firstName: {
    type: String
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
  },
  branchId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Branch",

  }
}, { timestamps: true });

const Faculty = mongoose.model("Faculty", facultySchema);
export default Faculty;