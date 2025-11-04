import Notice from "../../models/notice.model.js";

const deleteNotice = async(req,res) => {
  try{
    const {id} = req.params;

    const deletedNotice = await Notice.findByIdAndDelete(id);

    if(!deletedNotice){
      return res.status(404).json({
        success:false,
        message:"Notice not found"
      })  
    }

    return res.status(200).json({
      success:true,
      message:"Notice deleted successfully",
      data: deletedNotice
    })
  }
  catch(error){
    console.log("Error in deleting notice: ", error);
    return res.status(500).json({ 
      success:false,  
      message:"Internal Server Error" ,
      error: error.message
    })  
  }
}

export default deleteNotice;