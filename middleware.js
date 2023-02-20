import { NextResponse } from 'next/server'
const middleware = (request) => {
    // console.log(request,123)
    // return NextResponse.next()
    // const url = request.nextUrl.clone()
    // url.pathname = '/music'
    // return NextResponse.rewrite(url)
    if(request.nextUrl.pathname == '/music'){
        return NextResponse.redirect(new URL('/', request.url))
    }
   
}
export { middleware }