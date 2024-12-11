import { useState } from 'react';
import Button from './components/button/Button';
import Cards from './components/Card/Card';
import { USERS } from './constants/users';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	// console.log(USERS[2]);

	const [value, setValue] = useState(0);

	const nextDisabled = value === USERS.length - 1;
	const previousDisabled = value === 0;

	return (
		<div>
			<GlobalStyles />
			<Cards user={USERS[value]} />
			<Button
				action={() => decrement(value, setValue)}
				color='steelblue'
				disabled={previousDisabled}
			>
				Previous
			</Button>
			<Button
				action={() => increment(value, setValue)}
				color='steelblue'
				disabled={nextDisabled}
			>
				Next
			</Button>
		</div>
	);
};

const increment = (value, setValue) => {
	setValue(value + 1);
};

const decrement = (value, setValue) => {
	setValue(value - 1);
};

export default App;
