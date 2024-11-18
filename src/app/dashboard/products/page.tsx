import Pagination from "@/app/ui/dashboard/pagiantion/page";
import styles from "../../ui/dashboard/products/products.module.css";
import Link from "next/link";
import Search from "@/app/ui/dashboard/search/page";
import Image from "next/image";
export default function Products() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Now for user" />
        <Link href="/dashboard/users/add" className={styles.addButton}>
          Add User
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Desciption</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src="/file.svg"
                  width={40}
                  height={40}
                  className={styles.productImage}
                  alt=""
                />
                Iphone
              </div>
            </td>
            <td>mfnmsndufjsdfjsfbjdsfndd</td>
            <td>$123</td>
            <td>Oct 23 2024</td>
            <td>34</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/">
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <Link href="/">
                  <button className={`${styles.button} ${styles.delete}`}>
                    Delete
                  </button>
                </Link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
}
