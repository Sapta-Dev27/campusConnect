
import Notice from "../../models/notice.model.js";

const fetchAlFacultyNotice = async (req, res) => {
  try {
    const notices = await Notice.find({
      noticeType: 'faculty'
    }).sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      data: notices
    })
  }
  catch (error) {
    console.log("Error in fetching all notices: ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message
    })
  }
}

export default fetchAlFacultyNotice