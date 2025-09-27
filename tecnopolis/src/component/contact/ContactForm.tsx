// ContactForm.tsx
import { useState } from "react";
import { useLanguage } from "../../component/LanguageContext";
import IconSend from "../../iconos/IconSend";
import CheckBox from "../ui/CheckBox";
import Input from "../ui/Input";
import { sendEmail } from "../../api/contactService";

const ContactForm = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    telephone: "",
  });

  const handleSend = async () => {
    if (!form.name.trim()) {
      return alert("name is required");
    }
    if (!form.email.trim()) {
      return alert("email is required");
    }
    if (!form.email.includes("@") || !form.email.includes(".")) {
      return alert("@ and . is required");
    }
    if (!form.message.trim()) {
      return alert("message is required");
    }
    if (!form.telephone.trim()) {
      return alert("telephone is required");
    }

    const telregexp = /^\+?\d{7,15}$/
    if (!telregexp.test(form.telephone)) {
      return alert("only + without spaces, numbers is required");
    }
    const response = await sendEmail(form);
    alert(`${response.status}: ${response.message}`);
    setForm({
      name:"",
      email: "",
      message: "",
      telephone: ""
    })
  };

  return (
    <form className="w-full max-w-md lg:w-96 gap-6 bg-white rounded-lg text-black px-6 lg:px-8 py-6 flex flex-col overflow-hidden justify-between">
      <div className="flex flex-col gap-4 flex-1 overflow-y-auto mt-2">
        {/* Bloque oculto en modo responsivo (pantallas pequeñas) */}
        <div className="hidden lg:flex flex-col gap-3">
          <h3 className="font-bold mt-2">{t("interestTitle")}</h3>
          <div className="flex gap-1 flex-wrap">
            <CheckBox text={t("option1")} name="interes" />
            <CheckBox text={t("option2")} name="interes" />
            <CheckBox text={t("option3")} name="interes" />
            <CheckBox text={t("option4")} name="interes" />
          </div>
        </div>
        <Input
          value={form.name}
          onChange={(e) => setForm((prev) => ({ ...prev, name: e }))}
          placeholder={t("yourName")}
        />
        <Input
          value={form.email}
          onChange={(e) => setForm((prev) => ({ ...prev, email: e }))}
          placeholder={t("yourEmail")}
        />
        <Input
          value={form.message}
          onChange={(e) => setForm((prev) => ({ ...prev, message: e }))}
          placeholder={t("yourMessage")}
        />
        <Input
          value={form.telephone}
          onChange={(e) => setForm((prev) => ({ ...prev, telephone: e }))}
          placeholder={t("yourWhatsapp")}
        />
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="text-white bg-purple-800 border-purple-800 cursor-pointer px-2 py-1 text-sm border rounded-md w-fit flex gap-2 items-center self-center lg:self-start"
      >
        <div className="w-4 h-4">
          <IconSend />
        </div>
        {t("send")}
      </button>
    </form>
  );
};

export default ContactForm;
