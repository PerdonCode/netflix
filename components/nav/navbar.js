import styles from "./navbar.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";

const NavBar = (props) => {
  const { username } = props;
  // default = falses - only show onclick
  const [showDropdown, setShowDropdown] = useState(false);

  const router = useRouter();

  const handleOnClickHome = (e) => {
    // not refreshing the page
    e.preventDefault();
    router.push("/");
  };

  const handleOnClickMyList = (e) => {
    e.preventDefault();
    router.push("/browse/my-list");
  };

  const handleShowDropdown = (e) =>{
    e.preventDefault();
    setShowDropdown(!showDropdown);
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <a className={styles.logoLink}>
          <div className={styles.logoWrapper}>Netflix</div>
        </a>

        <ul className={styles.navItems}>
          <li className={styles.navItem} onClick={handleOnClickHome}>
            Home
          </li>
          <li className={styles.navItem2} onClick={handleOnClickMyList}>
            My List
          </li>
        </ul>

            <nav className={styles.navContainer}>
          <div>
            <button className={styles.usernameBtn} onClick={handleShowDropdown}>
              <p className={styles.username}>{username}</p>
            </button>  
            {/* if showDropdown is true then the next code */}
             {showDropdown && (
                <div className={styles.navDropdown}>
                <div>
                    <Link href="/login" className={styles.linkName}>
                    sign out
                    </Link>
                    <div className={styles.lineWrapper}></div>
                </div>
                </div>
            )}
          </div>
        </nav>

      </div>
    </div>
  );
};
export default NavBar;