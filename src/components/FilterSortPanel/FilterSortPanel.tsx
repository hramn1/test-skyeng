import styles from "./FilterSortPanel.module.scss";
import type {Props} from "../../types.ts";
import {categoriesFilter} from "../../mock.ts";




export default function FilterSortPanel({ filter, setFilter, sort, setSort }: Props) {
    return (
        <div className={styles.panel}>
            <h2>Таблица расходов</h2>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    {categoriesFilter.map((cat) => (
                        <option key={cat}>{cat}</option>
                    ))}
                </select>
            <label>
                Сортировать по
                <select className={styles.sort} value={sort} onChange={(e) => setSort(e.target.value)}>
                    <option value="дате"> дате</option>
                    <option value="сумме"> сумме</option>
                </select>
            </label>
        </div>
    );
}
