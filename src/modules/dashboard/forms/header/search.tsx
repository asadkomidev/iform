"use client";

import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Input } from "@/components/ui/input";

type Props = {
  page: number;
};

const Search = ({ page }: Props) => {
  const router = useRouter();
  const [value, setValue] = useState("");
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" || event.key === "Escape") {
      router.push(`/forms?page=${page}&search=${value}`);
    }
  };

  return (
    <div className="relative">
      <label htmlFor="Search" className="sr-only">
        Search
      </label>

      <Input
        onChange={onChange}
        onKeyDown={onKeyDown}
        type="text"
        id="Search"
        placeholder="Search for..."
        className="w-full shadow-none h-9"
      />

      <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
        <button type="button" className="text-gray-600 hover:text-gray-700">
          <span className="sr-only">Search</span>

          <SearchIcon className="size-4" />
        </button>
      </span>
    </div>
  );
};

export default Search;
