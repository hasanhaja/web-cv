// TODO The footer can also be a more complex section.
@react.component
let make = () => {
    <div id="app">
        <Header />
        <Hero />
        <Skills />
        <Education />
        <Experience />
        <Hobbies />
        <Footer />
        // <footer>{j`${copy} 2020 Hasan Ali`->React.string}</footer>
    </div>
}