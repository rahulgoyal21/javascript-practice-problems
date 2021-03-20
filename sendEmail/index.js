var nodeMailer = require('nodemailer');

const transporter = nodeMailer.createTransport({
    service:'gmail',
    auth:{
        user : 'rahulgoyal7480@gmail.com',
        pass : 'Phunshukh@21'
    }
})

const mailOptions = {
    from : 'rahulgoyal7480@gmail.com',
    to : 'rahul.goyal@thoughts2binary.com, sonamgoyal560@gmail.com',
    subject :'Rahul is learning Node.Js',
    html: '<h1>Welcome</h1><p>That is easy!</p><div style="color:blue">Let me know if any query.</div>'
}

transporter.sendMail(mailOptions,(error,info)=>{
    if(error) console.log(error)
    else console.log("Email sent:" + info.response)
})