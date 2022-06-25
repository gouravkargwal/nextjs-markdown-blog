import React from "react";
import PostGrid from "../Posts/PostGrid";

const FeaturedPosts = (props) => {
  return (
    <div>
      <h1 className="text-4xl text-center mt-3">Featured Posts</h1>
      <PostGrid posts={props.posts} />
    </div>
  );
};

export default FeaturedPosts;
