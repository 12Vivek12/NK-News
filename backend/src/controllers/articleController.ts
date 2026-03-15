import type { Request, Response } from 'express';
import prisma from '../config/prisma.js';

export const getArticles = async (req: Request, res: Response) => {
  try {
    const articles = await prisma.article.findMany({
      where: { status: 'PUBLISHED' },
      include: { author: { select: { name: true } }, category: true },
      orderBy: { createdAt: 'desc' },
    });
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching articles' });
  }
};

export const getArticleBySlug = async (req: Request, res: Response) => {
  const { slug } = req.params;
  try {
    const article = await prisma.article.findUnique({
      where: { slug: slug as string },
      include: { author: { select: { name: true } }, category: true, tags: true },
    });
    if (!article) return res.status(440).json({ message: 'Article not found' });
    res.json(article);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching article' });
  }
};

export const createArticle = async (req: Request, res: Response) => {
  const { title, content, categoryId, slug, subtitle } = req.body;
  const authorId = (req as any).user.id;

  try {
    const article = await prisma.article.create({
      data: {
        title,
        content,
        slug,
        subtitle,
        categoryId,
        authorId,
        status: 'DRAFT',
      },
    });
    res.status(201).json(article);
  } catch (error) {
    res.status(500).json({ message: 'Error creating article' });
  }
};
