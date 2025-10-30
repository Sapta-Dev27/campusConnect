import mongoose from 'mongoose';


const attendanceSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  subjectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject',
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: ['present', 'absent']
  }
  , date: {
    type: Date,
    required: true
  }
},
  {
    timestamps: true
  });

const Attendance = mongoose.model("Attendance", attendanceSchema);
export default Attendance;