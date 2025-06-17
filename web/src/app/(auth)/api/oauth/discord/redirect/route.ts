import { redirect } from 'next/navigation'

export async function GET() {
    // テストコードなのでチェック等はしない
    const clientId = process.env.DISCORD_OAUTH_CLIENT_ID;
    const redirectUrl = process.env.DISCORD_OAUTH_REDIRECT_URL;

    const urlParams = new URLSearchParams({
        "client_id": clientId!,
        "response_type": "code",
        "redirect_uri": redirectUrl!,
    })
    const params = `${urlParams}&scope=identify+guilds`; // 「+」がエンコードされてエラーになるため
    const url = `https://discord.com/oauth2/authorize?${params}`;
    
    redirect(url)
}