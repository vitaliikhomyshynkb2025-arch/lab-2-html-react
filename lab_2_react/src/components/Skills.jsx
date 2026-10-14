export default function Skills({ items }) {
  return (
    <section id="skills" aria-labelledby="skills-title">
      <h2 id="skills-title">Навички, які опановую</h2>
      <ul>
        {items.map((skill) => <li key={skill}>{skill}</li>)}
      </ul>
    </section>
  )
}
