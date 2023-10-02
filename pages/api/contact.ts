// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { transporter, mailOptions } from "@/config/nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  if (req.method === "POST") {
    const data = req.body;
    if (!data.name.trim() || !data.email.trim() || !data.message.trim()) {
      return res.status(400).json({ message: "Bad Request" });
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: "Contact Us",
        text: "This is a testing text",
        html: `<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap">
            <title>Your Message</title>
            <style>
                body {
                    font-family: 'Poppins', sans-serif;
                    background-color: #f7f7f7;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                }
        
                .container {
                    max-width: 600px;
                    width: 100%;
                    background-color: white;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    border-radius: 10px;
                    overflow: hidden;
                }
        
                .header {
                    background-color: #4caf50;
                    color: white;
                    text-align: center;
                    padding: 10px 0;
                    font-size: 16px;
                }
        
                .content {
                    padding: 30px;
                    color: #333;
                    font-size: 15px;
                }
        
                .respond {
                    color: #333;
                    font-size: 14px;
                }
        
                .footer {
                    background-color: #333;
                    color: white;
                    text-align: center;
                    padding: 10px 0;
                    font-size: 14px;
                }
        
                .button {
                    display: inline-block;
                    background-color: #4caf50;
                    color: white;
                    padding: 10px 20px;
                    text-decoration: none;
                    border-radius: 5px;
                    margin-top: 20px;
                }
        
                .message-box {
                    border: 1px solid #ddd;
                    padding: 15px;
                    margin-top: 20px;
                    border-radius: 5px;
                }
        
                .thank-you {
                    margin-top: 20px;
                    text-align: right;
                    font-style: italic;
                    font-size: 14px;
                }
            </style>
        </head>
        
        <body>
            <div class="container">
                <div class="header">
                    <h1><span><</span>TechInno Solution /></h1>
                </div>
                <div class="content">
                    <h2>Hello Team!</h2>
                    <p class="respond">We have received a new message from a contact. Please find the details below:</p>
                    <div class="message-box">
                        <p><strong>Message from ${req.body.name}:</strong></p>
                        <p>${req.body.message}</p>
                    </div>
                    <p class="respond">Please respond to this email as soon as possible during the working hours, from 9:00 AM to 5:00 PM (GMT
                        +7). Thank you team!</p>
                    <div class="thank-you">
                        <p>Thank You,</p>
                        <p>${req.body.name}</p>
                        <p>${req.body.email}</p>
                    </div>
                    <!-- <p>If you have any questions or need further assistance, feel free to contact us. We look forward to
                        hearing from you soon!</p> -->
                    <!-- <a href="#" class="button">Learn More</a> -->
                </div>
                <div class="footer">
                    <p>&copy; 2023 R11 — TenhInno Solution. All rights reserved.</p>
                </div>
            </div>
        </body>
        
        </html>
        `,
      });
    } catch (err: any) {
      console.log(err);
      return res.status(400).json({ message: err.message });
    }
  }
  return res.status(200).json({ message: "Success" });
};

export default handler;
