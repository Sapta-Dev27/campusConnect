
import Branch from "../../models/branch.model.js";

const getBranchByID = async (req, res) => {
  try {
    const { id } = req.params;
    const branch = await Branch.find({
      _id: id
    })
    if (!branch) {
      return res.status(404).json({
        success: false,
        message: "Branch not found"
      })
    }
    return res.status(200).json({
      success: true,
      message: "Branch fetched successfully",
      data: branch
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

export default getBranchByID;