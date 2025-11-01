import Student from '../../../models/details/student.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv/config';

const studentLoginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const checkStudent = await Student.findOne({
      email: email
    })

    if (!checkStudent) {
      return res.status(400).json({
        success: false,
        message: "Student not found"
      })
    }

    const isPasswordValid = await bcrypt.compare(password, checkStudent.passWord);
    if (!isPasswordValid) {
      return res.status(400).json({
        success: false,
        message: "Invalid Password"
      })
    }
    const payLoad = jwt.sign({
      id: checkStudent._id,
      firstname: checkStudent.firstName,
      lastname: checkStudent.lastName
    },
      process.env.JWT_ACCESS_TOKEN_SECRET, {
      expiresIn: '1d'
    }
    )

    return res.status(200).json({
      success: true,
      message: "Student logged in successfully",
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

export default studentLoginController;