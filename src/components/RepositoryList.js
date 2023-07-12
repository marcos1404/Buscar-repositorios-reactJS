import { useState } from "react";
import { useEffect } from "react";

import RepositoryItem from "./RepositoryItem";

import '../styles/repositories.scss';

export default function RepositoryList() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
        console.log(repositories)
    }, [])

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                {
                    repositories.map(repository => {
                        return <RepositoryItem repository={repository}/>
                    })
                }
            
            </ul>
        </section>

    );
}