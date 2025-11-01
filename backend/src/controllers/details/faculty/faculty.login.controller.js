import  Faculty from '../../../models/details/faculty.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv/config';

const facultyLoginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const checkFaculty = await Faculty.findOne({
      email: email
    })

    if (!checkFaculty) {
      return res.status(400).json({
        success: false,
        message: "Faculty not found"
      })
    }

    const isPasswordValid = await bcrypt.compare(password, checkFaculty.passWord);
    if (!isPasswordValid) {
      return res.status(400).json({
        success: false,
        message: "Invalid Password"
      })
    }
    const payLoad = jwt.sign({
      id: checkFaculty._id,
      firstname: checkFaculty.firstName,
      lastname: checkFaculty.lastName
    },
      process.env.JWT_ACCESS_TOKEN_SECRET, {
      expiresIn: '1d'
    }
    )

    return res.status(200).json({
      success: true,
      message: "Faculty logged in successfully",
      token: payLoad,
      
    })
  }
  catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error"
    })
  }
}

export default facultyLoginController;