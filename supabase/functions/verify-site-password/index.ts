import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  const json = (body: unknown, status = 200) =>
    new Response(JSON.stringify(body), {
      status,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  try {
    const body = await req.json().catch(() => null);
    const password = body && typeof body.password === 'string' ? body.password : null;

    if (!password || password.length > 200) {
      return json({ valid: false, error: 'Senha inválida' }, 400);
    }

    const expected = Deno.env.get('SITE_PASSWORD');
    if (!expected) {
      return json({ valid: false, error: 'Senha não configurada' }, 500);
    }

    // constant-time-ish comparison
    const enc = new TextEncoder();
    const a = enc.encode(password);
    const b = enc.encode(expected);
    let diff = a.length ^ b.length;
    for (let i = 0; i < Math.max(a.length, b.length); i++) {
      diff |= (a[i] ?? 0) ^ (b[i] ?? 0);
    }

    if (diff !== 0) {
      // small delay to slow brute force
      await new Promise((r) => setTimeout(r, 400));
      return json({ valid: false }, 200);
    }

    return json({ valid: true }, 200);
  } catch (_e) {
    return json({ valid: false, error: 'Erro inesperado' }, 500);
  }
});
