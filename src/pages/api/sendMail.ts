import nodemailer from "nodemailer";

export default async function handler(
  req: {
    method: string;
    body: { name: string; email: string; message: string; recaptcha: string };
  },
  res: {
    status: (arg0: number) => {
      (): any;
      new(): any;
      json: { (arg0: { error?: string; message?: string }): void; new(): any };
      end: { (arg0: string): void; new(): any };
    };
    setHeader: (arg0: string, arg1: string[]) => void;
  }
) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Faltan datos en la solicitud" });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL,
        pass: process.env.PASSWORD,
      },
    });

    try {
      const emailRes = await transporter.sendMail({
        from: process.env.GMAIL,
        to: process.env.GMAIL,
        subject: `Nuevo mensaje de contacto de ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; color: #333;">
            <h2>Tienes un nuevo mensaje de contacto del portfolio</h2>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mensaje:</strong> ${message}</p>
          </div>
        `,
      });
      console.log("Mensaje enviado", emailRes.messageId);
      res.status(200).json({ message: "Mensaje enviado" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Error al enviar el mensaje" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
