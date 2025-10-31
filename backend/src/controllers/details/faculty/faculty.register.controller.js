import Faculty from '../../../models/details/faculty.model.js';
import express from 'express';
import bcrypt from 'bcryptjs';

const registerFaculty = async (req, res) => {
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

    const existingFaculty = await Faculty.findOne({
      $or: [
        { email: email },
        { phoneNo: phone }
      ]
    })

    if (existingFaculty) {
      return res.status(409).json({
        message: "Faculty with this email or phone number already exists"
      })
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const generateEmployeeId = () => {
      return Math.floor(100000 + Math.random() * 900000);
    };

    const newFaculty = await Faculty.create({
      email: email,
      phoneNo: phone,
      passWord: hashedPassword,
      employeeId: generateEmployeeId()
    })

    return res.status(201).json({
      message: "Faculty registered successfully",
      facultyId: newFaculty._id,
      faculty_email: email,
      faculty_phone: phone,
      employeeId: newFaculty.employeeId,
      faculty_password: hashedPassword
    })


  }
  catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message
    })
  }
}

export default registerFaculty;