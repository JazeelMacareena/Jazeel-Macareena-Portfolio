import express from 'express';
import serverless from 'serverless-http';

const api = express();
const router = express.Router();

api.use(express.json());
api.use(express.urlencoded({ extended: true }));

router.post('/contact', (req, res) => {
  const { firstName, lastName, email, message } = req.body || {};

  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Please complete all required fields.'
    });
  }

  return res.status(201).json({
    success: true,
    message: `Thank you, ${firstName}. Your message has been received.`,
    submittedAt: new Date().toISOString()
  });
});

router.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'Jazeel Portfolio API' });
});

api.use('/', router);

export const handler = serverless(api);
