import { Router } from 'express';
import { getArticles, getArticleBySlug, createArticle } from '../controllers/articleController.js';
import { authenticate, authorize } from '../middleware/auth.js';

const router = Router();

router.get('/', getArticles);
router.get('/:slug', getArticleBySlug);

router.post('/', authenticate, authorize(['ADMIN', 'EDITOR', 'REPORTER']), createArticle);

export default router;
