export interface Expense {
    id: number;
    description: string;
    category: string;
    date: string;
    amount: number;
}
export interface Props {
    filter: string;
    setFilter: (v: string) => void;
    sort: string;
    setSort: (v: string) => void;
}
export interface ITableProps {
    expenses: Expense[];
    onEdit: (expense: Expense) => void;
    onDelete: (id: number) => void;
}
