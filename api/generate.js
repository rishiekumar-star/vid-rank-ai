export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { keyword } = req.body;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "You are a YouTube SEO expert." },
          { role: "user", content: `Generate SEO optimized Title, Tags and Description for: ${keyword}` }
        ],
        temperature: 0.7
      })
    });

    const data = await response.json();

    res.status(200).json({
      result: data.choices[0].message.content
    });

  } catch (error) {
    res.status(500).json({ error: "OpenAI error" });
  }
}
