import Student from '../../../models/details/student.model.js';
import express from 'express';
import bcrypt from 'bcryptjs';

const registerStudent = async (req, res) => {
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

    const existingStudent = await Student.findOne({
      $or: [
        { email: email },
        { phoneNo: phone }
      ]
    })

    if (existingStudent) {
      return res.status(409).json({
        message: "Student with this email or phone number already exists"
      })
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const generateEnrollmentNo = () => {
      return Math.floor(100000 + Math.random() * 900000);
    };

    const newStudent = await Student.create({
      email: email,
      phoneNo: phone,
      passWord: hashedPassword,
      enrollNo: generateEnrollmentNo()
    })

    return res.status(201).json({
      message: "Student registered successfully",
      studentId: newStudent._id,
      student_email: email,
      student_phone: phone,
      enrollmentNo: newStudent.enrollNo,
      student_password: hashedPassword
    })


  }
  catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message
    })
  }
}

export default registerStudent;