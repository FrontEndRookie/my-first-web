'use client'
import style from '../../styles/tech.module.scss'
import List from '../../components/tech/list'
const tech = ()=>{
    let data = [
        {id:1,title:'1',description:'sakura',tags:['vue','javaScript','css']},
        {id:2,title:'1',description:'sakura',tags:['vue','javaScript','css']},
        {id:3,title:'1',description:'sakura',tags:['vue','javaScript','css']},
        {id:4,title:'1',description:'sakura',tags:['vue','javaScript','css']},
        {id:5,title:'1',description:'sakura',tags:['vue','javaScript','css']}
    ]
    const removeDescription = ()=>{
        let ele = document.getElementById('listBox')
        ele.classList = ''
    }
    return <>
    <div id="listBox" style={{height:'100vh',overflow:'auto',backgroundImage:"url('/blogPic/18.jpg')",backgroundSize:'100% 100%',display:'flex'}}>
        <div className={style.descriptionList}>
            {
                data.map((item,index)=><List key={item.id} number={index+1} data={item}/>)
            }
        </div>
        <div className={style.detailBox}>
            <div className={style.close} onClick={()=>removeDescription()}>x</div>
        </div>
        
    </div>
    </>
}
export default tech