import { NextApiRequest, NextApiResponse } from "next";

// we are not exporting by default
export async function middleware(req, ev) {
  const session = req.session.hasOwnProperty("user");

  console.log("jjj");
  if (session) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect("/login");
  }
}
