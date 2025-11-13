export interface BlogPost {
  id: number;
  category: string;
  date: string;
  image: string;
  title: string;
  description: string;
  content?: string; // Optional content for full blog post
}

export interface BlogList extends Array<BlogPost> {}
