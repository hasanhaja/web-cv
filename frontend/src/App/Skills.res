@react.component
let make = () => {
    // let src = "../../images/logos/javascript.png"
    // let alt = "JavaScript Logo"
    // let (width, height) = (100->Belt.Int.toString, 100->Belt.Int.toString)

    let skills = ["JavaScript", "HTML", "CSS", "Java", "Kotlin", "Python"]

    let secondarySkills = ["ReasonML/ReScript", "Rust", "MATLAB", "TypeScript", "ExpressJS", "Tensorflow/TensorflowJS", "Pytorch", "ArrowKT", "KTor"]

    <div id="skills-container" className="container">
        <h2 id="skills-heading">{"Skills"->React.string}</h2>
        // <Card id="js-skill">
        //     <img src alt width height/>
        //     <h3>{"JavaScript"->React.string}</h3>
        // </Card>
        <ul className="skills-content-list" id="skills-primary">
            {
                skills
                ->Belt.Array.map(skill => <li>{skill->React.string}</li>)
                ->React.array
            }
        </ul>
        <ul className="skills-content-list" id="skills-secondary">
            {
                secondarySkills
                ->Belt.Array.map(skill => <li>{skill->React.string}</li>)
                ->React.array
            }
        </ul>
    </div>
}