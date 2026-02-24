declare const process: {
  env: Record<string, string | undefined>;
};

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, phone, message } = (req.body ?? {}) as ContactPayload;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const contactRecipient = process.env.CONTACT_TO_EMAIL;
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL ?? "TINAL BYGG Contact <onboarding@resend.dev>";

    if (!resendApiKey || !contactRecipient) {
      return res.status(500).json({ error: "Email service not configured" });
    }

    const safeName = escapeHtml(String(name).trim());
    const safeEmail = escapeHtml(String(email).trim());
    const safePhone = escapeHtml(String(phone ?? "").trim());
    const safeMessage = escapeHtml(String(message).trim()).replace(/\n/g, "<br>");

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [contactRecipient],
        reply_to: safeEmail,
        subject: `New Contact Form Submission from ${safeName}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Phone:</strong> ${safePhone || "Not provided"}</p>
          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
        `,
      }),
    });

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text();
      return res.status(500).json({ error: "Failed to send email", details: errorText });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
