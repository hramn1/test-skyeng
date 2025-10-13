import type {Expense} from "./types.ts";

export const initialExpenses: Expense[] = [
    { id: 1, description: "Пятерочка", category: "Еда", date: "2024-07-03", amount: 3500 },
    { id: 2, description: "Яндекс Такси", category: "Транспорт", date: "2024-07-03", amount: 730 },
    { id: 3, description: "Аптека Вита", category: "Другое", date: "2024-07-03", amount: 1200 },
    { id: 4, description: "Бургер Кинг", category: "Еда", date: "2024-07-03", amount: 950 },
    { id: 5, description: "Деливери", category: "Еда", date: "2024-07-02", amount: 1320 },
    { id: 6, description: "Кофейня №1", category: "Еда", date: "2024-07-02", amount: 400 },
    { id: 7, description: "Бильярд", category: "Развлечения", date: "2024-06-29", amount: 600 },
    { id: 8, description: "Перекресток", category: "Еда", date: "2024-06-29", amount: 2360 },
    { id: 9, description: "Лукойл", category: "Транспорт", date: "2024-06-29", amount: 1000 },
    { id: 10, description: "Летуаль", category: "Другое", date: "2024-06-29", amount: 4300 },
];
export const categories = {
    food: "Еда",
    transport: "Транспорт",
    housing: "Жилье",
    entertainment: "Развлечения",
    education: "Образование",
    other: "Другое",
};
export const categoriesFilter = ["Все", "Еда", "Транспорт", "Жилье", "Развлечения", "Образование", "Другое"];
