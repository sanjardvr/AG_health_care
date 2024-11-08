import Link from "next/link";
import style from "./style.module.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import Router, { useRouter } from "next/router";

export default function MobileHeader() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const handleClick = (e: any, path: string) => {
    setOpen(false);
    e.preventDefault();
    router.push(path);
  };

  return (
    <nav className={style.header}>
      <div
        className={`${style.headerContainer} ${
          open ? style.headerActive : style.headerContainer
        }`}
      >
        <div className={style.headerTop}>
          <div onClick={(e) => handleClick(e, "/")} className={style.logo}>
            Master9
          </div>
          {open ? (
            <div onClick={() => setOpen(false)}>
              <AiOutlineClose className={style.icon} />
            </div>
          ) : (
            <div onClick={() => setOpen(true)}>
              <RxHamburgerMenu className={style.icon} />
            </div>
          )}
        </div>

        <div className={`${open ? style.navbarActive : style.navbar}`}>
          <div className={style.profile}>
            <GoPerson className={style.accountIcon} />
          </div>
          <div className={style.nav}>
            <div onClick={(e) => handleClick(e, "/")} className={style.menu}>
              Home
            </div>
            <div
              onClick={(e) => handleClick(e, "/resources")}
              className={style.menu}
            >
              Resources
            </div>
            <div
              onClick={(e) => handleClick(e, "/tests")}
              className={style.menu}
            >
              Tests
            </div>
            <div
              onClick={(e) => handleClick(e, "/contacts")}
              className={style.menu}
            >
              Contacts
            </div>
          </div>

          {/* Bottom of mobile menu */}
          <div className={style.bottom}>
            <hr />
            <div className={style.top}>
              <div onClick={(e) => handleClick(e, "/")} className={style.item}>
                Privacy Policy
              </div>
              <div onClick={(e) => handleClick(e, "/")} className={style.item}>
                Terms of Use
              </div>
              <div onClick={(e) => handleClick(e, "/")} className={style.item}>
                Cookie Policy
              </div>
            </div>

            <div className={style.down}>Master9 Team 2024</div>
          </div>
        </div>
      </div>
    </nav>
  );
}
