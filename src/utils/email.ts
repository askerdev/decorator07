import emailjs from "@emailjs/browser";

export const send = ({ phone, name }: { phone: string; name: string }) =>
  emailjs.send("service_t2bxnb7", "template_m8x17lf", {
    name,
    phone,
  });
