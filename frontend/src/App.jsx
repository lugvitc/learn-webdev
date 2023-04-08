import { useState, useEffect } from 'react';
import NameCard from './components/NameCard';

function App() {
    const [count, setCount] = useState(0); // useState is a 'hook'
    const URL = "http://127.0.0.1:5000";
    const people = [
        { id: 10, name: 'Samridh', age: 20 },
        { id: 11, name: 'Beleswar', age: 20 },
        { id: 12, name: 'Frodo', age: 80 }
    ];

	useEffect(() => {
        fetch(`${URL}/get-counter`).then((res) =>
            res.json().then((data) => {
                setCount(data.counter);
            })
        );
    }, []);

	async function incrementCounter() {
		const response = await fetch(`${URL}/increment-counter`, {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			}
		})
		if(response.ok) {
			console.log("Incremented");
		}
		window.location.reload(true);
	}

	async function decrementCounter() {
		const response = await fetch(`${URL}/decrement-counter`, {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			}
		})
		if(response.ok) {
			console.log("Decremented");
		}
		window.location.reload(true);
	}

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
            <button onClick={incrementCounter}> increment!</button>
            <br />
            <button onClick={decrementCounter}> decrement!</button>
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

