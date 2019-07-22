$('document').ready(function() {

	var select = document.getElementById("val");
	var theme = document.getElementById("theme");
	var bool = 0;

	$('#generer').click(function() {
		$('.citation').html(startCitations(select.selectedIndex + 1, theme.selectedIndex));
		if (bool === 0) {
			$('.citation').animate({
        		left: '+=20px',
    			})
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

	function eOrApostrophe(beginning, end) {
		if (beginning[beginning.length - 1] == "'" && (end[0] != 'a' &&  end[0] != 'e' && end[0] != 'i' && end[0] != 'o' && end[0] != 'u' && end[0] != 'y')) {
			beginning = setCharAt(beginning, beginning.length - 1, 'e')
			beginning = beginning + ' ';
		}
		return (beginning)
	}

	function avengersThemeTab() {
		var tab = [
			["Iron Man ", "Captain America ", "Thor ", "Loki ", "Jarvis ", "Oeil-de-faucon ", "Bruce Banner "],
			["aime ", "deteste ", "apprecie ", "prefere ", "adore ", "ignore "],
			["manger ", "vendre ", "laisser ", "attraper ", "ramasser ", "tenir "],
			["le Joker ", "Superman ", "Batman ", "Spider-Man ", "Flash ", "Acquaman ", "Green Lantern "],
			["quand ", "lorsqu'", "pendant qu'"],
			["il est ", "il va ", "il sort "],
			["aux toilettes.", "au parc", "chez sa mere.", "chez le dentiste.", "avec Deadpool au centre de dépistage."]
		]
		return (tab);
	}

	function noThemeTab() {
		var tab = [
			["Avec ", "Considérant ", "Où que nous mène ", "Eu égard à ", "Vu ", "En ce qui concerne ", "Dans le cas particulier de "],
			["la restriction", "l'orientation ", "la crise ", "l'inertie ", "la difficulté ", "l'austérité ", "la dégradation "],
			["présente ", "actuelle ", "générale ", "induite ", "conjoncturelle ", "observée ", "contextuelle "],
			["il faut ", "il faut de toute urgence ", "il est préférable d'", "il serait intéressant d'", "il ne faut pas négliger d'", "on ne peut se passer d'", "il est nécessaire d'"],
			["étudier ", "examiner ", "favoriser ", "prendre en considération ", "anticiper ", "imaginer ", "uniformiser "],
			["toutes les ", "chacune des ", "la majorité des ", "la simultanéité des ", "l'ensemble des ", "la somme des ", "la totalité des "],
			["solutions ", "issues ", "problématiques ", "voies ", "alternatives ", "organisations matricielles ", "améliorations "],
			["imaginables ", "possibles ", "s'offrant à nous ", "de bon sens ", "envisageables ", "éventuelles ", "réalisables "],
			["à long terme.", "pour longtemps.", "à l'avenir.", "pour le futur.", "depuis longtemps.", "à court terme.", "rapidement."]
		];
		return (tab)
	}

	function getMaidTheme(line, theme) {
		if (theme === 0)
			var tab = noThemeTab();
		else
			var tab = avengersThemeTab();
		if (line === -1)
			return (tab.length);
		else
			return (tab[line][parseInt(getRandomArbitrary(1, tab[line].length))]);
	}

	function getSentence(theme) {
		var nb_line = getMaidTheme(-1);
		var sentence = "";
		var end = "";

		for (var i = 0; i < nb_line; i++) {
			console.log(theme);
			end = getMaidTheme(i, theme);
			console.log(theme);
			sentence = eOrApostrophe(sentence, end) + end;
		}
		return (sentence + "\n");
	}

	function startCitations(val, theme) {
		var total = "";
		for (var i = 0; i < val; i++)
			total = total + getSentence(theme);
		total = total.replace(/\n/g, "<br /><br />");
		return (total);
	}
});