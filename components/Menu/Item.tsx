import Image from "next/image";
import Link from "next/link";

interface IItem {
  src: string;
  title: string;
  link: string;
}

function Item({ src, title, link }: IItem) {
  return (
    <button className="h-[84px] w-[84px] p-[6px] hover:bg-[#e8f0fe] rounded-lg">
      <Link href={link}>
        <a>
          <Image src={src} width={48} height={48} alt={title + "-link"} />
        </a>
      </Link>
      <p>{title}</p>
    </button>
  );
}

export default Item;
