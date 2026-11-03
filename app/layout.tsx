import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Mori — Your Little Study World", description: "A little cozy corner to learn, grow and bloom." };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }