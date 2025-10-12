import { useState } from "react";
import type { Expense } from "../../App";
import styles from "./AddExpenseForm.module.scss";
import { categories } from "../../mock.ts";

interface Props {
    onAdd: (expense: Omit<Expense, "id">) => void;
}

export default function AddExpenseForm({ onAdd }: Props) {
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState(categories[0]);
    const [date, setDate] = useState("");
    const [amount, setAmount] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!description || !date || !amount) {
            alert("Заполни все поля!");
            return;
        }

        onAdd({ description, category, date, amount: Number(amount) });
        setDescription("");
        setDate("");
        setAmount("");
        setCategory(categories[0]);
    };

    return (
        <section>
            <h2>Новый расход</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                {/* Описание */}
                <label className={styles.label}>
                    Описание
                    <input
                        type="text"
                        placeholder="Введите описание"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label>

                {/* Категория */}
                <fieldset className={styles.fieldset}>
                    <legend>Категория</legend>
                    <div className={styles.radioGroup}>
                        {categories.map((cat) => (
                            <label key={cat} className={styles.radioLabel}>
                                <input
                                    type="radio"
                                    name="category"
                                    value={cat}
                                    checked={category === cat}
                                    onChange={() => setCategory(cat)}
                                />
                                {cat}
                            </label>
                        ))}
                    </div>
                </fieldset>

                {/* Дата */}
                <label className={styles.label}>
                    Дата
                    <input
                        type="text"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </label>

                {/* Сумма */}
                <label className={styles.label}>
                    Сумма
                    <input
                        type="text"
                        placeholder="Введите сумму"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </label>

                <button type="submit">Добавить новый расход</button>
            </form>
        </section>
    );
}
