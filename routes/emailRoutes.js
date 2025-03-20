const { sendSlackNotification, triggerWebhook } = require("../services/notificationService");

router.get("/sync", async (req, res) => {
  try {
    const emails = await fetchEmails();
    await storeEmailsInElasticsearch(emails);

    // Notify Slack & Webhook for "Interested" emails
    emails.forEach(async (email) => {
      if (email.category === "Interested") {
        await sendSlackNotification(email);
        await triggerWebhook(email);
      }
    });

    res.json({ message: "Emails synced successfully", emails });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
