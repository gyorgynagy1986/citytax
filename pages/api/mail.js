import { Resend } from "resend";
import EmailTemplate from "../email/getEmail";
 // import WelcomeEmailTemplate from "../email/welcome/welcomeEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  try {
    const body = JSON.parse(req.body);
    
    const { name, email, message } = body;

    const commonEmailOptions = {
      from: "hello@studiobromo.hu",
      subject: "Üzenet érkezett",
      react: EmailTemplate({ firstName: name, message, email }),
    };

    const dataPromises = [
      resend.emails.send({
        ...commonEmailOptions,
        to: ["gyurzi@gmail.com"],
      }),
     // resend.emails.send({
     //   ...commonEmailOptions,
     //   to: email,
     //   subject: "Köszönjük a megkeresést",
     //   react: WelcomeEmailTemplate({ firstName: name }),
     // }),
    ];

    const [data, toSender] = await Promise.all(dataPromises);

    res.status(200).json({ data, toSender });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
