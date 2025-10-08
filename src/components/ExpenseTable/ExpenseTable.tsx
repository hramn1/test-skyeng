import type {Expense} from "../../App";

interface Props {
    expenses: Expense[];
}

export default function ExpenseTable({ expenses }: Props) {
    return (
        <table>
            <thead>
            <tr>
                <th>Описание</th>
                <th>Категория</th>
                <th>Дата</th>
                <th>Сумма</th>
            </tr>
            </thead>
            <tbody>
            {expenses.map((e) => (
                <tr key={e.id}>
                    <td>{e.description}</td>
                    <td>{e.category}</td>
                    <td>{new Date(e.date).toLocaleDateString()}</td>
                    <td>{e.amount} ₽</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}
