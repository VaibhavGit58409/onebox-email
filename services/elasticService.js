const { Client } = require("@elastic/elasticsearch");

const elasticClient = new Client({ node: "http://localhost:9200" });

async function storeEmailsInElasticsearch(emails) {
  for (const email of emails) {
    await elasticClient.index({
      index: "emails",
      body: email,
    });
  }
}

module.exports = { storeEmailsInElasticsearch };
