module.exports = {
    imap: {
      user: process.env.IMAP_USER,
      password: process.env.IMAP_PASSWORD,
      host: process.env.IMAP_HOST,
      port: 993,
      tls: true,
    },
  };
  