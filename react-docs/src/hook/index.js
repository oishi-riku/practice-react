import React, { useState, useEffect } from 'react';

export const Hook = () => {
    const [count, setCount] = useState(10);

    useEffect(() => {
        document.title = `you click ${count}`;
    });

    return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </div>
    )
}
