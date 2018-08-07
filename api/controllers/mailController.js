'use strict';

var nodemailer = require('nodemailer'); 

exports.sendEmail = function(req, res){
    // Definimos el transporter
    var transporter = nodemailer.createTransport({
        host: 'mail.galvan-apps.com',
        port: 26,
        secure: false,
        auth: {
            user: 'desarrollo@galvan-apps.com',
            pass: 'x302$W'
        }
    });

    // Definimos el email
    var mailOptions = {
        from: 'desarrollo@galvan-apps.com',
        to: req.body.listEmailTo,
        cc: req.body.listEmailCC,
        subject: req.body.subject,
        text: req.body.text,
        html: req.body.text
    };

    // Enviamos el email
    transporter.sendMail(mailOptions, function(error, info){
        if (error){
            console.log(error);
            res.send(500, err.message);
        } else {
            console.log("Email enviado OKAY");
            res.status(200).jsonp(req.body);
        }
    });


};  