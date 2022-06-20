import Link from "next/link";
import Menu from "components/Header/Menu";
import Login from "components/Header/Login";

function Items() {
  return (
    <div className="flex pl-8">
      <Link href={"https://www.google.com/intl/ko/gmail/about/"}>
        <a>Gmail</a>
      </Link>
      <Link href={"https://www.google.co.kr/imghp?hl=ko&ogbl"}>
        <a>이미지</a>
      </Link>
      <Menu />
      <Login />
    </div>
  );
}

export default Items;
