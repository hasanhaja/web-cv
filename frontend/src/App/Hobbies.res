@react.component
let make = () => {

    let content = ["
            I enjoy spending most of time programming, and I work on projects in a variety of areas. I like learning about web technologies and I have been experiementing with WebAssembly and Progressive Web Apps. 
    ", 
    "
            In my free time, I enjoy listening to Tech podcasts like 'CppCast', 'Corecursive' by Adam Gordon Bell, 'Javascript Jabber', 'Talking Kotlin' by Hari Hadidi or 'New Rustacean'. I'm passionate about writing and developing my blog right now. Get in touch if you want to find out more.  

    "]

    <div id="hobbies-container" className="container">
        <h2>{"Hobbies"->React.string}</h2>
        {
            content
            ->Belt.Array.map(paragraph=><p className="hobbies-content">{paragraph->React.string}</p>)
            ->React.array
        }
    </div>
}