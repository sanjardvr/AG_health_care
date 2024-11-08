import { useRouter } from "next/router";
import style from "./style.module.scss";
import React from "react";

type Props = {
  text: string;
  src: string;
};

export default function Button({ text, src }: Props) {
  const router = useRouter();

  const handleClick = (e: any, path: string) => {
    e.preventDefault(), router.push(path);
  };

  return (
    <div onClick={(e) => handleClick(e, src)} className={style.button}>
      {text}
    </div>
  );
}
