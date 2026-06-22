export async function askGemini(question) {
  // Demo AI Response
  // Later you can replace this with the real Gemini API.

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        "🤖 AI Tutor: " +
          question +
          " is an interesting topic. This is a demo response. Connect your Gemini API key to receive real AI-generated answers."
      );
    }, 1000);
  });
}
