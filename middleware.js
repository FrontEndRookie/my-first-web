import { NextResponse } from "next/server";

const middleware = (request) => {
  if (
    request.nextUrl.pathname == "/login" &&
    request.cookies.get("login")?.value == "true"
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }
};
export { middleware };
