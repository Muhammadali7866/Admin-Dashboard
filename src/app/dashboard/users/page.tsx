import Search from "@/app/ui/dashboard/search/page";
import styles from "../../ui/dashboard/users/users.module.css";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagiantion/page";
import { connnectToDb } from "@/app/lib/utils";
import { fetchUsers } from "@/app/lib/data";

interface User {
  id: string; // or number, based on your data
  username: string;
  email: string;
  createdAt: Date | string; // Use `Date` if you convert strings to Date elsewhere
  isAdmin: boolean;
  isActive: boolean;
}
export default async function Users() {
  let users: User[] = await fetchUsers();

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
          {users.map((user) => {
            return (
              // Ensure the JSX is returned here
              <tr key={user.id}>
                <td>
                  <div className={styles.user}>
                    <Image
                      src="/file.svg"
                      width={40}
                      height={40}
                      className={styles.userImage}
                      alt=""
                    />
                    {user.username}
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.createdAt.toString().slice(4, 16)}</td>
                <td>{user.isAdmin ? "admin" : "clients"}</td>
                <td>{user.isActive ? "active" : "passive"}</td>
                <td>
                  <div className={styles.buttons}>
                    <Link href="/dashboard/users/test">
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
            );
          })}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
}
