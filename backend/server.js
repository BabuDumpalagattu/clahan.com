const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const ContactMessage = require('./models/ContactMessage');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// app.use(cors({
//     origin: '*',  // Only allow frontend origin  w
//     methods: "GET,POST,PUT,DELETE",

    
//     // allowedHeaders: "Content-Type, Authorization",
// }));
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// POST route to save form data
app.post('/api/contact', async (req, res) => {
    console.log("Incoming contact form:", req.body);
  try {
    const { name, email, phone, subject, message } = req.body;
    const newMessage = new ContactMessage({ name, email, phone, subject, message });
    await newMessage.save();
    res.status(200).json({ message: 'Message saved successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Server error, please try again later.' });
  }
});
//for messages
app.get('/api/messages', async (req, res) => {
  try {
    const messages = await ContactMessage.find().sort({ createdAt:  1}); // newest first
    res.json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ error: 'Server error while fetching messages' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
