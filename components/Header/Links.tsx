import Link from "next/link";

function Links() {
  return (
    <div className="flex items-center ml-[15px] text-[15px]">
      <Link href={"https://about.google/?fg=1&utm_source=google-KR&utm_medium=referral&utm_campaign=hp-header"}>
        <a className="mx-[10px] no-underline text-[rgb(32 33 36] hover:border-b border-black">Google 정보</a>
      </Link>
      <Link
        href={"https://store.google.com/KR?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=ko-KR"}
      >
        <a className="mx-[10px] text-[rgb(32 33 36)] hover:border-b border-black">스토어</a>
      </Link>
    </div>
  );
}

export default Links;
