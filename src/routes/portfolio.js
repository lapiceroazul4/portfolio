import express from 'express';
import { getPortfolioData } from '../services/portfolioService.js';

export const router = express.Router();

router.get('/', (req, res) => {
  const portfolioData = getPortfolioData();
  res.render('home', { ...portfolioData });
});