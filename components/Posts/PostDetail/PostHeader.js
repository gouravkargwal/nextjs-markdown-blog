import React from "react";
import Image from "next/image";

const PostHeader = (props) => {
  const { title, image } = props;
  return (
    <header className="text-center">
      <h1 className="text-4xl mb-5">{title}</h1>
      <Image src={image} alt={title} width={300} height={150} />
    </header>
  );
};

export default PostHeader;
