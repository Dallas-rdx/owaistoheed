import React, { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";
import "@material/web/textfield/filled-text-field.js";
import "@material/web/button/filled-tonal-button.js";

function ContactForm3() {
    const [isLoading, setIsLoading] = useState(false);
    const [userInput, setUserInput] = useState({
        name: "",
        email: "",
        message: "",
    });

    const BOT_TOKEN = "telegram-bot-token"; // Replace with your actual token
    const CHAT_ID = "telegram-chat-id"; // Replace with your chat ID

    const handleSendToTelegram = async (e) => {
        e.preventDefault();

        const { name, email, message } = userInput;

        if (!name || !email || !message) {
            toast.error("All fields are required!");
            return;
        }

        const text = `📩 New Message:\n\n👤 Name: ${name}\n📧 Email: ${email}\n💬 Message:\n${message}\n\nvia Portfolio Website`;

        try {
            setIsLoading(true);
            const res = await fetch(
                `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ chat_id: CHAT_ID, text }),
                }
            );

            const data = await res.json();
            if (data.ok) {
                toast.success("Message Sent!");
                setUserInput({ name: "", email: "", message: "" });
            } else {
                toast.error("Failed to send message.");
            }
        } catch (err) {
            toast.error("Error: " + err.message);
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <div>
            <p className="font-medium mb-5 text-[var(--md-sys-color-primary)] text-xl uppercase">
                Contact with me
            </p>
            <div className="max-w-3xl text-[var(--md-sys-color-on-surface)] rounded-lg border border-[var(--md-sys-color-outline)] p-3 lg:p-5">
                <p className="text-sm text-[var(--md-sys-color-on-surface-variant)]">
                    {
                        "If you have any questions or work opportunities, feel free to reach out!"
                    }
                </p>

                <div className="mt-6 flex flex-col gap-4">
                    {/* Name Field */}
                    <div className="flex flex-col gap-2">
                        <md-filled-text-field
                            label="Your Name"
                            type="text"
                            value={userInput.name}
                            required
                            maxLength="100"
                            class="w-full"
                            onInput={(e) =>
                                setUserInput({
                                    ...userInput,
                                    name: e.target.value,
                                })
                            }
                        />
                    </div>

                    {/* Email Field */}
                    <div className="flex flex-col gap-2">
                        <md-filled-text-field
                            label="Your Email"
                            type="email"
                            value={userInput.email}
                            required
                            maxLength="100"
                            onInput={(e) =>
                                setUserInput({
                                    ...userInput,
                                    email: e.target.value,
                                })
                            }
                        />
                    </div>

                    {/* Message Field */}
                    <div className="flex flex-col gap-2">
                        {/* <label className="text-base">Your Message:</label> */}
                        <md-filled-text-field
                            label="Your Message: "
                            type="textarea"
                            rows="4"
                            value={userInput.message}
                            required
                            onInput={(e) =>
                                setUserInput({
                                    ...userInput,
                                    message: e.target.value,
                                })
                            }
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex flex-col items-center gap-3">
                        <md-filled-tonal-button
                            type="button"
                            disabled={isLoading}
                            onclick={handleSendToTelegram}
                        >
                            {isLoading ? (
                                "Sending Message..."
                            ) : (
                                <>
                                    Send Message
                                    <TbMailForward slot="icon" size={20} />
                                </>
                            )}
                        </md-filled-tonal-button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactForm3;
