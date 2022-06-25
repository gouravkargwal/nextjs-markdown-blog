import React from "react";

import PostContent from "../../components/Posts/PostDetail/PostContent";
import { getPostContent, getPostsFiles } from "../../helpers/post-utils";

const SingleBlogPost = (props) => {
  return (
    <>
      <PostContent post={props.post} />
    </>
  );
};
export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const postData = getPostContent(slug);
  return { props: { post: postData }, revalidate: 600 };
}
export async function getStaticPaths(context) {
  const postFileName = getPostsFiles();
  const slugs = postFileName.map((fileName) => fileName.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({
      params: {
        slug: slug,
      },
    })),
    fallback: "blocking",
  };
}
export default SingleBlogPost;
