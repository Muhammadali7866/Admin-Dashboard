"use client";
import styles from "./pagination.module.css";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const Pagination = ({ count }: { count: number }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const page = parseInt(searchParams.get("page") || "1", 10);
  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 2;
  const totalPages = Math.ceil(count / ITEM_PER_PAGE);
  const hasPrev = page > 1;
  const hasNext = page < totalPages;

  const handleChangePage = (type: "prev" | "next") => {
    type === "prev"
      ? params.set("page", (page - 1).toString())
      : params.set("page", (page + 1).toString());
    replace(`${pathname}?${params}`);
  };
  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={() => handleChangePage("prev")}
      >
        Preview
      </button>
      <button
        className={styles.button}
        disabled={!hasNext}
        onClick={() => handleChangePage("next")}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
