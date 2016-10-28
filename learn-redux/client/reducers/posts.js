function posts(state =[], action) {

	const i = action.index;
	switch(action.type) {
		case 'INCREMENT_LIKES':
			console.log("Incrementing likes...");
			return [
			...state.slice(0,i),
			{...state[i], likes: state[i].likes + 1},
			...state.slice(i+1)
			]
	}
	return state
}

export default posts;