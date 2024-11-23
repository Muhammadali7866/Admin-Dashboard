"use client";
import { MdSearch } from "react-icons/md";
import styles from "./search.module.css";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

interface SearchProps {
  placeholder: string;
}

const Search: React.FC<SearchProps> = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleSearch = useDebouncedCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      // create new params
      const params = new URLSearchParams(searchParams?.toString());
      if (e.target.value) {
        e.target.value.length > 2 && params.set("q", e.target.value);
      } else {
        params.delete("q");
      }

      router.replace(`${pathname}?${params.toString()}`);
    },
    300
  );

  console.log({ pathname });
  console.log({ searchParams });

  return (
    <div className={styles.container}>
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
