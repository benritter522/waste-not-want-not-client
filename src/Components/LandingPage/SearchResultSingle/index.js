const SearchResultSingle = (props) => {
    const { label, address, distance, hours } = props;

    return (
        <div className="SearchResultSingle">
            <h3>{label}</h3>
            <p>{address}</p>
            <p>{distance}</p>
            <p>{hours}</p>
        </div>
    );
}

export default SearchResultSingle;