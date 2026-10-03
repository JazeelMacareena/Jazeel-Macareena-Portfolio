import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Simple Express API used by the portfolio contact form.
app.post('/api/contact', (req, res) => {
  const { firstName, lastName, phone, email, message } = req.body;

  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ success: false, message: 'Please complete all required fields.' });
  }

  // Assignment-safe demo endpoint: the server validates and acknowledges the submission.
  return res.status(201).json({
    success: true,
    message: `Thank you, ${firstName}. Your message has been received.`,
    submittedAt: new Date().toISOString()
  });
});

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'Jazeel Portfolio API' });
});

// In production Express serves the Vite build, making this a single deployable app.
const distPath = path.join(__dirname, '..', 'dist');
app.use(express.static(distPath));
app.use((req, res) => {
  if (req.method === 'GET') return res.sendFile(path.join(distPath, 'index.html'));
  return res.status(404).json({ success: false, message: 'Route not found.' });
});

app.listen(PORT, () => {
  console.log(`Jazeel Portfolio server running on http://localhost:${PORT}`);
});
