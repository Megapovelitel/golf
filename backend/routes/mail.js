const mailgun = require("mailgun-js");
const router2 = require('express').Router();
const apiKey = process.env.API_KEY;
const domain = process.env.DOMAIN;
const mg = mailgun({apiKey, domain});
 let data = {
	from:'',
	to:'megapovelitel@yandex.com',
	subject:'',
	text:''
};



 router2.route('/contact').post(async (req, res) =>{
    
         await mg.messages().send(data={ from: req.body.email,
            to: 'megapovelitel@yandex.com',
            subject: req.body.subject,
            text: req.body.message

        }, function (error, body) {
             res.send('email sent')
             console.log('sent');
            
        });
        
         
         
 })

module.exports = router2;
