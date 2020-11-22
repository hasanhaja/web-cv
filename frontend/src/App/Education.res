type educationContent = {
    dates: string,
    institute: string,
    description: string,
}

module EducationContent = {
    @react.component
    let make = (~educationContent as {dates, institute, description}) => {
        <div className="education-content">
            <h4>{dates->React.string}</h4>
            <h3>{institute->React.string}</h3>
            <p>{description->React.string}</p>
        </div>
    }
}

@react.component
let make = () => {
    let cranfield = {dates: "2019 to 2020", institute: "Cranfield University", description: "Thesis: Blah Blah Blah Blah Blah Blah Blah Blah"}

    let brighton = {dates: "2014 to 2019", institute: "University of Brighton", description: "Thesis: Blah Blah Blah Blah Blah Blah Blah Blah"}

    let content = [cranfield, brighton]

    <div id="education-container">
        <h2>{"Education"->React.string}</h2>
        {content
            -> Belt.Array.map(eduContent => <EducationContent educationContent=eduContent />)
            ->React.array
        }
    </div>
}