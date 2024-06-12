// const express = require('express');
// const mongoose = require('mongoose');
// const postRoutes = require('./routes/postRoutes');
// const authRoutes = require('./routes/auth');
// const dotenv = require('dotenv');
// const cors = require('cors');
// // Load environment variables from .env file
// dotenv.config();

// const app = express();

// // Middleware to parse JSON
// app.use(express.json());


// // Connect to MongoDB
// mongoose.connect(process.env.MONGODB_URI, {
//   // useNewUrlParser: true,
//   // useUnifiedTopology: true
// }).then(() => {
//   console.log('Connected to MongoDB');
// }).catch((error) => {
//   console.error('Connection error', error);
// });

// // Use CORS middleware
// app.use(cors());

// // Use the post routes
// app.use('/api', postRoutes);
// app.use('/api', authRoutes);

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
const express = require('express');
const mongoose = require('mongoose');
const postRoutes = require('./routes/postRoutes');
const authRoutes = require('./routes/auth');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware to parse JSON
app.use(express.json());


// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Connection error', error);
});

// Use CORS middleware
app.use(cors());

// Use the post routes
app.use('/api', postRoutes);
app.use('/api', authRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});