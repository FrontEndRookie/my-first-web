'use client'
import { Space, Tag } from 'antd';
import Image from "next/image"
import style from '../../styles/tech.module.scss'
const List = (props)=>{
    const colorList = ["magenta","red","orange","lime","green","cyan","blue","geekblue"]
    const showDetail = ()=>{
        if(!document) return
        let ele = document.getElementById('listBox')
        ele.classList = style.addDetail
    }
    return <>
        <div className={style.listBox}>
            <div style={{width:'70%',marginTop:'30px'}}>
                <div className={style.listBoxDescription}>
                    {props.data.describe}
                </div>
                <button onClick={()=>showDetail()} className={style.detailButton}>
                    <p >Detail</p>
                    <svg strokeWidth="4" stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinejoin="round" strokeLinecap="round"></path>
                    </svg>
                </button>
            </div>
            <div className={style.cover}>
                <Image layout="fill" alt="sakura" src={`/blogPic/${props.number}.jpg`}></Image>
                <div className={style.coverContent}>
                    <div className={style.coverContentTitle}>{props.data.title}</div>
                    <Space size={[0, 8]} wrap>
                        {props.data.label.map((i,idx)=><Tag key={idx} color={colorList[idx]}>{i}</Tag>)}
                        </Space>
                </div>
                
            </div>
        </div>
    </>
}
export default List