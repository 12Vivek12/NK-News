export type Role = 'ADMIN' | 'EDITOR' | 'REPORTER' | 'READER';

export type ArticleStatus = 'DRAFT' | 'PENDING' | 'APPROVED' | 'PUBLISHED' | 'REJECTED';

export interface User {
  id: string;
  email: string;
  name: string;
  role: Role;
  createdAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
}

export interface Article {
  id: string;
  title: string;
  subtitle?: string;
  slug: string;
  content: string;
  featuredImage?: string;
  status: ArticleStatus;
  publishDate?: string;
  authorId: string;
  author?: User;
  categoryId: string;
  category?: Category;
  tags?: Tag[];
  seoTitle?: string;
  seoDescription?: string;
  createdAt: string;
  updatedAt: string;
}
