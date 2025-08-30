// ContactForm.tsx
import { useState } from "react";
import IconSend from "../../iconos/IconSend";
import CheckBox from "../ui/CheckBox";
import Input from "../ui/Input";
import { sendEmail } from "../../api/contactService";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    telephone: "",
  });

  const handleSend = async () => {
    const response = await sendEmail(form);
    alert(`${response.status}: ${response.message}`);
  };

  return (
    <form className="w-full max-w-md lg:w-96 gap-6 bg-white rounded-lg text-black px-6 lg:px-8 py-6 flex flex-col overflow-hidden justify-between">
      <div className="flex flex-col gap-4 flex-1 overflow-y-auto mt-2">
        <div className="flex flex-col gap-3">
          <h3 className="font-bold mt-2">Tengo interés en ...</h3>
          <div className="flex gap-1 flex-wrap">
            <CheckBox text="opción 1" name="interes" />
            <CheckBox text="opción 2" name="interes" />
            <CheckBox text="opción 3" name="interes" />
            <CheckBox text="opción 4" name="interes" />
            <CheckBox text="opción 5" name="interes" />
          </div>
        </div>
        <Input
          value={form.name}
          onChange={(e) => setForm((prev) => ({ ...prev, name: e }))}
          placeholder="Your Name"
        />
        <Input
          value={form.email}
          onChange={(e) => setForm((prev) => ({ ...prev, email: e }))}
          placeholder="Your Email"
        />
        <Input
          value={form.message}
          onChange={(e) => setForm((prev) => ({ ...prev, message: e }))}
          placeholder="Your Message"
        />
        <Input
          value={form.telephone}
          onChange={(e) => setForm((prev) => ({ ...prev, telephone: e }))}
          placeholder="Your Whatsapp/Telegram"
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
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;