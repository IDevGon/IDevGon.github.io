export type Toc = {
  title: string;
  hash: string;
  subToc?: Toc[];
};

export interface Article {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  hashTags: string[];
  toc: Toc[];
}
