import * as style from "./css/searchSong.module.less";
import styles from '../page.module.css'
import { forwardRef,useState } from "react";
const  SearchSon = forwardRef((props,ref)=> {
  let { useLocal, setPlaying } = props
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
            <a ref={ref} onClick={setPlaying}>播放</a>
          </li>
       
        </ul>
      </div>
     
      <span className={styles.test}></span>
    </>
  );
})
export default SearchSon;
