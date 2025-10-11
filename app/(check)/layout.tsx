import { styleScript } from "@/fonts/font";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <header>
            <Link href={"/"} className={`${styleScript.className} text-center text-main text-4xl md:text-5xl`}> Iqzaibessence</Link>
        </header>
        {children}
    
    </>
  );
}
