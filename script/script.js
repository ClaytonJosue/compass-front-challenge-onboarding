const slides = document.querySelectorAll(".slide");
const img1 = document.querySelector(".first");
const btnContinue = document.querySelector(".continue");
const btnSkip = document.querySelector(".skip");
const radio1 = document.querySelector(".bg-btn1");
const radio2 = document.querySelector(".bg-btn2");
const radio3 = document.querySelector(".bg-btn3");
let counter = '0'

radio1.setAttribute('style', 'background-color: #92E3A9; border: 2px solid #92E3A9;')

next = () => {
	if (counter === '0') {
		img1.setAttribute('style', 'margin-left: -33%;')
		radio1.setAttribute('style', 'background-color: white;')
		radio2.setAttribute('style', 'background-color: #92E3A9; border: 2px solid #92E3A9;')
		counter = '1'
	} else if (counter === '1') {
		img1.setAttribute('style', 'margin-left: -66%;')
		radio2.setAttribute('style', 'background-color: white;')
		radio3.setAttribute('style', 'background-color: #92E3A9; border: 2px solid #92E3A9;')
		btnContinue.innerHTML = 'Get started'
		btnSkip.setAttribute('style', 'display: none;')
		counter = '2'
	}
}

skip = () => {
	if (counter === '0' || counter === '1') {
		img1.setAttribute('style', 'margin-left: -66%;')
		radio1.setAttribute('style', 'background-color: white;')
		radio2.setAttribute('style', 'background-color: white;')
		radio3.setAttribute('style', 'background-color: #92E3A9; border: 2px solid #92E3A9;')
		btnContinue.innerHTML = "Get started"
		btnSkip.setAttribute('style', 'display:none')
		counter = '1'
	}

}

slideOne = () => {
	if (counter === '1' || counter === '2') {
		img1.setAttribute('style', 'margin-left: 0;')
		radio1.setAttribute('style', 'background-color: #92E3A9; border: 2px solid #92E3A9;')
		radio2.setAttribute('style', 'background-color: white;')
		radio3.setAttribute('style', 'background-color: white;')
		btnContinue.innerHTML = 'Continue'
		btnSkip.setAttribute('style', 'display: block;')
		counter = '0'
	}
}

slideTwo = () => {
	if (counter === '0' || counter === '2' || counter === '1') {
		img1.setAttribute('style', 'margin-left: -33%;')
		radio1.setAttribute('style', 'background-color: #FFF;')
		radio2.setAttribute('style', 'background-color: #92E3A9; border: 2px solid #92E3A9;')
		radio3.setAttribute('style', 'background-color: #FFF;')
		btnContinue.innerHTML = 'Continue'
		btnSkip.setAttribute('style', 'display: block;')
		counter = '1'
	}
}

slideThree = () => {
	if (counter === '0' || counter === '2' || counter === '1') {
		img1.setAttribute('style', 'margin-left: -66%;')
		radio1.setAttribute('style', 'background-color: #FFF;')
		radio2.setAttribute('style', 'background-color: #FFF;')
		radio3.setAttribute('style', 'background-color: #92E3A9; border: 2px solid #92E3A9;')
		btnContinue.innerHTML = 'Get started'
		btnSkip.setAttribute('style', 'display: none;')
		counter = '2'
	}
}