import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const { name, email, message } = await req.json();
        console.log('Received form data:', { name, email, message }); // Debug log

        // Create a transporter using SMTP
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        // Email options
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // Send to yourself
            subject: `New Contact Form Message from ${name}`,
            text: `
Name: ${name}
Email: ${email}
––––––––––––––––––––––––––––
Message: 
            ${message}
            `,
            replyTo: email
        };

        // Send email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info); // Debug log

        return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ 
            message: 'Failed to send email',
            error: error.message 
        }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
} 