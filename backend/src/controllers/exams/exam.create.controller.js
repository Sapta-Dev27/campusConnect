import Exam from '../../models/exam.model.js';


const createExam = async(req,res) => {
  try {
    const {examId, examName, examSemester, examType, examDate, examMarks} = req.body;

    const existingExam = await Exam.findOne({ $or: [ { examId : examId}, { examName : examName } ] });

    if(existingExam){
      return res.status(400).json({
        success:false,
        message:"Exam with given ID or Name already exists"
      })
    }
      
    const newExam = await Exam.create({
      examId : examId,
      examName : examName,
      examSemester : examSemester,
      examType : examType,
      examDate : examDate,
      examMarks  : examMarks
    })

    return res.status(201).json({
      success:true, 
      message:"Exam created successfully",
      data:newExam
    })
  }
  catch(error){
    console.log(error);
    res.status(500).json({
      success:false,
      message:"Internal Server Error"
    })
  }
}

export default createExam;