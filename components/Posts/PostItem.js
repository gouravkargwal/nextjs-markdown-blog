import Link from "next/link";
import Image from "next/image";
import React from "react";

const PostItem = (props) => {
  const { title, image, desc, date, slug } = props.post;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;
  return (
    <li className="shadow-2xl hover:opacity-90 duration-300 overflow-hidden">
      <Link href={linkPath}>
        <a>
          <div>
            <Image
              src={imagePath}
              alt={title}
              width={300}
              height={200}
              layout="responsive"
            />
          </div>
          <div className="p-2">
            <h3 className="font-bold text-xl">{title}</h3>
            <time>{formattedDate}</time>
            <p>{desc}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PostItem;
