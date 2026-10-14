import Header from './components/Header'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Resources from './components/Resources'
import Footer from './components/Footer'

const skills = [
  'HTML: структура документа, семантичні теги, списки та посилання.',
  'React: компоненти, JSX і передавання даних через props.',
  'Git: відстеження змін і створення комітів.',
  'Chrome DevTools: аналіз мережі та захищеного з’єднання.',
]

export default function App() {
  return (
    <>
      <Header
        name="Хомишин Віталій Вікторович"
        role="Студент групи КБ-208 · Кібербезпека та вебтехнології"
      />
      <main>
        <About />
        <Education />
        <Experience />
        <Skills items={skills} />
        <Resources />
      </main>
      <Footer />
    </>
  )
}
