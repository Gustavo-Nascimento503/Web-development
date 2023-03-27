import React from "react";

export default function Home(props){


    return(
        <>
        <header>
            <h1>{props.ti}</h1>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Livros</li>
                    <li>Produtos</li>
                </ul>
            </nav>
        </header>
        </>
    )
}