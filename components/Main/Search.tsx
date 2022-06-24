import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/router";
import SearchIcon from "./SearchIcon";
import Button from "./Button";

function Search() {
  const router = useRouter();

  const [keyword, setKeyword] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => setKeyword(event.target.value);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("https://www.google.co.kr/search?q=" + keyword);
  };

  return (
    <div className="p-[20px]">
      <form className="relative pt-[6px] m-auto mt-0 w-[584px]" onSubmit={handleSubmit}>
        <input
          type="text"
          value={keyword}
          onChange={handleChange}
          className="input pl-[50px] w-full input-bordered rounded-full"
        />
        <SearchIcon />
        <div className="h-[70px] mt-[18px] flex justify-center text-[15px]">
          <Button text="Google 검색" keyword={keyword} />
          <Button text="I'm Feeling Lucky" link="https://www.google.com/doodles" />
        </div>
      </form>
    </div>
  );
}

export default Search;
