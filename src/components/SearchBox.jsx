import { BsSearch } from "react-icons/bs";

import styles from "./SearchBox.module.css";

function SearchBox({ search, setSearch, serachHandler }) {
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search Title..."
        value={search}
        onChange={(e) => setSearch(e.target.value).toLowerCase()}
      />
      <button onClick={serachHandler}>
        <BsSearch />
      </button>
    </div>
  );
}

export default SearchBox;
