'use client'
import style from '../../styles/tech.module.scss'
import List from '../../components/tech/list'
import { techList } from '@/api/index'
import { useEffect, useState } from 'react'
import dynamic from "next/dynamic";
  import 'md-editor-rt/lib/style.css';
const MDEditor = dynamic(
  () => import("md-editor-rt"),
  { ssr: false }
);
const tech = ()=>{
    let data = [
        {id:1,title:'1',describe:'sakura',label:['vue','javaScript','css']},
        {id:2,title:'1',describe:'sakura',label:['vue','javaScript','css']},
        {id:3,title:'1',describe:'sakura',label:['vue','javaScript','css']},
        {id:4,title:'1',describe:'sakura',label:['vue','javaScript','css']},
        {id:5,title:'1',describe:'sakura',label:['vue','javaScript','css']}
    ]
    let [techData, setTechData] = useState([])
    const removedescribe = ()=>{
        let ele = document.getElementById('listBox')
        ele.classList = ''
    }
    useEffect(()=>{
        async function fetchData (){
            let {code,data:{result}} = await techList()
            console.log(result)
            if(code == 200){
             result.forEach((item,index)=>{
                 item.id = item._id
             })
             setTechData(result)
        }
    }
    fetchData()
    },[])
    return <>
    <div id="listBox" style={{height:'100vh',overflow:'auto',backgroundImage:"url('/blogPic/18.jpg')",backgroundSize:'100% 100%',display:'flex'}}>
        <div className={style.descriptionList}>
            {
                techData.map((item,index)=><List key={item.id} number={index+1} data={item}/>)
            }
        </div>
        <div className={style.detailBox}>
            <div className={style.close} onClick={()=>removedescribe()}>x</div>
            <MDEditor  maxHeight='1200' height='900' modelValue={techData[0] && techData[0].detail} previewOnly="true"/>
        </div>
        
    </div>
    </>
}
export default tech