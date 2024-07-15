import { Lato } from 'next/font/google'

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lato"
})

export const fonts = {
  lato
}