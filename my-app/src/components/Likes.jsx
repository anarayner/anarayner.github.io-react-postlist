import React, {useState} from 'react';

const Likes = () => {

    // this is an array, first param is our element, second is function for changing a state of that element
    const [likes, setLikes] = useState(0);
    const [value, setValue] = useState("Input TEXT");

    function increment() {
        setLikes(likes + 1);
    }

    function decrement() {
        setLikes(likes - 1);
    }

    function clear() {
        setValue("");
    }
    return (
        <div>
            <h1>{likes}</h1>
            <h1>{value}</h1>
            <input
                type="text"
                value={value}
                // function for tracking changes in the input
                onChange={(event) => setValue (event.target.value)}
            />
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={clear}>Clear</button>
        </div>
    );
};

export default Likes;
