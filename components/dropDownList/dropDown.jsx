'use client'
import Image from "next/image"
import Link from "next/link"
import SelfButton from './selfButton'
import { useState,useEffect } from "react"

const dropDown = ()=>{
    const [ifDropDown,setDropDown] = useState(false)
    const [ifLogin,setLogin] = useState(false)
    const changeDropDown = (val)=>{
        setTimeout(()=>{
            setDropDown(val)
        },1200)
        let ele = document.getElementById('dropDownBox')
        ele.className = val?'downPage':'upPage'
    }
    useEffect(()=>{
        let words = '心有所向，日复一日，必有精进。'
        let ele = document.getElementsByClassName('dropDownWords')[0]
        let wordIndex = 1;
        let loginStatus = sessionStorage.getItem('user')
        if(loginStatus) setLogin(true)
        setInterval(()=>{
            ele.innerHTML = words.slice(0,wordIndex)
            wordIndex == words.length? wordIndex = 1 : wordIndex += 1
        },500)
    },[])
    return <>
    <div id="dropDownBox" >
        <div className="dropDownPage">
            <div className="dropDownContent">
                <Link  href="/" onClick={()=>{changeDropDown(false)}}>
                    <SelfButton text="home"/>
                </Link>
                <Link href="/tech" onClick={()=>{changeDropDown(false)}}>
                    <SelfButton text="tech"/>
                </Link>
                <Link href="/music" onClick={()=>{changeDropDown(false)}}>
                    <SelfButton text="music"/>
                </Link>
                <Link onClick={()=>{changeDropDown(false)}} href="https://github.com/FrontEndRookie/my-first-web" target="_blank">
                    <SelfButton text="github"/>
                </Link>
                <Link style={{display:ifLogin?'none':'inline'}} onClick={()=>{changeDropDown(false)}} href="/login" >
                    <SelfButton text="login"/>
                </Link>
                <div style={{height:'50px'}}></div>
                <div className="dropDownWords">
                    心有所向，日复一日，必有精进
                </div>
            </div>
        </div>
        <Image onClick={()=>{changeDropDown(false)}} className="upDownImg" style={{ display:!ifDropDown?'none':'inline' }} src={'/close.png'} width="40" height="40" alt="xxx"></Image>
        <Image onClick={()=>{changeDropDown(true)}} className="dropDownImg" style={{ display:ifDropDown?'none':'inline' }} src={'/dropDown.png'} width="40" height="40" alt="xxx"></Image>
        <button style={{position:'absolute',top:999}} onClick={()=>{let login= ifLogin;setLogin(!login)}} id="setLogin"></button>
        </div>
    </>
}
export default dropDown