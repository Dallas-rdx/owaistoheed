import React, { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";
import "@material/web/textfield/filled-text-field.js";
import "@material/web/button/filled-tonal-button.js";

function ContactForm4() {
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSendToTelegram = async (e) => {
    e.preventDefault();

    const { name, email, message } = userInput;

    if (!name || !email || !message) {
      toast.error("All fields are required!");
      return;
    }

    try {
      setIsLoading(true);
      const res = await fetch("/api/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();
      if (data.success) {
        toast.success("Message Sent!");
        setUserInput({ name: "", email: "", message: "" });
      } else {
        toast.error(data.message || "Failed to send message.");
      }
    } catch (err) {
      toast.error("Error: " + err.message);
      console.error("Error sending message:", err);
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
          If you have any questions or work opportunities, feel free to reach out!
        </p>

        <div className="mt-6 flex flex-col gap-4">
          <md-filled-text-field
            label="Your Name"
            type="text"
            value={userInput.name}
            required
            maxLength="100"
            class="w-full"
            onInput={(e) =>
              setUserInput({ ...userInput, name: e.target.value })
            }
          />

          <md-filled-text-field
            label="Your Email"
            type="email"
            value={userInput.email}
            required
            maxLength="100"
            class="w-full"
            onInput={(e) =>
              setUserInput({ ...userInput, email: e.target.value })
            }
          />

          <md-filled-text-field
            label="Your Message"
            rows="4"
            required
            class="w-full"
            value={userInput.message}
            onInput={(e) =>
              setUserInput({ ...userInput, message: e.target.value })
            }
          />

          <div className="flex flex-col items-center gap-3">
            <md-filled-tonal-button
              type="button"
              disabled={isLoading}
              onClick={handleSendToTelegram}
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

export default ContactForm4;
