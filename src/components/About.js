import User from "./User"
import UserClass from "./UserClass"

const About = () => {
    return (
        <div className="About">
            <h1>Hey About Page is here</h1>
            <User />
            <UserClass name={"Tamaghna"}/>
        </div>

    )
}

export default About