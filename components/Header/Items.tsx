import Link from "next/link";
import Menu from "components/Header/Menu";
import Login from "components/Header/Login";

function Items() {
  return (
    <div className="flex px-1 items-center">
      <div className="text-center text-[14px] pr-[15px]">
        <Link href={"https://www.google.com/intl/ko/gmail/about/"}>
          <a className="ml-[15px] hover:border-b border-black">Gmail</a>
        </Link>
        <Link href={"https://www.google.co.kr/imghp?hl=ko&ogbl"}>
          <a className="ml-[15px] hover:border-b border-black">이미지</a>
        </Link>
      </div>
      <Menu />
      <Login />
    </div>
  );
}

export default Items;
