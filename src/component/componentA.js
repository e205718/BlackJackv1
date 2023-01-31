import { useNavigate } from "react-router-dom"

const ComponentA = () => {
    const navigate = useNavigate()
    return (
        <div>
            <p>ホーム画面</p>
            <button onClick={() => navigate('/je')}>ログイン画面</button>


            <a
            className="Bj"
            href="./blackjackjack/index.html"
            target="_blank"
            rel="noopener noreferrer"
            >
            ゲームテストページ
            </a>
        </div>

    )
}
export default ComponentA
