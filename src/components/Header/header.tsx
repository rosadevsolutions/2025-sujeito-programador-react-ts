import './header.css';

interface HeaderProps{
  title: string;
}

export function Header({title}: HeaderProps) {
  return (
    <>
      <header className="header wrapper">
        <h2 className="header title">{title}</h2>
      </header>
    </>
  )
}
