import Image from "next/image";

function Logo() {
  return (
    <div className="flex flex-col align-center min-h-[92px] h-[235px] justify-end">
      <Image src="/images/googlelogo_color_272x92dp.png" alt="main image" width={272} height={92} objectFit="contain" />
    </div>
  );
}

export default Logo;
