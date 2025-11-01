import Admin from '../../../models/details/admin.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv/config';

const adminLoginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const checkAdmin = await Admin.findOne({
      email: email
    })

    if (!checkAdmin) {
      return res.status(400).json({
        success: false,
        message: "Admin not found"
      })
    }

    const isPasswordValid = await bcrypt.compare(password, checkAdmin.passWord);
    if (!isPasswordValid) {
      return res.status(400).json({
        success: false,
        message: "Invalid Password"
      })
    }
    const payLoad = jwt.sign({
      id: checkAdmin._id,
      firstname: checkAdmin.firstName,
      lastname: checkAdmin.lastName
    },
      process.env.JWT_ACCESS_TOKEN_SECRET, {
      expiresIn: '1d'
    }
    )

    return res.status(200).json({
      success: true,
      message: "Admin logged in successfully",
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

export default adminLoginController;