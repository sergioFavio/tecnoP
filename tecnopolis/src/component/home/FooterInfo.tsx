import { NavLink } from "react-router-dom";

interface Props {
  linking: string;
  title: string;
  content: string;
}

const FooterInfo = ({ linking, title, content }: Props) => {
  return (
    <NavLink
      to={linking}
      className={({ isActive }) =>
        ` p-4 flex flex-col gap-2 w-80 transition-all duration-300 ${isActive ? "bg-orange-600" : "bg-black"}`
      }
    >
      <h2 className="w-full text-center text-white font-medium">{title}</h2>
      <p className="text-white text-sm opacity-80 text-start">{content}</p>
    </NavLink>
  );
};

export default FooterInfo;
