$('document').ready(function() {

	var select = document.getElementById("val");
	var bool = 0;

	$('#generer').click(function() {
		$('.citation').html(startCitations(select.selectedIndex + 1));
		if (bool === 0) {
			$('.citation').animate({
        		left: '+=20px',
    			})
			console.log("test");
			bool += 1;
		}
		else {
			$('.citation').animate({
        		left: '-=20px',
    			})
			bool -= 1;
		}
	});

	

	function getRandomArbitrary(min, max) {
  	return Math.random() * (max - min) + min;
	}

	function setCharAt(str, index, chr) {
	    if(index > str.length - 1) return str;
	    	return (str.substr(0,index) + chr + str.substr(index + 1));
	}

	function getFirstWord() {
		var firstWord = ["Avec ", "Considérant ", "Où que nous mène ", "Eu égard à ", "Vu ", "En ce qui concerne ", "Dans le cas particulier de "]
		var i = parseInt(getRandomArbitrary(1, 7))
		return (firstWord[i])
	}

	function getSecondWord() {
		var firstWord = ["la restriction", "l'orientation ", "la crise ", "l'inertie ", "la difficulté ", "l'austérité ", "la dégradation "]
		var i = parseInt(getRandomArbitrary(1, 7))
		return (firstWord[i])
	}

	function getThirdWord() {
		var firstWord = ["présente ", "actuelle ", "générale ", "induite ", "conjoncturelle ", "observée ", "contextuelle "]
		var i = parseInt(getRandomArbitrary(1, 7))
		return (firstWord[i])
	}

	function getFourthWord() {
		var firstWord = ["il faut ", "il faut de toute urgence ", "il est préférable d'", "il serait intéressant d'", "il ne faut pas négliger d'", "on ne peut se passer d'", "il est nécessaire d'"]
		var i = parseInt(getRandomArbitrary(1, 7))
		return (firstWord[i])
	}

	function getFifthWord() {
		var firstWord = ["étudier ", "examiner ", "favoriser ", "prendre en considération ", "anticiper ", "imaginer ", "uniformiser "]
		var i = parseInt(getRandomArbitrary(1, 7))
		return (firstWord[i])
	}

	function getSixthWord() {
		var firstWord = ["toutes les ", "chacune des ", "la majorité des ", "la simultanéité des ", "l'ensemble des ", "la somme des ", "la totalité des "]
		var i = parseInt(getRandomArbitrary(1, 7))
		return (firstWord[i])
	}

	function getSeventhWord() {
		var firstWord = ["solutions ", "issues ", "problématiques ", "voies ", "alternatives ", "organisations matricielles ", "améliorations "]
		var i = parseInt(getRandomArbitrary(1, 7))
		return (firstWord[i])
	}

	function getEighthWord() {
		var firstWord = ["imaginables", "possibles", "s'offrant à nous", "de bon sens", "envisageables", "éventuelles", "réalisables"]
		var i = parseInt(getRandomArbitrary(1, 7))
		return (firstWord[i])
	}

	function getNinthWord() {
		var firstWord = ["à long terme.", "pour longtemps.", "à l'avenir.", "pour le futur.", "depuis longtemps.", "à court terme.", "rapidement."]
		var i = parseInt(getRandomArbitrary(1, 7))
		return (firstWord[i])
	}

	function eOrApostrophe(beginning, end) {
		if (beginning[beginning.length - 1] == "'" && (end[0] != 'a' &&  end[0] != 'e' && end[0] != 'i' && end[0] != 'o' && end[0] != 'u' && end[0] != 'y')) {
			beginning = setCharAt(beginning, beginning.length - 1, 'e')
			beginning = beginning + ' ';
		}
		return (beginning)
	}

	function getCitation() {
		var texte = getFirstWord() + getSecondWord() + getThirdWord() + getFourthWord();
		var end = getFifthWord();
		texte = eOrApostrophe(texte, end) + end + getSixthWord() + getSeventhWord() + getEighthWord() + ", " + getNinthWord() + "\n";
		return (texte);
	}

	function startCitations(val) {
		var total = "";
		for (var i = 0; i < val; i++)
			total = total + getCitation();
		total = total.replace(/\n/g, "<br /><br />");
		return (total);
	}

});