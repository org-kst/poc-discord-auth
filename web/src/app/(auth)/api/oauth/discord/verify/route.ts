import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { accessToken } = await request.json();
    const guildId = process.env.DISCORD_GUILD_ID;

    // エラーハンドリング　

    // サーバ所属判定
    const url = 'https://discordapp.com/api/users/@me/guilds';

    const res = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })

    const data = await res.json();
    const isExists = data.some((guild: { id: string; }) => guild.id === guildId!);

    if (!isExists) {
        // 一旦適当にnullを返す
        return NextResponse.json(null);
    }

    return NextResponse.json(data);

    // 所属していたらユーザ情報を返す
}