import Link from "next/link";

export interface IBreadCrumbsProps {
  links: Array<{ link: string; title: string }>;
}

export const BreadCrumbs: React.FC<IBreadCrumbsProps> = ({
  links,
}): JSX.Element => {
  const linksList = links.map((el) => {
    return (
      <>
        <span>/</span>{" "}
        <Link
          key={el.title}
          href={el.link}
          style={{
            fontWeight: 400,
          }}
        >
          {el.title}
        </Link>
      </>
    );
  });

  return (
    <div className="bread-crumbs">
      <Link href="/">Home</Link> {linksList}
    </div>
  );
};
