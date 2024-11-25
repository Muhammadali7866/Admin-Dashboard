import { updateUser } from "@/app/lib/action";
import { fetchUser } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

interface User {
  id: string; // or number, based on your data
  username: string;
  email: string;
  createdAt: Date | string; // Use `Date` if you convert strings to Date elsewhere
  isAdmin: boolean;
  isActive: boolean;
  password: string;
  address: string;
}

export default async function singleUserPage({
  params,
}: {
  params: { id: string };
}) {
  const id = await params?.id;

  let user: User = await fetchUser(id);
  return [
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image src="/file.svg" alt="" fill />
        </div>
        John Doe
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input type="hidden" value={user.id} name="id" />
          <label>UserName</label>
          <input type="text" name="username" placeholder={user.username} />
          <label>Email</label>
          <input type="email" name="email" placeholder={user.email} />
          <label>Password</label>
          <input type="password" name="password" placeholder={user.password} />
          <label>Address</label>
          <input type="text" name="address" placeholder={user.address} />
          <label>Is Admin</label>
          <select name="isAdmin" id="isAdmin">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <label>Is Active</label>
          <select name="isActive" id="isActive">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <button className={styles.button} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>,
  ];
}
