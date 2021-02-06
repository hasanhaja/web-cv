type educationContent = {
    dates: string,
    title: string,
    institute: string,
    description: array<string>,
} 

module EducationContent = {
    @react.component
    let make = (~educationContent as {dates, title, institute, description}) => {
        
        let (state, setState) = React.useState(() => false)

        <Card>
            <div className="education-content">
                <h4 className="education-content-dates">{dates->React.string}</h4>
                <h3 className="education-content-title">{title->React.string}</h3>
                <h3 className="education-content-institute"><em>{institute->React.string}</em></h3>
                // TODO add a link to toggle
                {state ?
                    {
                        description
                        ->Belt.Array.map(desc => <p className="education-content-description">{desc->React.string}</p>)
                        ->React.array
                    } : {React.null}
                }
                <button className="content-expansion-toggle" onClick={_ => setState(prev => !prev)}>{"+ View details" -> React.string}</button>
            </div>
        </Card>
    }
}

@react.component
let make = () => {
    let cranfield = {dates: "2019 to 2020", title: "MSc Computational and Software Techniques in Engineering (Computer and Machine Vision)", institute: "Cranfield University, UK", description: ["Thesis: Evaluation of 2D Semantic Segmentation Methods for Scene Understanding for Autonomous Driving Applications.", "Group Project: Detecting COVID-19 in Chest X-Ray images."]}

    let brighton = {dates: "2014 to 2019", title: "MEng Mechanical Engineering", institute: "University of Brighton, UK", description: ["Key modules: Advanced Design, Product Innovation and Management, Renewable Technologies (PV and Biomass)"]}

    let content = [cranfield, brighton]

    <div id="education-container" className="container">
        <h2>{"Education"->React.string}</h2>
        {content
            -> Belt.Array.map(eduContent => <EducationContent educationContent=eduContent />)
            ->React.array
        }
    </div>
}