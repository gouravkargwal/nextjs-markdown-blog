import React from "react";
import PostItem from "./PostItem";

const PostGrid = (props) => {
  const { posts } = props;
  console.log(posts);
  return (
    <ul className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5 bg-red">
      {posts.map((post) => {
        return <PostItem key={post.slug} post={post} />;
      })}
    </ul>
  );
};

export default PostGrid;
