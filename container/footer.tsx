import Link from "next/link";

function Footer() {
  return (
    <div className="bg-[#f2f2f2] text-[#64686d] divide-y divide-solid px-[15px]">
      <div className="p-[15px]">대한민국</div>
      <div className="flex justify-evenly xl:justify-between py-[15px]">
        <div>
          <Link
            href={
              "https://www.google.co.kr/intl/ko_kr/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1"
            }
          >
            <a className="px-[15px]">광고</a>
          </Link>
          <Link
            href={
              "https://www.google.co.kr/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1"
            }
          >
            <a className="px-[15px]">비즈니스</a>
          </Link>
          <Link href={"https://google.com/search/howsearchworks/?fg=1"}>
            <a className="px-[15px]">검색의 원리</a>
          </Link>
        </div>
        <div>
          <Link href={"https://policies.google.com/privacy?hl=ko&fg=1"}>
            <a className="px-[15px]">개인정보처리방침</a>
          </Link>
          <Link href={"https://policies.google.com/terms?hl=ko&fg=1"}>
            <a className="px-[15px]">약관</a>
          </Link>
          <div className="px-[15px] inline-block">설정</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
