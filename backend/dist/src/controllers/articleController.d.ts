import type { Request, Response } from 'express';
export declare const getArticles: (req: Request, res: Response) => Promise<void>;
export declare const getArticleBySlug: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const createArticle: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=articleController.d.ts.map