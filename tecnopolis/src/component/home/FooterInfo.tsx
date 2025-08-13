import type { HomeSubPages } from "../../pages/HomePage"
import type React from "react"

interface Props{
    linking:HomeSubPages
    title:string
    content:string
    setSubpage: React.Dispatch<React.SetStateAction<HomeSubPages>>
}

const FooterInfo = ({ linking,title,content, setSubpage}:Props) => {
  return (
    <button onClick={()=>setSubpage(linking)} className="bg-black p-4 flex flex-col gap-2 w-80">
        <h2 className="w-full text-center text-white font-medium">{title}</h2>
        <p className="text-white text-sm opacity-80 text-start">{content}</p>
    </button>
  )
}

export default FooterInfo