import Link from "next/link";

function Links() {
  return (
    <div className="flex items-center ml-[15px] text-[16px]">
      <Link href={"https://about.google/?fg=1&utm_source=google-KR&utm_medium=referral&utm_campaign=hp-header"}>
        <a className={["mx-[5px]", "inline-block", "p-[5px]", "no-underline", "text-[rgb(32 33 36)]"].join(" ")}>
          Google 정보
        </a>
      </Link>
      <Link
        href={"https://store.google.com/KR?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=ko-KR"}
      >
        <a className="mx-[5px] inline-block text-[rgb(32 33 36)]">스토어</a>
      </Link>
    </div>
  );
}

export default Links;
