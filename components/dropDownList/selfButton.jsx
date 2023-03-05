import styles from '../../styles/selfButton.module.scss'

const SelfButton = (props)=>{
    return <>
    <button data-text="Awesome" className={styles.button}>
        <span className={styles['actual-text']}>&nbsp;{props.text}&nbsp;</span>
        <span className={styles['hover-text']} aria-hidden="true">&nbsp;{props.text}&nbsp;</span>
    </button>
    </>
    
}
export default SelfButton