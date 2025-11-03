import Branch from "../../models/branch.model.js";

const updateBranch = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedBranch = await Branch.findByIdAndUpdate(id, updateData, {
      new: true
    });

    if (!updateBranch) {
      return res.status(404).json({
        success: false,
        message: "Branch not found"
      })
    }
    return res.status(200).json({
      success: true,
      message: "Branch updated successfully",
      data: updatedBranch
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

export default updateBranch;