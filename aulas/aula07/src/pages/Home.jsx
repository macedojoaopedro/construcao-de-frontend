import { useEffect, useState } from "react";
import Menu from "../components/Menu";

function Home() {
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(()=>{
            setCarregando(false);
    }, 3000);
    }, []);
    
  return (
    <>
      <header>
        <h1>Aluno Online</h1>
      </header>
      <main>
        <Menu />
        <section>
          <h2>Página Inicial</h2>
          {carregando
          ? <h3>Aguarde...</h3>
        
          : <div ClassName="card-grid">
            <article>
                <h3>Mural de avisos</h3>
                <ul>
                    <li></li>
                </ul>
            </article>
            <article>
                <h3>Agenda Academica</h3>
                <ul>
                    <li></li>
                </ul>
            </article>
            <article>
                <h3>Historico de notas</h3>
                <ul>
                    <li></li>
                </ul>
            </article>
            <article>
                <h3>Historico de faltas</h3>
                <ul>
                    <li></li>
                </ul>
            </article>
          </div>}
        </section>
      </main>
    </>
  );
}

export default Home;