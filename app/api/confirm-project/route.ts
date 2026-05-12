import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { clientName, projectName, confirmationDate } = body

    const { data, error } = await resend.emails.send({
      from: 'InstaWeb <onboarding@resend.dev>',
      to: ['ojedagerard5@gmail.com'],
      subject: `✅ Proyecto Confirmado: ${projectName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0f0f0f; color: #ffffff; padding: 40px; }
            .container { max-width: 600px; margin: 0 auto; background-color: #1a1a1a; border-radius: 12px; padding: 40px; border: 1px solid #333; }
            .header { text-align: center; margin-bottom: 30px; }
            .logo { font-size: 28px; font-weight: bold; color: #d4a853; }
            .badge { display: inline-block; background-color: #22c55e20; color: #22c55e; padding: 8px 16px; border-radius: 20px; font-size: 14px; margin-bottom: 20px; }
            .title { font-size: 24px; color: #ffffff; margin-bottom: 30px; text-align: center; }
            .info-card { background-color: #252525; border-radius: 8px; padding: 20px; margin-bottom: 15px; border-left: 4px solid #d4a853; }
            .label { font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px; }
            .value { font-size: 18px; color: #ffffff; font-weight: 500; }
            .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #333; color: #666; font-size: 12px; }
            .highlight { color: #d4a853; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">Insta<span class="highlight">Web</span></div>
              <p style="color: #888; font-size: 14px;">Páginas que generan resultados</p>
            </div>
            
            <div style="text-align: center;">
              <span class="badge">✓ PROYECTO CONFIRMADO</span>
            </div>
            
            <h1 class="title">Nueva Confirmación de Proyecto</h1>
            
            <div class="info-card">
              <div class="label">Cliente</div>
              <div class="value">${clientName}</div>
            </div>
            
            <div class="info-card">
              <div class="label">Proyecto</div>
              <div class="value">${projectName}</div>
            </div>
            
            <div class="info-card">
              <div class="label">Fecha de Confirmación</div>
              <div class="value">${confirmationDate}</div>
            </div>
            
            <p style="text-align: center; color: #888; margin-top: 30px;">
              El cliente ha aceptado los términos y condiciones del proyecto.
            </p>
            
            <div class="footer">
              <p>Este es un correo automático generado por el sistema de confirmación de InstaWeb.</p>
              <p style="color: #d4a853;">© ${new Date().getFullYear()} InstaWeb - Todos los derechos reservados</p>
            </div>
          </div>
        </body>
        </html>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Server error:', error)
    return NextResponse.json(
      { error: 'Error al enviar el correo de confirmación' },
      { status: 500 }
    )
  }
}
