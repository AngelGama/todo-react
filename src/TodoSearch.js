import React from "react";
import './TodoSearch.css'

function TodoSearch() {

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
    };

    return (
        <input
            className="TodoSearch"
            placeholder="¿Qué tienes en mente?"
            onChange={onSearchValueChange}
        />
    );
}

export { TodoSearch };