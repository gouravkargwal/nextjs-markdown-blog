import React from "react";
import PostHeader from "./PostHeader";
import Head from "next/head";
import Image from "next/image";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const PostContent = (props) => {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  const customRenderers = {
    image: (image) => {
      console.log(image);
      return (
        <Image
          src={`/public/images/posts/${post.slug}/${image.src}`}
          alt={image.alt}
          width={600}
          height={300}
          layout="responsive"
        />
      );
    },
    paragraph: ({ paragraph }) => {
      const { node } = paragraph;
      if (node.children[0].type === "image") {
        const image = node.children[0];
        return (
          <Image
            src={`/images/posts/${post.slug}/${image.url}`}
            alt={image.alt}
            width={600}
            height={300}
            layout="responsive"
          />
        );
      }
      return <p>{paragraph.children}</p>;
    },
  };

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article className="m-4 shadow-lg">
        <PostHeader title={post.title} image={imagePath} />
        <ReactMarkdown components={customRenderers} className="p-4">
          {post.content}
        </ReactMarkdown>
      </article>
    </>
  );
};

export default PostContent;
