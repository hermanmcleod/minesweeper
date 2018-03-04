const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
	let board = [];
	for (let rows = 0; rows < numberOfRows; rows++) {
		let row = [];
		for (let columns = 0; columns < numberOfColumns; columns++) {
			row.push(' ');
		};
		board.push(row);
	};
	return board;
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
	let board = [];
	for (let rows = 0; rows < numberOfRows; rows++) {
		let row = [];
		for (let columns = 0; columns < numberOfColumns; columns++) {
			row.push(null);
		};
		board.push(row);
	};
	return board;
}

console.log(generatePlayerBoard(5,6));