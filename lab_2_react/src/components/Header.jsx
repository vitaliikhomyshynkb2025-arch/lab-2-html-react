export default function Header({ name, role }) {
  return (
    <header>
    <h1>{name}</h1>
    <p>{role}</p>
    <nav aria-label="Розділи резюме">
      <a href="#about">Про мене</a>{' · '}
      <a href="#education">Освіта</a>{' · '}
      <a href="#experience">Навчальний досвід</a>{' · '}
      <a href="#skills">Навички</a>{' · '}
      <a href="#resources">Ресурси</a>
    </nav>
  </header>
  )
}
