const nodemailer = require("nodemailer");

const email = process.env.NEXT_PUBLIC_EMAIL || null;
const password = process.env.NEXT_PUBLIC_EMAIL_PASS || null;


export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "techinnosolution@gmail.com",
    pass: "fzjhvrkdjubcnmmb",
  },
});

export const mailOptions = {
  from: email,
  to: email,
};
