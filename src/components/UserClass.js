import React from "react";
import UserContext from "../utils/UserContext";
class UserClass extends React.Component {
    constructor(props) {
        // super();
        super(props);
        this.state = {
            userInfo: {
                name: 'Tamaghna Ghosh',
                location: 'kolkata'
            }
        }
    }
    async componentDidMount() {
        this.timer = setInterval(() => {
            console.log('componentDidMount')
        }, 1000);
        const data = await fetch('https://api.github.com/users/TamaghnaGhosh');
        const json = await data.json();
        // console.log(json);
        this.setState({ userInfo: json });
    }
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }
    componentWillUnmount() {
        clearInterval(this.timer);
        console.log('componentWillUnmount');
    }

    render() {
        const { name, location, avatar_url } = this.state?.userInfo;
        return (
            <div className='user-card text-center'>
                {avatar_url ? <img className="ml-[830px]" src={avatar_url} alt="avatar_url" /> : <h3>Loading....</h3>}
                <h2>Name: {name}</h2>
                <h3>Location: {location} </h3>
                <h4>Gmail: ghoshtamaghna6991@gmail.com</h4>
                <UserContext.Consumer>
                    {
                        ({ loggedInUser }) => <h1 className="font-bold">{loggedInUser}</h1>
                    }
                </UserContext.Consumer>
            </div>
        )
    }
}
export default UserClass;