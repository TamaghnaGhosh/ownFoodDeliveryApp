import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        // super();
        super(props);
        this.state = {

        }
        console.log(this.props)
    }

    render() {
        return (
            <div className='user-card'>
                <h2>Name: {this.props.name}</h2>
                <h3>Location: Kolkata</h3>
                <h4>Gmail: ghoshtamaghna6991@gmail.com</h4>
            </div>
        )
    }
}
export default UserClass;