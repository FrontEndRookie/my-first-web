import * as style from "../../styles/searchSong.module.scss";
import SearchDial from '../../components/music/searchDial'
import { forwardRef,useState, useEffect } from "react";
const  SearchSon = forwardRef((props,ref)=> {
  let { useLocal, setPlaying } = props
  let [ifSearchMore,setSearchMore] = useState('false')
  useEffect(()=>{
    return ()=>{
      let canvas = document.getElementsByTagName('canvas')[0]
      let boxs = document.getElementsByClassName('dg ac')[0]
      document.body.removeChild(canvas)
      document.body.removeChild(boxs)
    }
  },[])
  return (
    <>
      <div className={style.navbar}>
        <input type="checkbox"/>
        <span></span>
        <span></span>
        <ul>
          <li>
            <a>
                 导入本地歌曲
              <input
                id="musicChoose"
                type="file"
                onChange={useLocal}
              />
            </a>
          </li>
          <li >
            <a ref={ref} onClick={()=>setPlaying(true)}>播放</a>
          </li>
          <li >
            <a onClick={()=>{setSearchMore('true');}}>搜索更多</a>
          </li>
        </ul>
      </div>
      <SearchDial style={style} setPlaying={setPlaying} ifSearchMore={ifSearchMore} setSearchMore={setSearchMore}/>
    </>
  );
})
export default SearchSon;
