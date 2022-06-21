import Link from "next/link";
import Menu from "components/Header/Menu";
import Login from "components/Header/Login";

function Items() {
  return (
    <div className="flex px-1 items-center">
      <div className="text-center text-[14px] pr-[15px]">
        <Link href={"https://www.google.com/intl/ko/gmail/about/"}>
          <a className="pl-[15px]">Gmail</a>
        </Link>
        <Link href={"https://www.google.co.kr/imghp?hl=ko&ogbl"}>
          <a className="pl-[15px]">이미지</a>
        </Link>
      </div>
      <Menu />
      <Login />
    </div>
  );
}

export default Items;
