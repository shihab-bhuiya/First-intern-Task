import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const escapeHtml = (value: string) =>
    value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        // Validate input
        if (
            typeof email !== "string" ||
            typeof message !== "string" ||
            !email.trim() ||
            !message.trim() ||
            !/^\S+@\S+\.\S+$/.test(email)
        ) {
            return NextResponse.json(
                { error: "Invalid input" },
                { status: 400 }
            );
        }

        if (message.length > 5000) {
            return NextResponse.json(
                { error: "Message too long" },
                { status: 400 }
            );
        }

        const senderName =
            typeof name === "string" && name.trim()
                ? name.trim()
                : "A visitor";

        const safeName = escapeHtml(senderName);
        const safeEmail = escapeHtml(email.trim());
        const safeMessage = escapeHtml(message).replace(/\r?\n/g, "<br>");

        const replyUrl = `mailto:${encodeURIComponent(
            email.trim()
        )}?subject=${encodeURIComponent(
            "Re: Your message to Mazidul Hakim"
        )}`;

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Website Contact" <${process.env.EMAIL_USER}>`,
            to: process.env.CONTACT_TO,

            // Clicking Reply in Gmail will reply to the visitor
            replyTo: email.trim(),

            subject: `New message from ${senderName.replace(/[\r\n]+/g, " ")}`,

            text: `New message for Mazidul Hakim

From: ${senderName} <${email.trim()}>

${message}

Reply to ${senderName}: ${replyUrl}

Mazidul Hakim
mazidul.hakim@outlook.com
LinkedIn: https://linkedin.com/in/mazidulhakim

You received this notification because someone used the contact form on Mazidul Hakim's portfolio.`,

            html: `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="color-scheme" content="light">
    <meta name="supported-color-schemes" content="light">

    <title>New message for Mazidul Hakim</title>

    <style>
      @media only screen and (max-width: 620px) {
        .email-shell {
          padding: 20px 12px !important;
        }

        .email-card {
          border-radius: 14px !important;
        }

        .email-content {
          padding: 30px 22px !important;
        }

        .email-footer {
          padding: 22px !important;
        }

        .email-heading {
          font-size: 28px !important;
          line-height: 35px !important;
        }

        .email-cta {
          display: block !important;
          text-align: center !important;
        }
      }
    </style>
  </head>

  <body
    style="
      margin:0;
      padding:0;
      background-color:#F4F0EB;
      color:#0A0E12;
      font-family:Arial, Helvetica, sans-serif;
      -webkit-text-size-adjust:100%;
      text-size-adjust:100%;
    "
  >

    <!-- Preview text -->
    <div
      style="
        display:none;
        max-height:0;
        overflow:hidden;
        opacity:0;
        color:transparent;
      "
    >
      ${safeName} sent a message through your portfolio contact form.
    </div>

    <table
      role="presentation"
      width="100%"
      cellspacing="0"
      cellpadding="0"
      border="0"
      style="
        width:100%;
        background-color:#F4F0EB;
      "
    >
      <tr>
        <td
          align="center"
          class="email-shell"
          style="padding:48px 20px;"
        >

          <table
            role="presentation"
            width="100%"
            cellspacing="0"
            cellpadding="0"
            border="0"
            style="
              width:100%;
              max-width:600px;
            "
          >

            <!-- HEADER -->
            <tr>
              <td style="padding:0 8px 18px;">

                <table
                  role="presentation"
                  width="100%"
                  cellspacing="0"
                  cellpadding="0"
                  border="0"
                >
                  <tr>

                    <td style="width:42px;">
                      <div
                        style="
                          width:38px;
                          height:38px;
                          border-radius:12px;
                          background-color:#0A0E12;
                          color:#FFFFFF;
                          font-size:13px;
                          font-weight:700;
                          line-height:38px;
                          text-align:center;
                          letter-spacing:0.4px;
                        "
                      >
                        MH
                      </div>
                    </td>

                    <td
                      style="
                        padding-left:11px;
                        color:#0A0E12;
                        font-size:15px;
                        font-weight:700;
                        letter-spacing:0.1px;
                      "
                    >
                      Mazidul Hakim

                      <div
                        style="
                          padding-top:3px;
                          color:#6B7280;
                          font-size:11px;
                          font-weight:400;
                          letter-spacing:0.8px;
                          text-transform:uppercase;
                        "
                      >
                        Technology leadership
                      </div>
                    </td>

                    <td
                      align="right"
                      style="
                        color:#6B7280;
                        font-size:11px;
                        letter-spacing:0.8px;
                        text-transform:uppercase;
                      "
                    >
                      Portfolio update
                    </td>

                  </tr>
                </table>

              </td>
            </tr>


            <!-- CARD -->
            <tr>
              <td
                class="email-card"
                style="
                  overflow:hidden;
                  border:1px solid #E5E7EB;
                  border-radius:18px;
                  background-color:#FFFFFF;
                  box-shadow:0 8px 30px rgba(15,23,42,0.06);
                "
              >

                <table
                  role="presentation"
                  width="100%"
                  cellspacing="0"
                  cellpadding="0"
                  border="0"
                >

                  <!-- CONTENT -->
                  <tr>
                    <td
                      class="email-content"
                      style="
                        padding:42px 44px 38px;
                      "
                    >

                      <!-- Small heading -->
                      <div
                        style="
                          margin:0 0 15px;
                          color:#0A0E12;
                          font-size:11px;
                          font-weight:700;
                          letter-spacing:1.2px;
                          text-transform:uppercase;
                        "
                      >
                        New portfolio inquiry
                      </div>


                      <!-- Main heading -->
                      <h1
                        class="email-heading"
                        style="
                          margin:0;
                          color:#0A0E12;
                          font-family:Arial, Helvetica, sans-serif;
                          font-size:34px;
                          font-weight:700;
                          letter-spacing:-0.8px;
                          line-height:42px;
                        "
                      >
                        A new message<br>
                        is waiting for you.
                      </h1>


                      <!-- Description -->
                      <p
                        style="
                          margin:16px 0 26px;
                          color:#4B5563;
                          font-size:15px;
                          line-height:24px;
                        "
                      >
                        Someone got in touch through your portfolio.
                        Here are their details and message.
                      </p>


                      <!-- MESSAGE BOX -->
                      <table
                        role="presentation"
                        width="100%"
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                        style="
                          width:100%;
                          border:1px solid #E5E7EB;
                          border-radius:12px;
                          background-color:#F8FAFC;
                        "
                      >
                        <tr>
                          <td style="padding:19px 20px 15px;">

                            <!-- From label -->
                            <div
                              style="
                                color:#6B7280;
                                font-size:10px;
                                font-weight:700;
                                letter-spacing:1px;
                                text-transform:uppercase;
                              "
                            >
                              From
                            </div>


                            <!-- Name -->
                            <div
                              style="
                                padding-top:7px;
                                color:#0A0E12;
                                font-size:15px;
                                font-weight:700;
                                line-height:22px;
                              "
                            >
                              ${safeName}
                            </div>


                            <!-- Email -->
                            <div
                              style="
                                padding-top:2px;
                                color:#0A0E12;
                                font-size:13px;
                                line-height:20px;
                                word-break:break-word;
                              "
                            >
                              <a
                                href="mailto:${safeEmail}"
                                style="
                                  color:#0A0E12;
                                  text-decoration:underline;
                                "
                              >
                                ${safeEmail}
                              </a>
                            </div>


                            <!-- Divider -->
                            <div
                              style="
                                height:1px;
                                margin:16px 0;
                                background-color:#E5E7EB;
                                font-size:0;
                                line-height:1px;
                              "
                            >
                              &nbsp;
                            </div>


                            <!-- Message label -->
                            <div
                              style="
                                color:#6B7280;
                                font-size:10px;
                                font-weight:700;
                                letter-spacing:1px;
                                text-transform:uppercase;
                              "
                            >
                              Message
                            </div>


                            <!-- Message -->
                            <div
                              style="
                                padding-top:9px;
                                color:#111827;
                                font-size:14px;
                                line-height:23px;
                                overflow-wrap:anywhere;
                              "
                            >
                              ${safeMessage}
                            </div>

                          </td>
                        </tr>
                      </table>


                      <!-- BUTTON -->
                      <table
                        role="presentation"
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                        style="margin-top:26px;"
                      >
                        <tr>
                          <td
                            align="center"
                            bgcolor="#0A0E12"
                            style="border-radius:9px;"
                          >
                            <a
                              class="email-cta"
                              href="${replyUrl}"
                              style="
                                display:inline-block;
                                padding:14px 22px;
                                border:1px solid #0A0E12;
                                border-radius:9px;
                                background-color:#0A0E12;
                                color:#FFFFFF;
                                font-family:Arial, Helvetica, sans-serif;
                                font-size:14px;
                                font-weight:700;
                                line-height:20px;
                                text-decoration:none;
                              "
                            >
                              Reply to ${safeName} &nbsp;→
                            </a>
                          </td>
                        </tr>
                      </table>


                      <!-- Reply note -->
                      <p
                        style="
                          margin:18px 0 0;
                          color:#6B7280;
                          font-size:12px;
                          line-height:19px;
                        "
                      >
                        You can also reply directly to this email —
                        your response will go to
                        ${safeEmail}.
                      </p>

                    </td>
                  </tr>


                  <!-- FOOTER -->
                  <tr>
                    <td
                      class="email-footer"
                      style="
                        padding:24px 44px;
                        border-top:1px solid #E5E7EB;
                        background-color:#FAFAF9;
                      "
                    >

                      <table
                        role="presentation"
                        width="100%"
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                      >

                        <tr>

                          <td
                            style="
                              color:#0A0E12;
                              font-size:13px;
                              font-weight:700;
                              line-height:20px;
                            "
                          >
                            Mazidul Hakim
                          </td>

                          <td align="right">

                            <a
                              href="https://linkedin.com/in/mazidulhakim"
                              aria-label="Connect with Mazidul Hakim on LinkedIn"
                              style="
                                display:inline-block;
                                width:28px;
                                height:28px;
                                border:1px solid #D1D5DB;
                                border-radius:50%;
                                color:#0A0E12;
                                font-size:12px;
                                font-weight:700;
                                line-height:28px;
                                text-align:center;
                                text-decoration:none;
                              "
                            >
                              in
                            </a>

                          </td>

                        </tr>


                        <tr>
                          <td
                            colspan="2"
                            style="
                              padding-top:4px;
                              color:#6B7280;
                              font-size:12px;
                              line-height:19px;
                            "
                          >
                            IT leadership, cloud &amp; cybersecurity
                          </td>
                        </tr>


                        <tr>
                          <td
                            colspan="2"
                            style="
                              padding-top:12px;
                              color:#6B7280;
                              font-size:11px;
                              line-height:18px;
                            "
                          >

                            <a
                              href="mailto:mazidul.hakim@outlook.com"
                              style="
                                color:#0A0E12;
                                text-decoration:underline;
                              "
                            >
                              mazidul.hakim@outlook.com
                            </a>

                            <span
                              style="
                                padding:0 6px;
                                color:#CBD5E1;
                              "
                            >
                              |
                            </span>

                            <a
                              href="https://linkedin.com/in/mazidulhakim"
                              style="
                                color:#0A0E12;
                                text-decoration:underline;
                              "
                            >
                              LinkedIn
                            </a>

                          </td>
                        </tr>


                        <tr>
                          <td
                            colspan="2"
                            style="
                              padding-top:17px;
                              color:#9CA3AF;
                              font-size:10px;
                              line-height:16px;
                            "
                          >
                            This is a private notification sent because
                            someone used the contact form on your portfolio.
                          </td>
                        </tr>

                      </table>

                    </td>
                  </tr>

                </table>

              </td>
            </tr>


            <!-- COPYRIGHT -->
            <tr>
              <td
                align="center"
                style="
                  padding:19px 8px 0;
                  color:#9CA3AF;
                  font-size:10px;
                  line-height:16px;
                "
              >
                &copy; ${new Date().getFullYear()} Mazidul Hakim
              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>

  </body>
</html>
`,
        });

        return NextResponse.json({ ok: true });
    } catch (err) {
        console.error(err);

        return NextResponse.json(
            { error: "Failed to send" },
            { status: 500 }
        );
    }
}