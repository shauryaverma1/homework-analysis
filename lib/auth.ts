import { createHash, timingSafeEqual } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
export function authorized(req:NextRequest){const expected=process.env.MORI_ACCESS_TOKEN;const supplied=req.headers.get("x-mori-access-token")||"";if(!expected||!supplied)return false;const a=createHash("sha256").update(expected).digest();const b=createHash("sha256").update(supplied).digest();return timingSafeEqual(a,b);}
export function deny(){return NextResponse.json({error:"Unauthorized"},{status:401});}