import styles from "@/app/ui/dashboard/users/add/addUsers.module.css";
const addUser = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="username" name="username" required />
        <select name="isActive" id="isActive">
          <option value="true" selected>
            Is Admin?
          </option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <select name="isAdmin" id="isAdmin">
          <option value="false" selected>
            Is Admin?
          </option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <input type="number" placeholder="email" name="email" />
        <input type="number" placeholder="password" name="password" />
        <input type="text" placeholder="phone" name="phone" />
        <input type="text" placeholder="size" name="size" />
        <textarea
          rows={8}
          name="address"
          id="address"
          placeholder="Address"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default addUser;
