import Admin from '../../../models/details/admin.model.js';
import express from 'express';
import bcrypt from 'bcryptjs';

const registerAdmin = async (req, res) => {
  try {

    const { email, phone, password } = req.body;

    if (email === undefined) {
      return res.status(400).json({
        message: "Email is required"
      })
    }

    if (phone == undefined) {
      return res.status(400).json({
        message: "Phone number is required"
      })
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({
        message: "Invalid email format"
      });
    }

    if (!/^\d{10}$/.test(phone)) {
      return res.status(400).json({
        message: "Invalid phone number format"
      });
    }

    const existingAdmin = await Admin.findOne({
      $or: [
        { email: email },
        { phoneNo: phone }
      ]
    })

    if (existingAdmin) {
      return res.status(409).json({
        message: "Admin with this email or phone number already exists"
      })
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const generateEmployeeId = () => {
      return Math.floor(100000 + Math.random() * 900000);
    };

    const newAdmin = await Admin.create({
      email: email,
      phoneNo: phone,
      passWord: hashedPassword,
      employeeId: generateEmployeeId()
    })

    return res.status(201).json({
      message: "Admin registered successfully",
      adminId: newAdmin._id,
      admin_email: email,
      admin_phone: phone,
      employeeId: newAdmin.employeeId,
      admin_password: hashedPassword
    })


  }
  catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message
    })
  }
}

export default registerAdmin;