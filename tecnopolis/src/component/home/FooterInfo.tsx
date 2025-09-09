import { NavLink } from "react-router-dom";
import { useLanguage } from "../../component/LanguageContext";

interface Props {
  linking: string;
  titleKey: string;
  contentKey: string;
}

const FooterInfo = ({ linking, titleKey, contentKey }: Props) => {
  const { t } = useLanguage();

  return (
    <NavLink
      to={linking}
      className={({ isActive }) =>
        ` p-4 flex flex-col gap-2 w-80 transition-all duration-300 ${isActive ? "bg-orange-600" : "bg-black"}`
      }
    >
      <h2 className="w-full text-center text-white font-medium">{t(titleKey)}</h2>
      <p className="text-white text-sm opacity-80 text-start">{t(contentKey)}</p>
    </NavLink>
  );
};

export default FooterInfo;