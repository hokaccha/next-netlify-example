import posts from "./posts.json";

export type Post = {
  id: number;
  title: string;
  body: string;
};

export async function getPost(id: number): Promise<Post | null> {
  return (posts as Post[]).find((p) => p.id === id) || null;
}

export async function getPosts(): Promise<Post[]> {
  return posts as Post[];
}
