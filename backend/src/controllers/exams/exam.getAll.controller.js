import Exam from "../../models/exam.model.js";

const getAllExams = async (req, res) => {
  try {
    const exams = await Exam.find();
    if (!exams || exams.legth === 0) {
      return res.status(404).json({
        success: false,
        message: "No exams found"
      })
    }
    return res.status(200).json({
      success: true,
      message: "Exams fetched successfully",
      data: exams
    })
  }
  catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error"
    })
  }
}

export default getAllExams;