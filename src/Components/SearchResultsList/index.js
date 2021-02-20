import SearchResultSingle from '../../Components/SearchResultSingle';

const SearchResultsList = () => {

    const resultsDummy = [
        {
            label: "compost",
            address: "1st and 1st",
            distance: "1 mile away",
            hours: "10 a.m. to 5 p.m."
        },        {
            label: "compost",
            address: "1st and 2nd",
            distance: "2 miles away",
            hours: "10 a.m. to 5 p.m."
        },
        {
            label: "compost",
            address: "1st and 3rd",
            distance: "3 miles away",
            hours: "10 a.m. to 5 p.m."
        },
        {
            label: "compost",
            address: "1st and 4th",
            distance: "4 miles away",
            hours: "10 a.m. to 5 p.m."
        },
        {
            label: "compost",
            address: "1st and 5th",
            distance: "5 miles away",
            hours: "10 a.m. to 5 p.m."
        }
    ];

    return (
        <div className="SearchResultsList" style={{overflowY: 'scroll', height: 600, width: 300}}>
            {
                resultsDummy.map((result, index) => {
                    return (
                        <SearchResultSingle 
                            label={result.label}
                            address={result.address}
                            distance={result.distance}
                            hours={result.hours}
                            key={index}
                        />
                    )
                })
            }
        </div>
    );
}

export default SearchResultsList;