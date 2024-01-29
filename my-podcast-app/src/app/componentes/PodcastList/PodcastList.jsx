"use client"
import React, { useEffect, useState } from "react";
import { fetchPodcasts } from "@/app/componentes/services/api";
import Filtro from "../filtrer/filtro";

const PodcastList = () => {
    const [podcasts, setPodcasts] = useState([]);
    const [filterText, setFilterText] = useState('');

    useEffect(() => {
    const fetchData = async () => {
        try {
        const data = await fetchPodcasts();
        setPodcasts(data);
        } catch (error) { }
    };

    fetchData();
    }, []); 

    const filteredPodacasts = podcasts.filter((podcast) => {
    const title = podcast?.title?.toLowerCase();
    const author = podcast?.author?.toLowerCase();


    return (
        title?.includes(filterText.toLowerCase()) ||
        author?.includes(filterText.toLowerCase())
    );
    });


    
    return (
    <div>
        <h2>100</h2>
        <Filtro filterText={filterText} onFilterChange={setFilterText} />
        <ul>
        {filteredPodacasts.map(({ id, image, title, author }) => (
            <li key={id}>
                <img src={image} alt={title} />
                {title} by {author}
            </li>
        ))}
        </ul>
    </div>
    );
};

export default PodcastList;