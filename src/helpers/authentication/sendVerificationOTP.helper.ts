// Libraries
import nodemailer from 'nodemailer';

const sendVerificationOTP = async (userEmail: string, userOTP: string) => {
  // create reusable transporter object using the default SMTP transport
  const transporter = await nodemailer.createTransport({
    service: process.env.MAIL_SERVICE,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_APP_PASSWORD,
    },
  });

  // send mail with defined transport object
  await transporter.sendMail({
    from: `C-Store Service" <${process.env.MAIL_SERVICE}>`,
    to: userEmail,
    subject: 'C-Store Verification Code',
    html: `<p>Hi ${userEmail},</p>
             <p>Please enter the following verification code to access your C-Store Account.</p>
             <b>${userOTP}</b>`,
  });
};

export { sendVerificationOTP };
