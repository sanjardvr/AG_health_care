import Link from "next/link";
import style from "./style.module.scss";
import { LuSearch } from "react-icons/lu";
import { GoPerson } from "react-icons/go";
import { useRouter } from "next/router";

export default function MainHeader() {
  const router = useRouter();

  const handleClick = (e: any, path: string) => {
    e.preventDefault();
    router.push(path);
  };
  return (
    <nav className={style.header}>
      <Link href={"/"} className={style.logo}>
        Master9
      </Link>
      <div className={style.menus}>
        <div onClick={(e) => handleClick(e, "/")} className={style.menu}>
          Home
        </div>
        <div onClick={(e) => handleClick(e, "/resources")} className={style.menu}>
         Resources
        </div>
        <div onClick={(e) => handleClick(e, "/tests")} className={style.menu}>
          Tests
        </div>
        <div
          onClick={(e) => handleClick(e, "/contacts")}
          className={style.menu}
        >
          Contacts
        </div>
      </div>
      <div className={style.leftside}>
        <Link href={"/"} className={style.search}>
          <LuSearch className={style.search_icon} />
        </Link>
        <Link href={"/"}>
          <div className={style.account}>
            <GoPerson className={style.account_icon} />
          </div>
        </Link>
      </div>
    </nav>
  );
}
