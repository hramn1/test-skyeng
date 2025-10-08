import { useState } from "react";
import type {Expense} from "../../App";

interface Props {
    onAdd: (expense: Omit<Expense, "id">) => void;
}

const categories = ["Еда", "Транспорт", "Жилье", "Развлечения", "Образование", "Другое"];

export default function AddExpenseForm({ onAdd }: Props) {
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState(categories[0]);
    const [date, setDate] = useState("");
    const [amount, setAmount] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!description || !date || !amount) return alert("Заполни все поля!");
        onAdd({ description, category, date, amount: Number(amount) });
        setDescription("");
        setDate("");
        setAmount("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Новый расход</h2>
            <input
                placeholder="Описание"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                {categories.map((cat) => (
                    <option key={cat}>{cat}</option>
                ))}
            </select>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            <input
                type="number"
                placeholder="Сумма"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <button type="submit">Добавить</button>
        </form>
    );
}
