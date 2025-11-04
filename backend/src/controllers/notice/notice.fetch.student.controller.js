
import Notice from "../../models/notice.model.js";

const fetchAllStudentNotice = async (req, res) => {
  try {
    const notices = await Notice.find({
      noticeType: 'student'
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

export default fetchAllStudentNotice