const { Configuration, OpenAIApi } = require("openai");

const openai = new OpenAIApi(
  new Configuration({ apiKey: process.env.OPENAI_API_KEY })
);

async function categorizeEmail(subject, body) {
  const prompt = `Categorize this email into one of these: Interested, Meeting Booked, Not Interested, Spam, Out of Office.\n\nSubject: ${subject}\n\nBody: ${body}\n\nCategory:`;

  const response = await openai.createCompletion({
    model: "gpt-3.5-turbo",
    prompt,
    max_tokens: 10,
  });

  return response.data.choices[0].text.trim();
}

module.exports = { categorizeEmail };
