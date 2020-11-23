@react.component
let make = () => {
    <header>
        <div id="header-content">
            // this becomes the Logo
            <h1 className="flex-logo">{"Hasan"->React.string}</h1>
            // <button className="hamburger-button">{j`\u2630`->React.string}</button>
        </div>
    </header>
}