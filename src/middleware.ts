export { default } from "next-auth/middleware";

export const config = { matcher: ["/admin/:path*", "/user"] };
// 로그인 된 사람만 matcher에 넣어둔 경로들에만 접근 가능함.
