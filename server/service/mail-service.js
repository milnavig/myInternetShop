const nodemailer = require('nodemailer');

class MailService {

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: 'milnavigator@gmail.com',
                pass: '36521908467_5'
            }
        })
    }

    async sendActivationMail(to, link) {
        await this.transporter.sendMail({
            from: 'milnavigator@gmail.com',
            to,
            subject: 'Account activation at ' + process.env.API_URL,
            text: '',
            html: `
                <div>
                    <h1>Use this link to activate your account:</h1>
                    <a href="${link}">${link}</a>
                </div>
                `
        })
    }
}

module.exports = new MailService();