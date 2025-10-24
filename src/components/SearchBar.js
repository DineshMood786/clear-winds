import React, { useEffect, useState }  from "react";

function SearchBar({value, onChange}) {

    const [searchValue, setSearchValue] = useState(value);

    const handleChange = (e) => setSearchValue(e.target.value);

    useEffect(() => {

     const timeoutId = setTimeout(() => {
      onChange(searchValue);
    }, 500);


    return () => clearTimeout(timeoutId);

    }, [searchValue, onChange]);

    

    return(
        <div>

            <input
            
             type="text"
             placeholder="Search products"
             value={searchValue}
             onChange={handleChange}
            />
        </div>
    )
}

export default SearchBar;