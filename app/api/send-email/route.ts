import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, note } = await request.json();

    if (!name || !email || !note) {
      return Response.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "kanikaprabhakar2005@gmail.com",
      subject: `New message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${note.replace(/\n/g, "<br>")}</p>
      `,
      replyTo: email,
    });

    if (response.error) {
      return Response.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Email error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
