export const sendToTelegram = async (text: string) => {
  const token = import.meta.env.VITE_TELEGRAM_TOKEN;
  const chatId = import.meta.env.VITE_CHAT_ID;

  if (!token || !chatId) {
    console.error('Telegram token or chat ID not found in environment variables');
    return;
  }

  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
      }),
    });

    if (!response.ok) {
      throw new Error(`Telegram API error: ${response.status}`);
    }

    console.log('Message sent to Telegram successfully');
  } catch (error) {
    console.error('Failed to send message to Telegram:', error);
  }
};