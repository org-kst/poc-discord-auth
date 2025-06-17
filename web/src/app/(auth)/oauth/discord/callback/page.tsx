import { TokenReceiver } from "./token-receiver";

type Props = {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

const parseSearchParams = (searchparams: Awaited<Props["searchParams"]>) => {
    const code = Array.isArray(searchparams.code) ? searchparams.code[0] : searchparams.code;

    return {
        code
    }
}

export default async function Callback(props: Props) {
    const searchParams = await props.searchParams
    const { code } = parseSearchParams(searchParams);

    if (!code) {
        return (
            <div>
                <h1>エラー</h1>
            </div>
        )
    }

    // アクセストークンを取得する
    // TODO: URLベタ書き修正する
    // ↓相対パスだとなぜかエラーを吐いた
    const res = await fetch("http://localhost:3000/api/oauth/discord/token", {
        method: "POST",
        body: JSON.stringify({code})
    })
    const body = await res.json();
    
    // アクセストークンを持ってページ遷移する
    // ローカルストレージにする
    // アクセストークンは一時的にして、リフレッシュトークンを保存したいがテストなので
    
    return (
        <TokenReceiver accessToken={body.access_token} />
    )
}