import React from "react";
import Head from "next/head";
import AllPost from "../../components/Posts/AllPost";
import { getAllPosts } from "../../helpers/post-utils";

const AllBlogsPage = (props) => {
  return (
    <>
      <Head>
        <title>All Post</title>
      </Head>
      <AllPost posts={props.posts} />
    </>
  );
};
export async function getStaticProps(context) {
  const AllPosts = getAllPosts();
  return { props: { posts: AllPosts } };
}
export default AllBlogsPage;
