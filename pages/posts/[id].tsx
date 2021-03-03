import { useRouter } from "next/router";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { getPost, Post } from "../../lib/posts";

const PostPage: NextPage = () => {
  const router = useRouter();
  const [post, setPost] = useState<Post | null>();

  useEffect(() => {
    getPost(Number(router.query.id)).then((post) => setPost(post));
  }, [router.query.id]);

  if (post == null) return null;

  return (
    <div>
      <h1>
        {post.id}: {post.title}
      </h1>
      <div>{post.body}</div>
    </div>
  );
};

export default PostPage;
