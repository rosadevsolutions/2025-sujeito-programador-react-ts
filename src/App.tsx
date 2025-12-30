import "./App.css";
import { Aluno } from "./components/Aluno/aluno";
import { Header } from "./components/Header/header";

export default function App() {
  return (
    <>
      <Header title="React + TypeScript"/>
      <main className="main wrapper">
        <div className="alunos wrapper">
          <div className="alunos content">
            <Aluno
              nome="Victor"
              sobrenome="Gaefke"
              idade={50}
            />
            <Aluno
              nome="Romulo"
              sobrenome="Rosa"
              idade={45}
            />
            <Aluno
              nome="Ricardo"
              sobrenome="Gaefke"
              idade={50}
            />
            <Aluno
              nome="Renato"
              sobrenome="Nogueira"
              idade={55}
            />
          </div>
        </div>
      </main>
    </>
  )
}
