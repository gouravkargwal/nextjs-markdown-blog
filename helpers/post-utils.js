import path from "path";
import matter from "gray-matter";
import fs from "fs";

const postsPath = path.join(process.cwd(), "content");

export function getPostsFiles() {
  return fs.readdirSync(postsPath);
}

export function getPostContent(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, "");
  const filePath = path.join(postsPath, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const postData = {
    slug: postSlug,
    ...data,
    content,
  };
  return postData;
}

export function getAllPosts() {
  const postsFiles = getPostsFiles();
  const allPosts = postsFiles.map((postFile) => {
    return getPostContent(postFile);
  });
  const sortedPosts = allPosts.sort((postA, postB) => {
    postA.data > postB.data ? -1 : 1;
  });
  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => {
    return post.isFeatured;
  });
  return featuredPosts;
}
