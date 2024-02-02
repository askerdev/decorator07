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

  export function send(args: TSendProps): void;
}

type TProps = {
  name: string;
  phone: string;
  type: string;
  isIndividuals: boolean;
  registered: boolean;
};

const email = "test@gmail.com";

export const send = () =>
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: email,
    Password: "pass",
    To: email,
    From: email,
    Subject: "Обратная связь",
    Body: `Test`,
  });
