import Notice from "../../models/notice.model.js";

const createNotice = async(req,res) => {
  try {
    const  {noticeid , noticetitle , noticedesc , noticetype} = req.body;
    const existingNotice = await Notice.findOne({
      noticeId:noticeid
    })
    if(existingNotice){
      return res.status(400).json({
        success:false,
        message:"Notice with this ID already exists"
      })
    }
    const newNotice = await Notice.create({
      success:true,
      noticeId:noticeid,
      noticeTitle:noticetitle,
      noticeDescription:noticedesc,
      noticeType:noticetype
    })

    return res.status(201).json({
      success:true,
      message:"Notice created successfully",
      data:newNotice
    })
    
    
  }
  catch(error){
    console.log(error);
    return res.status(500).json({
      success:false,
      message:"Internal Server Error",
      error:error.message
    })
  }
}
export default createNotice;