import { MouseEvent } from "react";
import { useRouter } from "next/router";

interface IButton {
  text: string;
  link?: string;
  keyword?: string;
}

function Button({ text, link, keyword }: IButton) {
  const router = useRouter();

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (link) router.push(link);
    else if (keyword) router.push("https://www.google.co.kr/search?q=" + keyword);
  };

  return (
    <button
      className="bg-[#f8f9fa] px-4 h-9 rounded my-[11px] mx-[6px] hover:drop-shadow-[0_1px_1px_rgb(0,0,0,0.2)]"
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

export default Button;
