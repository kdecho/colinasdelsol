export async function onRequestPost({ request, env }) {
  try {
    const data = await request.json();
    const { name, email, phone, check_in, check_out } = data;

    if (!name || !email || !phone || !check_in || !check_out) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }

    if (!env.DB) {
      return new Response(JSON.stringify({ error: 'Database binding not found' }), { status: 500 });
    }

    const stmt = env.DB.prepare(
      `INSERT INTO bookings (name, email, phone, check_in, check_out) VALUES (?, ?, ?, ?, ?)`
    ).bind(name, email, phone, check_in, check_out);

    await stmt.run();

    return new Response(JSON.stringify({ success: true, message: 'Booking requested successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
