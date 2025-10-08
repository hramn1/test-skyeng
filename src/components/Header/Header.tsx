import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <h1>Мои расходы</h1>
            <nav>
                <Link to="/">Мои расходы</Link> | <Link to="/analysis">Анализ расходов</Link>
            </nav>
        </header>
    );
}
