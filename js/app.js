(function(){
  var app = angular.module('store',[]);
  var books = [
    {
      id : '1' ,
      titulo : 'El Juego de Ender',
      autor : 'Orson Scott Card' ,
      editorial : 'Ediciones B / Zeta' ,
      descripcion : "La Tierra está amenazada por una especie extraterrestre de insectos que pretende destruir la humanidad. Para vencerlos se precisa la intervención de un genio militar, por lo cual se permite el nacimiento de Ender, tercer hijo de una pareja en un mundo que limita a dos el número de descendientes. Ender se entrenará en una estación espacial, superará a sus rivales y se convertirá en la persona capaz de dirigir las flotas terrestres contra los insectos de otros mundos." ,
      images: [
  			{full: 'public/img/harry2.jpg',
  			thumb: 'public/img/harry2.jpg'
  		}
  	],
  	reviews: [
  				{stars: 5, body:'I love this book, great', author:'danelly.dm@gmail.com'},
  				{stars: 4, body:'Nothing new', author:'karazebrd@outlook.com'}
  			]
  	},
    {
      id : '2' ,
      titulo : 'Juego de tronos',
      autor : 'George R. R. Martin' ,
      editorial : 'Gigamesh' ,
      descripcion : 'Tras el largo verano, el invierno se acerca a los Siete Reinos. Lord Eddard Stark, señor de Invernalia, deja sus dominios para unirse a la corte de su amigo el rey Robert Baratheon, llamado el Usurpador, hombre díscolo y otrora guerrero audaz cuyas mayores aficiones son comer, beber y engendrar bastardos. Eddard Stark ocupará el cargo de Mano del Rey e intentará desentrañar una maraña de intrigas que pondrá en peligro su vida y la de todos los suyos. En un mundo cuyas estaciones pueden durar decenios y en el que retazos de una magia inmemorial y olvidada surgen en los rincones más sombríos y maravillosos, la traición y la lealtad, la compasión y la sed de venganza, el amor y el poder hacen del juego de tronos una poderosa trampa que atrapará en sus fauces a los personajes... y al lector.' ,
      images: [
  			{full: 'public/img/harry3.jpg',
  			thumb: 'public/img/harry3.jpg'
  		}
  	],
  	reviews: [
  				{stars: 2, body:'Hate this', author:'hater325@outlook.com'},
  				{stars: 4, body:'I like your page', author:'vang_d@outlook.com'}
  			]
  	},
    {
      id : '3' ,
      titulo : 'I robot',
      autor : 'Isaac Asimov' ,
      editorial : 'Edhasa' ,
      descripcion : 'Los robots de Isaac Asimov son máquinas capaces de llevar a cabo muy diversas tareas, y que a menudo se plantean a sí mismos problemas de 'conducta humana'. Pero estas cuestiones se resuelven en Yo, robot en el ámbito de las tres leyes fundamentales de la robótica, concebidas por Asimov, y que no dejan de proponer extraordinarias paradojas que a veces se explican por errores de funcionamiento y otras por la creciente complejidad de los 'programas'. Las paradojas que se plantean en estos relatos futuristas no son sólo ingeniosos ejercicios intelectuales sino sobre todo una indagación sobre la situación del hombre actual en relación con los avances tecnológicos y con la experiencia del tiempo.' ,
      images: [
  			{full: 'public/img/harry4.png',
  			thumb: 'public/img/harry4.png'
  		}
  	],
  	reviews: [
  				{stars: 5, body:'The most important book', author:'reat87s@hotmail.com'},
  				{stars: 5, body:'awesome <3 LOL', author:'geru43_te@outlook.com'}
  			]
  	},
    {
      id : '4' ,
      titulo : 'Harry Potter y el Caliz de Fuego',
      autor : 'J. K. Rowling' ,
      editorial : 'Schoolastic' ,
      descripcion : "La Tierra está amenazada por una especie extraterrestre de insectos que pretende destruir la humanidad. Para vencerlos se precisa la intervención de un genio militar, por lo cual se permite el nacimiento de Ender, tercer hijo de una pareja en un mundo que limita a dos el número de descendientes. Ender se entrenará en una estación espacial, superará a sus rivales y se convertirá en la persona capaz de dirigir las flotas terrestres contra los insectos de otros mundos." ,
      images: [
  			{full: 'public/img/harry5.jpg',
  			thumb: 'public/img/harry5.jpg'
  		}
  	],
  	reviews: [
  				{stars: 5, body:'I love it!!!', author:'magict53@gmail.com'},
  				{stars: 1, body:'It sucks', author:'voldemort@outlook.com'}
  			]
  	}
  ];
  app.controller('BookStoreController', function(){
    this.products = books;
  });
  app.controller('PanelController', function(){
		this.tab = 1;
		this.selectTab = function(setTab){
			this.tab = setTab;
		}
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		}
	});
  app.controller('ReviewController', function(){
		this.review = {};
		this.addReview = function(product){
			product.reviews.push(this.review);
			this.review = {};
		}
	});
  app.controller('FilterController', function(){
    this.filter = {};
    this.order = 1;
    this.isSelected = function(checkTab){
			return this.tab === checkTab;
		}

  });

})();
