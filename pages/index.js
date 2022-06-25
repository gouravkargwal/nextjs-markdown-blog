import FeaturedPosts from "../components/Home/FeaturedPosts";
import Hero from "../components/Home/Hero";
import { getFeaturedPosts } from ".././helpers/post-utils";
import Head from "next/head";

function HomePage(props) {
  return (
    <>
      <Head>
        <title>Qurani Wazifa</title>
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
}
export async function getStaticProps(context) {
  const featuredPosts = getFeaturedPosts();
  return { props: { posts: featuredPosts } };
}
export default HomePage;
