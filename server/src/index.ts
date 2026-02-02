import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Mock Verification Endpoint
app.post('/api/verify', (req, res) => {
  const { serial } = req.body;
  // Mock valid serials
  const validSerials = ['AZC-123', 'AZC-456', 'JDM-789'];
  
  if (validSerials.includes(serial)) {
    res.json({ valid: true, message: 'Verified Genuine' });
  } else {
    res.json({ valid: false, message: 'Invalid Serial Number' });
  }
});

app.get('/', (req, res) => {
  res.send('AZC Server Running');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
