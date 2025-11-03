import Branch from "../../models/branch.model.js";


const getAllBranches = async (req, res) => {
  try {
    const branches = await Branch.find();

    if (!branches || branches.lenght === 0) {
      return res.status(404).json({
        success: false,
        message: "No branches found"
      })
    }
    return res.status(200).json({
      success: true,
      message: "Branches fetched successfully",
      data: branches
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

export default getAllBranches;