const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

// Connect to the database
connectDB();

const app = express();
app.use(cors());

// Middleware
app.use(express.json());





// Define routes
app.use( require('./routes/auth'));
app.use( require('./routes/menuitems'));
app.use( require('./routes/cart'));




const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});