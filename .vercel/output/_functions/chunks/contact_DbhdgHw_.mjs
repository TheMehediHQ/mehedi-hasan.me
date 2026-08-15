import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { Resend } from "resend";
//#region src/pages/api/contact.ts
var contact_exports = /* @__PURE__ */ __exportAll({
	POST: () => POST,
	prerender: () => false
});
var resend = new Resend("re_VwzyX4Jp_8ETkvhSege62NCUMzYBHfFyJ");
var POST = async ({ request }) => {
	let body;
	try {
		body = await request.json();
	} catch {
		return new Response(JSON.stringify({ error: "Invalid JSON" }), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
	}
	const name = body.name?.trim();
	const email = body.email?.trim();
	const message = body.message?.trim();
	if (body.honeypot?.trim()) return new Response(JSON.stringify({ ok: true }), {
		status: 200,
		headers: { "Content-Type": "application/json" }
	});
	if (!name || !email || !message) return new Response(JSON.stringify({ error: "All fields are required" }), {
		status: 400,
		headers: { "Content-Type": "application/json" }
	});
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return new Response(JSON.stringify({ error: "Invalid email address" }), {
		status: 400,
		headers: { "Content-Type": "application/json" }
	});
	try {
		const { error } = await resend.emails.send({
			from: "Mehedi Hasan <hello@mehedi-hasan.me>",
			to: ["mehedi.hasan16111@gmail.com"],
			replyTo: email,
			subject: `New message from ${name}`,
			html: `
        <h2>New Contact Form Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `
		});
		if (error) {
			console.error("Resend error:", error);
			return new Response(JSON.stringify({ error: "Failed to send message" }), {
				status: 500,
				headers: { "Content-Type": "application/json" }
			});
		}
		return new Response(JSON.stringify({ ok: true }), {
			status: 200,
			headers: { "Content-Type": "application/json" }
		});
	} catch (err) {
		console.error("Contact API error:", err);
		return new Response(JSON.stringify({ error: "Internal server error" }), {
			status: 500,
			headers: { "Content-Type": "application/json" }
		});
	}
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/contact@_@ts
var page = () => contact_exports;
//#endregion
export { page };
