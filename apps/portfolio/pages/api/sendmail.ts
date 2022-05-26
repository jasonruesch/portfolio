import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const body = request.body;

  try {
    const transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
      },
      ignoreTLS: Boolean(process.env.SMTP_IGNORE_TLS || false),
    });

    const mailOptions = {
      from: `${body.name} <${body.email}>`,
      to: ['jason.ruesch@me.com'],
      subject: '[Contact] from Portfolio',
      text: body.message,
      html: `<p>${body.message}</p>`,
    };

    transport.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        throw error;
      }
      console.log('Message sent: %s', info.messageId);
    });
  } catch (error) {
    // logs any error
    console.log(error);
    return response
      .status(error.statusCode || 500)
      .json({ error: error.message });
  }

  return response.status(200).json({ error: '' });
}
