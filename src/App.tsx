import { useState } from "react";
import Header from "./components/Header/Header";
import ExpenseTable from "./components/ExpenseTable/ExpenseTable";
import AddExpenseForm from "./components/AddExpenseForm/AddExpenseForm";
import FilterSortPanel from "./components/FilterSortPanel/FilterSortPanel";
import styles from "./App.module.scss";
import {initialExpenses} from "./mock.ts";

export interface Expense {
    id: number;
    description: string;
    category: string;
    date: string;
    amount: number;
}



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
            <main className={styles.container}>
                <section className={styles.left}>
                    <FilterSortPanel
                        filter={filter}
                        setFilter={setFilter}
                        sort={sort}
                        setSort={setSort}
                    />
                    <ExpenseTable expenses={sorted} />
                </section>

                <section className={styles.right}>
                    <AddExpenseForm onAdd={addExpense} />
                </section>
            </main>
        </div>
    );
}

export default App;
