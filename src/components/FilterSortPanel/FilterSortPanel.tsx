interface Props {
    filter: string;
    setFilter: (v: string) => void;
    sort: string;
    setSort: (v: string) => void;
}

const categories = ["Все", "Еда", "Транспорт", "Жилье", "Развлечения", "Образование", "Другое"];

export default function FilterSortPanel({ filter, setFilter, sort, setSort }: Props) {
    return (
        <div>
            <label>
                Фильтровать по категории:
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    {categories.map((cat) => (
                        <option key={cat}>{cat}</option>
                    ))}
                </select>
            </label>

            <label>
                Сортировать по:
                <select value={sort} onChange={(e) => setSort(e.target.value)}>
                    <option value="дате">дате</option>
                    <option value="сумме">сумме</option>
                </select>
            </label>
        </div>
    );
}
