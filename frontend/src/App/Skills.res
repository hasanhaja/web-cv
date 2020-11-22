@react.component
let make = () => {
    // let src = "../../images/logos/javascript.png"
    // let alt = "JavaScript Logo"
    // let (width, height) = (100->Belt.Int.toString, 100->Belt.Int.toString)

    let skills = ["JavaScript", "HTML", "CSS", "Java", "Kotlin", "Python", "ReasonML"]

    <div id="skills-container">
        <h2>{"Skills"->React.string}</h2>
        // <Card id="js-skill">
        //     <img src alt width height/>
        //     <h3>{"JavaScript"->React.string}</h3>
        // </Card>
        <ul>
            {
                skills
                ->Belt.Array.map(skill => <li>{skill->React.string}</li>)
                ->React.array
            }
        </ul>
    </div>
}