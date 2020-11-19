@react.component
let make = () => {
    let src = "../../images/profile_pic.jpg"
    let alt = "Profile picture of a handsome devil."
    let (width, height) = (400->Belt.Int.toString, 400->Belt.Int.toString)
    <div id="hero-container">
        <img src alt width height id="profile-pic"/>
        <h2 id="greeting">{"Hi, I'm Hasan!"->React.string}</h2>
            // TODO location component
        <h4 id="location">{"Dubai"->React.string}</h4>
    </div>
}