import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";
export default function singleProductPage() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image src="/file.svg" alt="" fill />
        </div>
        John Doe
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Title</label>
          <input type="text" name="username" placeholder="John Doe" />
          <label>Price</label>
          <input type="number" name="price" placeholder="price" />
          <label>Stock</label>
          <input type="number" name="stock" placeholder="total stocks" />
          <label>Size</label>
          <input type="text" name="size" placeholder="size" />
          <label>color</label>
          <input type="text" name="color" placeholder="red" />
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>x
            <option value="computers">computers</option>
          </select>
          <textarea name="desc" id="desc" cols={30} rows={10}></textarea>
        </form>
        <button className={styles.button}>Submit</button>
      </div>
    </div>
  );
}
