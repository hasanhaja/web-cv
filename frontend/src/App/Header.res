@react.component
let make = () => {
    <header>
        <div id="header-content">
            // this becomes the Logo
            <h1 className="flex-logo">{"H"->React.string}</h1>
            <button className="nav-button flex-nav">{j`\u2630`->React.string}</button>
        </div>
    </header>
}