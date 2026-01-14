"use server";

import { Resend } from "resend";
import { contactFormSchema, ContactFormValues } from "@/lib/validations/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(data: ContactFormValues) {
  const result = contactFormSchema.safeParse(data);

  if (!result.success) {
    return {
      success: false,
      error: "Invalid form data",
      validationErrors: result.error.flatten().fieldErrors,
    };
  }

  const { firstName, lastName, email, message } = result.data;

  try {
    const { data: emailData, error } = await resend.emails.send({
      from: "Ranchod Consulting Form <dev@ranchodconsulting.co.za>", // Or a verified domain if they have one set up
      to: ["info@ranchodconsulting.co.za"],
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        
        Message:
        ${message}
      `,
      // You can also use 'html' property for better formatting
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `
    });

    if (error) {
        console.error("Resend error:", error);
        return { success: false, error: error.message };
    }

    return { success: true, data: emailData };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: "Something went wrong. Please try again later." };
  }
}
