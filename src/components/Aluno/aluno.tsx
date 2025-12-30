import './aluno.css';

interface AlunoProps{
  nome: string;
  sobrenome?: string;
  idade: number;
}

export function Aluno({nome, sobrenome, idade}: AlunoProps) {
  return (
    <>
      <div className="aluno wrapper">
        <h3 className="aluno nome">{nome} {sobrenome}</h3>
        <p className="aluno idade"><span>Idade: </span>{idade} anos</p>
      </div>
    </>
  )
}
