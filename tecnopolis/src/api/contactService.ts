interface SendEmailDTO {
  name: string;
  email: string;
  message: string;
  telephone: string;
}

interface SendEmailResponse {
  status: "OK" | "Error";
  message: string;
}

export const sendEmail = async (body: SendEmailDTO): Promise<SendEmailResponse> => {
  const response = await fetch("http://localhost:5000/api/contact", {
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
