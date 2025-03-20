const { categorizeEmail } = require("./aiService");

async function fetchEmails() {
  const connection = await Imap.connect({ imap: imapConfig.imap });
  await connection.openBox("INBOX");

  const searchCriteria = ["ALL"];
  const fetchOptions = { bodies: [""], struct: true };

  const messages = await connection.search(searchCriteria, fetchOptions);

  const emails = await Promise.all(
    messages.map(async (item) => {
      const email = await simpleParser(item.parts[0].body);
      const category = await categorizeEmail(email.subject, email.text);
      return {
        sender: email.from.text,
        subject: email.subject,
        body: email.text,
        date: email.date,
        category,
      };
    })
  );

  connection.end();
  return emails;
}

module.exports = { fetchEmails };
