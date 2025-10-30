import express from 'express';
import 'dotenv/config';

import connectDb from  './db/db.js';

const PORT = process.env.PORT|| 5000;
const app = express();
app.use(express.json());

connectDb();


/*route to check server is working or not*/
app.get('/health' , (req,res) => {
  res.send("Server Health is OK  and running PERFECTLY");
})


/*server is getting started*/
app.listen(PORT , () => {
  console.log(`Server is running on port ${PORT}`);
})