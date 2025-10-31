import express from 'express';
import 'dotenv/config';

import connectDb from  './db/db.js';
import adminRoutes from './routes/details/admin.route.js';
import facultyRoutes from './routes/details/faculty.route.js';
import studentRoutes from './routes/details/student.route.js';

const PORT = process.env.PORT|| 5000;
const app = express();
app.use(express.json());

connectDb();


/*route to check server is working or not*/
app.get('/health' , (req,res) => {
  res.send("Server Health is OK  and running PERFECTLY");
})


app.use('/api/admin', adminRoutes);
app.use('/api/faculty', facultyRoutes);
app.use('/api/student', studentRoutes);

/*server is getting started*/
app.listen(PORT , () => {
  console.log(`Server is running on port ${PORT}`);
})