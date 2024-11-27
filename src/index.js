import express from 'express';
import expressLayouts from 'express-ejs-layouts';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { router as portfolioRoutes } from './routes/portfolio.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Static files
app.use(express.static(join(__dirname, '../public')));

// Template engine
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views'));
app.set('layout', 'layouts/main');

// Routes
app.use('/', portfolioRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});