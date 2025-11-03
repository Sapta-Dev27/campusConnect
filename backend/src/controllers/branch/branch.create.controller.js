import Branch from "../../models/branch.model.js";

const createBranch = async (req, res) => {
  try {
    const { branchid, branchname, hodname, hodemail } = req.body;

    const existingBranch = await Branch.findOne({
      $or: [
        { branchId: branchid },
        { branchName: branchname },
      ]
    })

    if (existingBranch) {
      return res.status(400).json({
        success: false,
        message: "Branch with the same ID or Name already exists"
      })
    }

    const newBranch = await Branch.create({
      branchId: branchid,
      branchName: branchname,
      branchHODName: hodname,
      branchHODEmail: hodemail
    })

    if (newBranch) {
      return res.status(201).json({
        success: true,
        message: "Branch created successfully",
        data : newBranch
      })
    }
  }
  catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error"
    })
  }
}

export default createBranch;