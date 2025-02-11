const express = require('express');
const dotenv = require('dotenv');
const connectDB = require("./config/dbConnect");

const userRoutes = require("./routes/userRoute");
const contactRoutes = require("./routes/contactRoute");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/users', userRoutes);
app.use('/contacts', contactRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
