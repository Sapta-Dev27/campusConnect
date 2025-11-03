import Exam from "../../models/exam.model.js";

const updateExams = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedExam = await Exam.findByIdAndUpdate(id, updateData, {
      new: true
    });

    if (!updatedExam) {
      return res.status(404).json({
        success: false,
        message: "Exam not found"
      })
    }
    return res.status(200).json({
      success: true,
      message: "Exam updated successfully",
      data: updatedExam
    })
  }
  catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error"
    })
  }
}

export default updateExams;