import { MailtrapClient } from "mailtrap";

const TOKEN = "0a19d1a92d44cffa24c08964a93d3b0f";

const client = new MailtrapClient({
  token: TOKEN,
});

const sender = {
  email: "hello@sirmrmelord.com",
  name: "Mailtrap Test",
};
const recipients = [
  {
    email: "pram15karki@gmail.com",
  }
];

client
  .send({
    from: sender,
    to: recipients,
    subject: "You are awesome!",
    text: "Congrats for sending test email with Mailtrap!",
    category: "Integration Test",
  })
  .then(console.log, console.error);