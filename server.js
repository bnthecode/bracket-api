import router from "./router.js";
import cors from "cors";
import bodyParser from "body-parser";
import express from "express";
import http from "http";
import config from "./config.js";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import logger from "./utilities/logger.js";
import { httpAuthMiddleware } from "./middlewares/authMiddleware.js";
import nodemailer from "nodemailer"
import Handlebars from "handlebars";
import { promisify } from "util";
import fs from 'fs';
import { devMiddleware } from "./middlewares/devMiddleware.js";



const {
  auth: { allowedOrigins, auth_enabled },
  database: { connection_string, database_config },
  server: { port },
  server: rootConfig,
} = config;

const app = express(rootConfig);
app.use(
  cors()
);

const server = http.createServer(app);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })),
app.use(cookieParser());
app.use(devMiddleware);
app.use("/api", router);

try {
  mongoose.connect(connection_string, {...database_config} );
  logger.success("----- Connected to mongo instance -----");
} catch (error) {
  console.log(error);
}

// const viewPath =  path.resolve(__dirname, './templates/views/');
// const partialsPath = path.resolve(__dirname, './templates/partials');

//following function has to call inside the sendMail 

// transporter.use('compile', hbs({
//     viewEngine: {
//       //extension name
//       extName: '.handlebars',
//       // layout path declare
//       layoutsDir: viewPath,
//       defaultLayout: false,
//       //partials directory path
//       partialsDir: partialsPath,
//       express
//     },
//     //View path declare
//     viewPath: viewPath,
//     extName: '.handlebars',
// }));
// async..await is not allowed in global scope, must use a wrapper

//   const html = await read('./index.html', 'utf8')

//   const template = Handlebars.compile(html);



//   let data = {
//     username: "Toto"
// };
// let htmlToSend = template(data);


//   const info = await transporter.sendMail({
  
//     from: 'brandon@brandoncounts.us', // sender address
//     to: "brandon.counts.personal@gmail.com", // list of receivers
//     subject: "Request For Access Granted ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: htmlToSend, // html body

//   });


  // console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  //
  // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
  //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
  //       <https://github.com/forwardemail/preview-email>
  //


server.listen(port, () => {
  console.log(
    "\x1b[36m%s\x1b[0m",
    "----- brackets ui running on port",
    port,
    "\x1b[36m",
    "-----"
  );
});
