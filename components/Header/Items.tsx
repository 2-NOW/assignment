import { useState } from "react";
import Link from "next/link";
import Menu from "components/Header/Menu";
import Login from "components/Header/Login";
import MenuModal from "components/MenuModal";

function Items() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => setIsOpen(!isOpen);

  return (
    <div className="relative flex items-center px-1">
      <div className="text-center text-[14px] pr-[15px]">
        <Link href={"https://www.google.com/intl/ko/gmail/about/"}>
          <a className="ml-[15px] hover:border-b border-black">Gmail</a>
        </Link>
        <Link href={"https://www.google.co.kr/imghp?hl=ko&ogbl"}>
          <a className="ml-[15px] hover:border-b border-black">이미지</a>
        </Link>
      </div>
      <Menu handleMenuClick={handleMenuClick} />
      {isOpen && <MenuModal />}
      <Login />
    </div>
  );
}

export default Items;
