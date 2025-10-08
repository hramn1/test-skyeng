import { useState } from "react";
import Header from "./components/Header/Header";
import ExpenseTable from "./components/ExpenseTable/ExpenseTable";
import AddExpenseForm from "./components/AddExpenseForm/AddExpenseForm";
import FilterSortPanel from "./components/FilterSortPanel/FilterSortPanel";

export interface Expense {
    id: number;
    description: string;
    category: string;
    date: string;
    amount: number;
}

const initialExpenses: Expense[] = [
    { id: 1, description: "Пятерочка", category: "Еда", date: "2024-07-03", amount: 3500 },
    { id: 2, description: "Яндекс Такси", category: "Транспорт", date: "2024-07-03", amount: 730 },
    { id: 3, description: "Аптека Вита", category: "Другое", date: "2024-07-03", amount: 1200 },
    { id: 4, description: "Бургер Кинг", category: "Еда", date: "2024-07-03", amount: 950 },
    { id: 5, description: "Деливери", category: "Еда", date: "2024-07-02", amount: 1320 },
    { id: 6, description: "Кофейня №1", category: "Еда", date: "2024-07-02", amount: 400 },
];

function App() {
    const [expenses, setExpenses] = useState(initialExpenses);
    const [filter, setFilter] = useState<string>("Все");
    const [sort, setSort] = useState<string>("дате");

    const addExpense = (newExpense: Omit<Expense, "id">) => {
        setExpenses((prev) => [...prev, { ...newExpense, id: Date.now() }]);
    };

    const filtered = expenses.filter(
        (e) => filter === "Все" || e.category === filter
    );

    const sorted = [...filtered].sort((a, b) => {
        if (sort === "дате") return b.date.localeCompare(a.date);
        if (sort === "сумме") return b.amount - a.amount;
        return 0;
    });

    return (
        <div>
            <Header />
            <FilterSortPanel
                filter={filter}
                setFilter={setFilter}
                sort={sort}
                setSort={setSort}
            />
            <ExpenseTable expenses={sorted} />
            <AddExpenseForm onAdd={addExpense} />
        </div>
    );
}

export default App;
