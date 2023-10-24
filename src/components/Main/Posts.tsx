import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    id: 1,
    url: "/main/posts/01.webp",
    date: "September 12",
    read: "Read in 6 minutes",
    title: "Cactus & Succulent Care Tips",
    description:
      "Cacti are succulents are easy care plants for any home or patio.",
    link: "/blogs",
  },
  {
    id: 2,
    url: "/main/posts/02.webp",
    date: "September 13",
    read: "Read in 2 minutes",
    title: "Top 10 Succulents for Your Home",
    description: "Best in hanging baskets. Prefers medium to high light.",
    link: "/blogs",
  },
  {
    id: 3,
    url: "/main/posts/03.webp",
    date: "September 15",
    read: "Read in 3 minutes",
    title: "Cacti & Succulent Care Tips",
    description:
      "Cacti and succulents thrive in containers and because most are..",
    link: "/blogs",
  },
  {
    id: 4,
    url: "/main/posts/04.webp",
    date: "September 15",
    read: "Read in 2 minutes",
    title: "Best Houseplants Room by Room",
    description: "The benefits of houseplants are endless. In addition to..",
    link: "/blogs",
  },
];

export const Posts = (): JSX.Element => {
  const postsList = posts.map((post) => {
    return (
      <div className="post-item" key={post.id}>
        <Image alt="" src={post.url} width={268} height={195} />
        <div className="post-data">
          <div className="post-date">
            {post.date} | {post.read}
          </div>
          <h4>{post.title}</h4>
          <p>{post.description}</p>
          <Link href={post.link}>
            Read More{" "}
            <Image
              alt="arrow"
              src="/icons/arrow-right3.svg"
              width={12}
              height={12}
            />
          </Link>
        </div>
      </div>
    );
  });

  return (
    <div className="posts">
      <h2>Our Blog Posts</h2>
      <p>
        We are an online plant shop offering a wide range of cheap and trendy
        plants.
      </p>
      <div className="posts-list">{postsList}</div>
    </div>
  );
};
