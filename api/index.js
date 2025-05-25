// Serverless function for Vercel deployment
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../dist/public')));

// Handle API routes here if needed
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// For any other request, send the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/public', 'index.html'));
});

// Export the Express app for Vercel
export default app;