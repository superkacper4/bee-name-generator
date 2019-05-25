const btn = document.querySelector("button");
const nameDisplay = document.querySelector(".bee__name");
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const alphabetArray = [...alphabet];

const randName = () => {
	// const nameLength = Math.floor((Math.random()+1)*3);
	const nameLength = Math.floor(Math.random()*5+1);
	let name= "";

	for(let i=0; i<=nameLength; i++){
		let index = Math.floor(Math.random()*alphabetArray.length);
		name+=alphabetArray[index];
	}

	nameDisplay.innerHTML=`bee${name}`;

}



btn.addEventListener("click", randName);
