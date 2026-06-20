const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  
  // In production, this would send an email or save to database
  console.log('Contact form submission:', { name, email, subject, message: message.substring(0, 50) + '...' });
  
  res.status(200).json({ success: true, message: 'Message received' });
});

// Serve static files from client dist in production
app.use(express.static(path.join(__dirname, '../client/dist')));

// Fallback for SPA - must be last route
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
