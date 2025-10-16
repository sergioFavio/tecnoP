import { VITE_BACKEND } from "../constants/environment";

interface SendEmailDTO {
  name: string;
  email: string;
  message: string;
  telephone: string;
  intereses: string

}

interface SendEmailResponse {
  status: "OK" | "Error";
  message: string;
}

export const sendEmail = async (body: SendEmailDTO): Promise<SendEmailResponse> => {
  const response = await fetch(VITE_BACKEND +"api/contact", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    return {
      status: "Error",
      message: "Error al enviar",
    };
  }
  const json = await response.json();
  return json as SendEmailResponse;
};
