export declare const Role: {
    readonly ADMIN: "ADMIN";
    readonly EDITOR: "EDITOR";
    readonly REPORTER: "REPORTER";
    readonly READER: "READER";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const ArticleStatus: {
    readonly DRAFT: "DRAFT";
    readonly PENDING: "PENDING";
    readonly APPROVED: "APPROVED";
    readonly PUBLISHED: "PUBLISHED";
    readonly REJECTED: "REJECTED";
};
export type ArticleStatus = (typeof ArticleStatus)[keyof typeof ArticleStatus];
//# sourceMappingURL=enums.d.ts.map