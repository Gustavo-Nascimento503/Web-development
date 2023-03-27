import React from "react";
import img from './../img/witcher.jpg'
import img2 from './../img/outliers.jpg'
import img3 from './../img/ac.jpg'
import img4 from './../img/star wars.jpg'
import img5 from './../img/interestelar.jpg'
import img6 from './../img/guerra civil.jpg'

export default function Livros(props){


    return(
        <main>
            <article id="art1">
                <section>
                    <h3>{props.estoque[0]}</h3>
                    <img src={img} />
                    <p>
                        R$150,00 <br></br>
                        <input type={"number"} className="number"></input> <br></br>
                        <input type={"submit"} value="Comprar" id="idcomprar"></input>
                    </p>
                </section>

                <section>
                    <h3>{props.estoque[1]}</h3>
                    <img src={img2} />
                    <p>
                        R$150,00 <br></br>
                        <input type={"number"} className="number"></input> <br></br>
                        <input type={"submit"} value="Comprar" id="idcomprar"></input>
                    </p>
                </section>

                <section>
                    <h3>{props.estoque[2]}</h3>
                    <img src={img3} />
                    <p>
                        R$150,00 <br></br>
                        <input type={"number"} className="number"></input> <br></br>
                        <input type={"submit"} value="Comprar" id="idcomprar"></input>
                    </p>
                </section>
            </article>

            <article id="art2">
                <section>
                    <h3>{props.estoque[3]}</h3>
                    <img src={img4} />
                    <p>
                        R$150,00 <br></br>
                        <input type={"number"} className="number"></input> <br></br>
                        <input type={"submit"} value="Comprar" id="idcomprar"></input>
                    </p>
                </section>

                <section>
                    <h3>{props.estoque[4]}</h3>
                    <img src={img5} />
                    <p>
                        R$150,00 <br></br>
                        <input type={"number"} className="number"></input> <br></br>
                        <input type={"submit"} value="Comprar" id="idcomprar"></input>
                    </p>
                </section>

                <section>
                    <h3>{props.estoque[5]}</h3>
                    <img src={img6} />
                    <p>
                        R$150,00 <br></br>
                        <input type={"number"} className="number"></input> <br></br>
                        <input type={"submit"} value="Comprar" id="idcomprar"></input>
                    </p>
                </section>
            </article>
        </main>
    )
}