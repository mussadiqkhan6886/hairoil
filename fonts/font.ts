import { Lato, Cormorant_Garamond, Love_Light } from "next/font/google"

export const lato = Lato({
     weight: ["100" , "300" , "400" , "700" , "900" ],
    style: ["normal" , "italic"],
    subsets: ["latin"]
})
export const cormorant = Cormorant_Garamond({
     weight: ["300" , "400" , "700"],
    style: ["normal" , "italic"],
    subsets: ["latin"]
})
export const love = Love_Light({
     weight: "400",
    subsets: ["latin"]
})

