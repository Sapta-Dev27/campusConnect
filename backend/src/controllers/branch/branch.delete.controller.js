import Branch from "../../models/branch.model.js";

const deleteBranch = async(req,res) => {
  try{
    const {id} = req.params;
    const deletedBranch = await Branch.findByIdAndDelete(id);
    if(!deletedBranch){
      return res.status(404).json({
        success:false,
        message:"Branch not found"
      })
    }
    return res.status(200).json({
      success:true,
      message:"Branch deleted successfully",
      data:deletedBranch
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

export default deleteBranch;