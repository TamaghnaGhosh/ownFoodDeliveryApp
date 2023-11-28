import React, { useState, useEffect } from 'react'

const User = (props) => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        //definitions
        //useEffect is a React Hook that lets you synchronize a component with an external system.
        const timer = setInterval(() => {
            console.log("componentDidMount/NAMASTE REACT OP")
        }, 1000);
        return () => {
            console.log("componentWillUnmount/useEffect Return");
            clearInterval(timer);
        }
    }, [])

    return (
        <div className='user-card'>
            <h2>Name:{props.name}</h2>
            <h1>count: {count}</h1>
            <h3>Location: Kolkata </h3>
            <h4>Gmail: ghoshtamaghna6991@gmail.com</h4>
            <button className="px-1 py-1 bg-slate-400 m-4 rounded-lg text-zinc-50" onClick={() => setCount(count + 1)}>Count Increase</button>
            <button className="px-1 py-1 bg-slate-400 m-4 rounded-lg text-zinc-50" onClick={() => setCount(count > 0 ? count - 1 : 0)}>Count Decrease</button>
        </div>
    )
}

export default User