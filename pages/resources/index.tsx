import Line from '@/components/line'
import style from './style.module.scss'
import { useRouter } from 'next/router';
import Button from '../../components/button';

export default function Resources(){

    // Sample data showing alternative of mapping with real api
  const data = [
    {
      src: "/images/resource_news_small.png",
      title : 'Level up your rizz knowledge',
      link : '/some_new'
    },
    {
      src: "/images/resource_news_small.png",
      title : 'Level up your rizz knowledge',
      link : '/some_new'
    },
    {
      src: "/images/resource_news_small.png",
      title : 'Level up your rizz knowledge',
      link : '/some_new'
    },
    {
      src: "/images/resource_news_small.png",
      title : 'Level up your rizz knowledge',
      link : '/some_new'
    },
  ];

  const tests = [
    {
      src:'/images/banner.jpg',
      title:'Cambridge IELTS ACADEMIC 17',
      link:'/tests'
    },
  ]
  const router = useRouter();
  const innerHandleClick = (e:any , path:any) => {
    e.preventDefault(),
    router.push('resources' + path)
  }
  const outerHandleClick = (e:any , path:any) => {
    e.preventDefault(),
    router.push(path)
  }
    return(
        <div className={style.container}>
            <div className={style.wrapper}>
                {/* First block of the page */}
                <div className={style.greeting}>
                    <div className={style.text}>Stay Informed with the Latest Updates and News</div>
                    <div className={style.media}>
                        <img src="./images/resource.png" alt="img" />
                    </div>
                </div>
                
                <div className={style.cards}>
                    {data.map((data:any , id:number) => (
                        <div key={id} className={style.card} onClick={(e) => innerHandleClick(e , data.link)}>
                             <h1>{data.title}</h1>
                            <img src={data.src} alt="bg_img" />
                        </div>
                    ))}
                </div>
                <Line text='Tests'/>
                <div className={style.tests}>
                   {tests.map((data:any , idx:number)=> (
                    <div className={style.testsCard} key={idx} onClick={(e) => outerHandleClick(e , data.link)}>
                      <div className={style.banner}><img src={data.src} alt="banner" /></div>
                      <div className={style.title}>{data.title}</div>
                    </div>
                   ))}
                </div>
                <Button src='/tests' text='Read More'/>
            </div>
        </div>
    )
}