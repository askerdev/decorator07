declare module Email {
  type TSendProps = {
    Host: string;
    Username: string;
    Password: string;
    To: string;
    From: string;
    Subject: string;
    Body: string;
  };

  export function send(args: TSendProps): Promise<void>;
}

const email = "nalchikdecorator@gmail.com";

export const send = ({ phone, name }: { phone: string; name: string }) =>
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: email,
    Password: process.env.NEXT_PUBLIC_ELASTIC_TOKEN!,
    To: email,
    From: email,
    Subject: "Обратная связь",
    Body: `<h3>Обратная связь из сайта</h3><br /><p><br />Имя: ${name}<br />Телефон: ${phone}</p>`,
  });
