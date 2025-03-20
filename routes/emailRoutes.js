const express = require("express");
const { fetchEmails } = require("../services/imapService");
const { storeEmailsInElasticsearch } = require("../services/elasticService");

const router = express.Router();

router.get("/sync", async (req, res) => {
  try {
    const emails = await fetchEmails();
    await storeEmailsInElasticsearch(emails);
    res.json({ message: "Emails synced successfully", emails });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
