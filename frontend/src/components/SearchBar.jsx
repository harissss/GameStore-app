import './SearchBar.css'

function SearchBar() {
    return (
        <>
            <input
                type="text"
                placeholder="Search games..."
                className="search-input"
            />
        </>
    );
}

export default SearchBar;