import nodemailer from "nodemailer"


export const approvalEmail = async (req,res ) => {

const transporter = nodemailer.createTransport({
  host: "smtp.forwardemail.net",
  port: 465,
});

const viewPath =  path.resolve(__dirname, './templates/views/');
const partialsPath = path.resolve(__dirname, './templates/partials');

//following function has to call inside the sendMail 

transporter.use('compile', hbs({
    viewEngine: {
      //extension name
      extName: '.handlebars',
      // layout path declare
      layoutsDir: viewPath,
      defaultLayout: false,
      //partials directory path
      partialsDir: partialsPath,
      express
    },
    //View path declare
    viewPath: viewPath,
    extName: '.handlebars',
}));
// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "brandon.counts.personal@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  //
  // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
  //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
  //       <https://github.com/forwardemail/preview-email>
  //
}

main().catch(console.error);


res.send(200)
}
