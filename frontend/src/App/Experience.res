type experienceContent = {
    dates: string,
    title: string,
    organization: string,
    description: array<string>,
}

module ExperienceContent = {
    @react.component
    let make = (~experienceContent as {dates, title, organization, description}) => {
        <div className="experience-content">
            <h4 className="experience-content-dates">{dates->React.string}</h4>
            <h3 className="experience-content-title">{title->React.string}</h3>
            <h3 className="experience-content-organization"><em>{organization->React.string}</em></h3>
            {
                description
                ->Belt.Array.map(desc => <p className="experience-content-description">{desc->React.string}</p>)
                ->React.array
            }
            
        </div>
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
    <div id="experience-container">
        <h2>{"Experience"->React.string}</h2>
        {content
            -> Belt.Array.map(expContent => <ExperienceContent experienceContent=expContent />)
            ->React.array
        }
    </div>
}