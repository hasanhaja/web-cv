type experienceContent = {
    dates: string,
    title: string,
    organization: string,
    description: array<string>,
}

module ExperienceContent = {
    @react.component
    let make = (~experienceContent as {dates, title, organization, description}) => {
        let (state, setState) = React.useState(() => false)

        <Card>
            <div className="experience-content">
                <h4 className="experience-content-dates">{dates->React.string}</h4>
                <h3 className="experience-content-title">{title->React.string}</h3>
                <h3 className="experience-content-organization"><em>{organization->React.string}</em></h3>
                {state ?
                    {
                    description
                    ->Belt.Array.map(desc => <p className="experience-content-description">{desc->React.string}</p>)
                    ->React.array
                    } : {React.null}
                }
                <button className="content-expansion-toggle" onClick={_ => setState(prev => !prev)}>{"+ View details"->React.string}</button>
            </div>
        </Card>
    }
}

@react.component
let make = () => {
    let eschmann = {
        dates: "2016 to 2017",
        title: "Product Support Engineer",
        organization: "Eschmann Equipment, UK",
        description: ["Project management: Carried out a risk assessment project of the operating table production line.", "Tool design: Designed tool to aid assembly of handsets more consistently in the production line."]
    }
    let content = [eschmann]
    <div id="experience-container" className="container">
        <h2>{"Experience"->React.string}</h2>
        {content
            -> Belt.Array.map(expContent => <ExperienceContent experienceContent=expContent />)
            ->React.array
        }
    </div>
}