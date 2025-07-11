export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res
            .status(405)
            .json({ success: false, message: "Method not allowed" });
    }

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res
            .status(400)
            .json({ success: false, message: "All fields required" });
    }

    const text = `📩 New Message:\n\n👤 Name: ${name}\n📧 Email: ${email}\n💬 Message:\n${message}\n\nvia Portfolio Website`;

    try {
        const telegramRes = await fetch(
            `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: process.env.TELEGRAM_CHAT_ID,
                    text,
                }),
            }
        );

        const data = await telegramRes.json();
        if (data.ok) {
            return res
                .status(200)
                .json({ success: true, message: "Message sent!" });
        } else {
            return res
                .status(500)
                .json({ success: false, message: "Telegram API failed" });
        }
    } catch (err) {
        return res
            .status(500)
            .json({ success: false, message: "Server error" });
    }
}
