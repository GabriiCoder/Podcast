import React from "react";

const Filtro = ({ filterText, onFilterChange }) => {
    return (
        <div>
            <input 
            type="text"
            placeholder="Filter podcasts"
            value={filterText}
            onChange={(e) => onFilterChange(e.target.value)} />
        </div>
    );
};

export default Filtro;