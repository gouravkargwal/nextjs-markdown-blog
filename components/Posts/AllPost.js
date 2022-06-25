import React from "react";
import PostGrid from "./PostGrid";

const AllPost = (props) => {
  return (
    <section className="p-2">
      <h1 className="text-center text-5xl font-bold">AllPost</h1>
      <PostGrid posts={props.posts} />
    </section>
  );
};

export default AllPost;
