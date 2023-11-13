import React, { useState } from 'react'

const User = (props) => {
    const [count, setCount] = useState(0)
    return (
        <div className='user-card'>
            <h2>Name:{props.name}</h2>
            <h1>count: {count}</h1>
            <h3>Location: Kolkata </h3>
            <h4>Gmail: ghoshtamaghna6991@gmail.com</h4>
            <button onClick={() => setCount(count + 1)}>Count Increase</button>
            <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>Count Decrease</button>
        </div>
    )
}

export default User