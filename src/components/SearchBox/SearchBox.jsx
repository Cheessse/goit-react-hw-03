import css from './SearchBox.module.css'

const SearchBox = ({ handleChangeSearch, value }) => {
    return (
        <>
        <label className={css.searchBoxDiv}>
        <p>Find contacts by name</p>
        <input
        type="text"
        placeholder="Search..."
        value={value}
        onChange={handleChangeSearch}
        className={css.searchInput}
        />
        </label>
        </>
    )
}

export default SearchBox