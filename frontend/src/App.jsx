import { useState } from 'react';
import NameCard from './components/NameCard';

function App() {
    const [count, setCount] = useState(0); // useState is a 'hook'
    const people = [
        { id: 10, name: 'Samridh', age: 20 },
        { id: 11, name: 'Beleswar', age: 20 },
        { id: 12, name: 'Frodo', age: 80 }
    ];
    return (
        <div id='abc' className='abcabc'>
            {people
                .filter(({ age }) => age < 50)
                .map(({ id, name, age }) => (
                    <NameCard
                        key={id} /* needs to be unique */
                        name={name}
                        age={age}
                    />
                ))}
            count: {count}
            <br />
            <button onClick={() => setCount(count + 1)}> increment!</button>
            <br />
            <button onClick={() => setCount(count - 1)}> decrement!</button>
        </div>
    );
}

export default App;

/*

component:
useState = use the 'count' variable from outside this compnent
setCount = change the external value; and rerun the component after changing it
.

react code:
count
*/

