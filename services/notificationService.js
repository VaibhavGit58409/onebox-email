const { IncomingWebhook } = require("slack-webhook");
const axios = require("axios");

const slackWebhook = new IncomingWebhook(process.env.SLACK_WEBHOOK_URL);
const webhookURL = process.env.WEBHOOK_URL;

async function sendSlackNotification(email) {
  const message = `📩 *New Interested Email!*  
  *From:* ${email.sender}  
  *Subject:* ${email.subject}`;

  await slackWebhook.send({ text: message });
}

async function triggerWebhook(email) {
  await axios.post(webhookURL, {
    message: "New Interested email received",
    email,
  });
}

module.exports = { sendSlackNotification, triggerWebhook };
