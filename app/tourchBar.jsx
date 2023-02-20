import Link from 'next/link'
const tourchBar = ()=>{
    return <div>
         <Link href="/music">
           music
        </Link>
        <Link href="/">
           home
        </Link>
    </div>
}
export default tourchBar