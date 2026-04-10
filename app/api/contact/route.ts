import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactBody {
  nom: string;
  entreprise?: string;
  email: string;
  telephone?: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactBody = await request.json();

    if (!body.nom || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Les champs nom, email et message sont obligatoires.' },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const html = `
      <h2>Nouveau message depuis le site MO IWS CONSULTING</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Nom</td><td style="padding:8px;border-bottom:1px solid #eee;">${body.nom}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Entreprise</td><td style="padding:8px;border-bottom:1px solid #eee;">${body.entreprise || '—'}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;"><a href="mailto:${body.email}">${body.email}</a></td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Téléphone</td><td style="padding:8px;border-bottom:1px solid #eee;">${body.telephone || '—'}</td></tr>
      </table>
      <h3 style="margin-top:24px;">Message :</h3>
      <p style="white-space:pre-wrap;background:#f5f5f5;padding:16px;border-radius:8px;">${body.message}</p>
    `;

    await transporter.sendMail({
      from: `"MO IWS CONSULTING — Site Web" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO,
      replyTo: body.email,
      subject: `Nouveau contact : ${body.nom}${body.entreprise ? ` — ${body.entreprise}` : ''}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json(
      { error: "Une erreur est survenue lors de l'envoi du message." },
      { status: 500 },
    );
  }
}
