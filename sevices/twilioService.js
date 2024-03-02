import twilio from "twilio"
import dotenv from "dotenv"
dotenv.config()

class TwilioService {

    createCall(phone_number){

        const client = twilio(process.env.ACCOUNTS_ID, process.env.AUTH_TOKEN);

        client.calls.create({
            url: "http://demo.twilio.com/docs/voice.xml",
            to: phone_number,
            from: process.env.FROM_PHONE_NUMBER,
        }).then(call => console.log(call.sid));
    }
}

const twilioService = new TwilioService()

export default twilioService