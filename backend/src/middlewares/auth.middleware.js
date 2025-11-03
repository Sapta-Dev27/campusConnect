import jwt from 'jsonwebtoken';
import 'dotenv/config';

const auth = async (req, res, next) => {
  try {
    const headers = req.headers["authorization"];
    if (!headers) {
      return res.status(401).json({
        success: false,
        message: "Authorization header missing"
      })
    }
    const token = headers.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token missing"
      })
    }
    const decodedToken = jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET);
    if (!decodedToken) {
      return res.status(401).json({
        success: false,
        message: "Invalid Token"
      })
    }
    req.user = decodedToken;
    next();
  }
  catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error"
    })
  }
}

export default auth;

