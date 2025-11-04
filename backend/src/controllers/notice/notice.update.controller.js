import Notice from "../../models/notice.model.js";

const updateNotice = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedNotice = await Notice.findByIdAndUpdate(id, req.body);

    if (!updatedNotice) {
      return res.status(404).json({
        success: false,
        message: "Notice not found"
      })
    }

    return res.status(200).json({
      success: true,
      message: "Notice updated successfully",
      data: updatedNotice
    })

  }
  catch (error) {
    console.log("Error in updating notice: ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message
    })
  }
}

export default updateNotice;  