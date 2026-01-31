export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { keyword } = req.body;

  if (!keyword) {
    return res.status(400).json({ error: "Keyword required" });
  }

  // Temporary fake AI response (OpenAI baad me add karenge)
  const result = `
  <b>Title:</b> Master ${keyword} in 2026<br><br>
  <b>Tags:</b> ${keyword}, youtube growth, seo strategy<br><br>
  <b>Description:</b> Learn ${keyword} step by step and grow fast.
  `;

  res.status(200).json({ result });
}
