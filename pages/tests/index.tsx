"use client";
import { useRouter } from "next/router";
import style from "./style.module.scss";
import Line from "../../components/line/index";
import Button from "../../components/button/index";

export default function Tests() {
  // Sample data showing alternative of mapping with real api
  const data = [
    {
      src: "/images/banner.jpg",
      tests: [
        {
          num: "1",
          link: "/1",
        },
        {
          num: "2",
          link: "/2",
        },
        {
          num: "3",
          link: "/3",
        },
        {
          num: "4",
          link: "/4",
        },
      ],
    },
    {
      src: "/images/banner.jpg",
      tests: [
        {
          num: "1",
          link: "/1",
        },
        {
          num: "2",
          link: "/2",
        },
        {
          num: "3",
          link: "/3",
        },
        {
          num: "4",
          link: "/4",
        },
      ],
    },
    {
      src: "/images/banner.jpg",
      tests: [
        {
          num: "1",
          link: "/1",
        },
        {
          num: "2",
          link: "/2",
        },
        {
          num: "3",
          link: "/3",
        },
        {
          num: "4",
          link: "/4",
        },
      ],
    },
    {
      src: "/images/banner.jpg",
      tests: [
        {
          num: "1",
          link: "/1",
        },
        {
          num: "2",
          link: "/2",
        },
        {
          num: "3",
          link: "/3",
        },
        {
          num: "4",
          link: "/4",
        },
      ],
    },
  ];

  const news = [
    {
      src: "/images/newsBanner.jpg",
      title: "How to learn words effectively ?",
      link: "/some_specific_new",
    },
  ];
  const router = useRouter();
  const innerHandleClick = (e: any, path: string) => {
    e.preventDefault(), router.push("/tests" + path);
  };
  const outerHandleClick = (e: any, path: string) => {
    e.preventDefault(), router.push(path);
  };

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.greeting}>
          <div className={style.media}>
            <img src="./images/tests_page.png" alt="image" />
          </div>
          <div className={style.text}>
            Your Trusted English Tests, Now in a Digital Experience
          </div>
        </div>
        <div className={style.cards}>
          {data?.map((item: any, i: number) => (
            <div className={style.card} key={i}>
              <div className={style.banner}>
                <img src={item.src} alt="banner" />
              </div>
              <div className={style.numerations}>
                {item.tests.map((child: any, id: number) => (
                  <div
                    onClick={(e) => innerHandleClick(e, child.link)}
                    className={style.num}
                    key={id}
                  >
                    {child.num}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <Button src={"/tests"} text={"Load More"} />
        <Line text={"News"} />
        <div className={style.news}>
          {news.map((data: any, id: number) => (
            <div className={style.card} key={id} onClick={(e) => outerHandleClick(e , data.link)}>
              <div className={style.newsBanner}>
                <img src={data.src} alt="newsBanner" />
              </div>
              <div className={style.title}>{data.title}</div>
            </div>
          ))}
        </div>
        <Button src={"/news"} text={"Read More"} />
      </div>
    </div>
  );
}
