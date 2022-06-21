import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/router";

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
      <form className="pt-[6px] m-auto mt-0 w-[584px]" onSubmit={handleSubmit}>
        <input
          type="text"
          value={keyword}
          onChange={handleChange}
          className="input w-full input-bordered rounded-full"
        />
      </form>
    </div>
  );
}

export default Search;
