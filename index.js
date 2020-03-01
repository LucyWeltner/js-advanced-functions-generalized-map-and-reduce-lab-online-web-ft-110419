// Add your functions here


function map(array, callback) {
	let newArray = []
	for (let i = 0; i < array.length; i++) {
		newArray.push(callback(array[i]))
	}
	return newArray
}

function reduce(array, callback, start=0) {
	if (typeof(callback(array[0], start)) === "boolean"){
		start = true
	}
	for (let i = 0; i < array.length; i++){
		start = callback(array[i], start)
	}
	return start
}