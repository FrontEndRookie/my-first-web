import { useState } from "react"
import axios from 'axios';
 import Loading from '../loading/index'
const SearchDial=(props)=>{
    const searchKeyWords = ()=>{
        let keywords = document.getElementById('searchKey').value
        axios.get(`https://autumnfish.cn/search?keywords=${keywords}`).then(res=>{
            console.log(res)
            setKeywordRes(res.data.result.songs.slice(0,8))
        })
    }
    const playingSong = (id)=>{
        setLoading(true)
        axios(`https://autumnfish.cn/song/url?id=${id}`).then(res=>{
        console.log(res.data.data[0].url)
        props.setPlaying(res.data.data[0].url)
        setTimeout(()=>{
            setLoading(false)
        },1000)
        })
    }
    const [keywordRes,setKeywordRes] = useState([])
    const [ifloading,setLoading] = useState(false)
    return <>
        <Loading ifloading={ifloading}/>
        <div className={props.style['flash-border']} style={{display:props.ifSearchMore=='true'?'':'none'}}> 
        <div className={props.style['closeDial']} onClick={()=>{props.setSearchMore('false')}}>x</div>
        <div className={props.style['input-box']}>
            <input id="searchKey" placeholder="点击搜索" type="text" className={props.style['input']}/>
            <span onClick={()=>{searchKeyWords()}} className={props.style['span']}>搜索</span>
        </div>
        { keywordRes.map((item,index)=><div key={item.id} className={props.style['searchResult']} style={{'marginTop':index==0?'40px':'15px'}}>
                歌曲：{item.name} <span className={props.style['singer']}  >
                歌手：{item.artists[0].name}</span>
                <span onClick={()=>playingSong(item.id)} 
                className={props.style['playing']}
                >
                    播放
                </span>
            </div>) }
        </div>
    </>
}
export default SearchDial