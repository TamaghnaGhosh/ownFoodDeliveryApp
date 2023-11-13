import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        // super();
        super(props);
        this.state = {
            count: 0
        }
        console.log("Child Constructor")
    }

    componentDidMount() {
        console.log("child component Did Mount");
    }

    render() {
        const { name } = this.props;
        const count = this.state.count;

        console.log("Child Render")

        return (
            <div className='user-card'>
                <h2>Name: {name}</h2>
                <h1>count: {count}</h1>
                <h3>Location: Kolkata </h3>
                <h4>Gmail: ghoshtamaghna6991@gmail.com</h4>
                <button onClick={() =>
                    //Never update state variables directly
                    // this.state.count = this.state.count + 1;
                    this.setState({ count: count + 1 })}
                >Count Increase</button>
                <button onClick={() => this.setState({ count: count > 0 ? count - 1 : 0 })}>Count Decrease</button>
            </div>
        )
    }
}
export default UserClass;