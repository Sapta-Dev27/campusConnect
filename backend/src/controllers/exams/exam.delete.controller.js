import Exam from "../../models/exam.model.js";

const deleteExam = async(req,res) => {
  try{
    const {id} = req.params;
    const deletedExam = await Exam.findByIdAndDelete(id);
    if(!deletedExam){
      return res.status(404).json({
        success:false,
        message:"Exam not found"
      })
    }
    return res.status(200).json({
      success:true,
      message:"Exam deleted successfully",
      data:deletedExam
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

export default deleteExam;