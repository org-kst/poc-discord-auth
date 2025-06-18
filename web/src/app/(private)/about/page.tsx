'use client'

import { useEffect } from "react";

export default function About() {
    // 検証をして問題なければ表示する
    // 本当はlayout.tsxでやる
    // ミドルウェアとか使う？

    useEffect(() => {
        (async () => {
            const accessToken = typeof window !== 'undefined' ? localStorage.getItem('access_token') : null;

            if (!accessToken) {
                // トップページに飛ばす
                return;
            }
        
            const res = await fetch("http://localhost:3000/api/oauth/discord/verify", {
                method: "POST",
                body: JSON.stringify({ accessToken })
            })
            const body = await res.json();

            if (!body) {
                // トップページに飛ばす
                return;
            }

            // 本来は検証が終わるまで表示させない
        })()
    }, [])

    return (
        <div>
            <h1>こんにちは、サーバーの人</h1>
        </div>
    )
}