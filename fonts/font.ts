import { Lato, Style_Script, Abril_Fatface } from "next/font/google"

export const lato = Lato({
     weight: ["100" , "300" , "400" , "700" , "900" ],
    style: ["normal" , "italic"],
    subsets: ["latin"]
})
export const instrumental = Abril_Fatface({
     weight: ["400"],
    subsets: ["latin"]
})
export const styleScript = Style_Script({
     weight: "400",
    subsets: ["latin"]
})

