"use client"
import React, { useEffect, useState } from "react";
import { fetchPodcasts } from "@/app/componentes/services/api";

const PodcastList = () => {
    const [podcasts, setPodcasts] = useState([]);

    useEffect(() => {
    const fetchData = async () => {
        try {
        const data = await fetchPodcasts();
        setPodcasts(data);
        } catch (error) {
          // Manejar el error según sea necesario
        }
    };

    fetchData();
    }, []); 


    return (
    <div>
        <h2>100</h2>
        <ul>
        {podcasts.map((podcast) => (
            <li key={podcast.id}>
                <img src={podcast.image} alt={podcast.title} />
                {podcast.title}
            </li>
        ))}
        </ul>
    </div>
    );
};

export default PodcastList;