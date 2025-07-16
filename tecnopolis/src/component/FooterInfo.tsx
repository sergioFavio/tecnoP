interface Props{
    title:string
    content:string
}

const FooterInfo = ({ title,content}:Props) => {
  return (
    <div className="bg-black p-4 flex flex-col gap-2 w-80">
        <h2 className="w-full text-center text-white font-medium">{title}</h2>
        <p className="text-white text-sm opacity-80">{content}</p>
    </div>
  )
}

export default FooterInfo