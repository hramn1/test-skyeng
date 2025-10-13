import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import ExpenseTable from "./components/ExpenseTable/ExpenseTable";
import AddExpenseForm from "./components/AddExpenseForm/AddExpenseForm";
import FilterSortPanel from "./components/FilterSortPanel/FilterSortPanel";
import styles from "./App.module.scss";
import { initialExpenses } from "./mock.ts";
import type { Expense } from "./types.ts";

const STORAGE_KEY = "expenses";

function App() {
    const [expenses, setExpenses] = useState<Expense[]>(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : initialExpenses;
    });

    const [filter, setFilter] = useState<string>("Все");
    const [sort, setSort] = useState<string>("дате");
    const [editedExpense, setEditedExpense] = useState<number | null>(null);
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
    }, [expenses]);

    const addExpense = (newExpense: Omit<Expense, "id">) => {
        setExpenses((prev) => [
            ...prev,
            { ...newExpense, id: Date.now() }
        ]);
    };

    // --- Удаление ---
    const deleteExpense = (id: number) => {
        if (window.confirm("Вы точно хотите удалить этот расход?")) {
            setExpenses((prev) => prev.filter((e) => e.id !== id));
        }
    };

    // --- Редактирование (пока просто пример) ---
    const editExpense = (expense: Expense) => {
        setEditExpense(expense.id)
    };

    const filtered = expenses.filter(
        (e) => filter === "Все" || e.category === filter
    );

    // --- Сортировка ---
    const sorted = [...filtered].sort((a, b) => {
        if (sort === "дате") return b.date.localeCompare(a.date);
        if (sort === "сумме") return b.amount - a.amount;
        return 0;
    });

    return (
        <div >
            <Header />
            <main className={styles.container}>
                <section className={styles.wrapper}>
                    <h1 className={styles.title}>Мои расходы</h1>
                    <section className={styles.left}>
                        <FilterSortPanel
                            filter={filter}
                            setFilter={setFilter}
                            sort={sort}
                            setSort={setSort}
                        />
                        <ExpenseTable
                            expenses={sorted}
                            onEdit={editExpense}
                            onDelete={deleteExpense}
                        />
                    </section>

                    <section className={styles.right}>
                        <AddExpenseForm
                            editedExpence={editedExpense}
                            onAdd={addExpense} />
                    </section>
                </section>

            </main>
        </div>
    );
}

export default App;
