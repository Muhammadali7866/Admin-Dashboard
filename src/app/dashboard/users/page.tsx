import Search from "@/app/ui/dashboard/search/page";
import styles from "../../ui/dashboard/users/users.module.css";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagiantion/page";
export default function Users() {
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
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/file.svg"
                  width={40}
                  height={40}
                  className={styles.userImage}
                  alt=""
                />
                John Doe
              </div>
            </td>
            <td>hello@gmail.com</td>
            <td>Oct 30 2023</td>
            <td>client</td>
            <td>passive</td>
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
