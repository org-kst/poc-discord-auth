import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { code } = await request.json()

    // 本来はエラーハンドリングをする

    const params = new URLSearchParams({
        client_id: process.env.DISCORD_OAUTH_CLIENT_ID!,
        client_secret: process.env.DISCORD_OAUTH_CLIENT_SECRET!,
        grant_type: 'authorization_code',
        code,
        redirect_uri: process.env.DISCORD_OAUTH_REDIRECT_URL!,
      });

    const url = 'https://discordapp.com/api/oauth2/token';

    const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params,
      });
    
      const data = await res.json();
      return NextResponse.json(data);
}
