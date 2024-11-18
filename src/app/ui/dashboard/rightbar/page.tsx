"use client";
import styles from "./rightbar.module.css";
import { MdPlayCircleFilled } from "react-icons/md";
import Image from "next/image";
const RightBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/file.svg" alt="" className={styles.bg} fill />{" "}
        </div>
        <div className={styles.texts}>
          <span className={styles.notifications}>Available Now</span>
          <h3 className={styles.title}>
            How to use the new version of the admin dashbaord
          </h3>
          <p className={styles.title}>
            TO use the admin dashbaord you have the deligated access to the new
            version of the build then you can easily access it
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image
            src="/file.svg"
            alt=""
            width={40}
            height={40}
            className={styles.userImage}
          />{" "}
        </div>
        <div className={styles.texts}>
          <span className={styles.notifications}>Available Now</span>
          <h3 className={styles.title}>
            How to use the new version of the admin dashbaord
          </h3>
          <p className={styles.title}>
            TO use the admin dashbaord you have the deligated access to the new
            version of the build then you can easily access it
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
