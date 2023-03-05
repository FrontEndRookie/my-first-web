import style from "../../styles/loading.module.scss";
const Loading = (props) => {
  return (
    <>
    <div className={style.loadingBox} style={{display:props.ifloading?'':'none'}}>
      <div className={style.loader}>
        <div className={style.cube}>
          <div className={style.face1}></div>
          <div className={style.face2}></div>
          <div className={style.face3}></div>
          <div className={style.face4}></div>
          <div className={style.face5}></div>
          <div className={style.face6}></div>
        </div>
      </div>
      </div>
    </>
  );
};
export default Loading
