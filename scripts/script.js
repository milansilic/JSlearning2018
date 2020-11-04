//VEŽBA 1: pokretajne JS funkcije klikom na dugme
var varbut1 = document.getElementById('but1');
varbut1.onclick = function(){
	document.getElementById('div1').innerHTML = "HTML tekst promenjen";
}
//klikom na dugme menjamo jedan CSS property:
var varbut2 = document.getElementById('but2');
var vardiv2 = document.getElementById('div2');
varbut2.onclick = function(){
	vardiv2.style.fontSize="24px";
}
//klikom na dugme "overrajtujemo" jedan konkretan ID u HTML dokumentu, drugim:
var varbut3 = document.getElementById('but3');
varbut3.onclick = function(){
	document.getElementById('div3').id='div3b';
}
//klikom na dugme dodajemo novu klasu HTML elementu koji sadrži konkretan ID:
var varbut4 = document.getElementById('but4');
var vardiv4 = document.getElementById('div4');
varbut4.onclick = function(){
	vardiv4.classList.add('pracEgdivb');
}
// klikom na naslov resetujemo sve:
var reset1 = document.getElementById('r1');
reset1.onclick = function reset1(){
	document.getElementById("div4").classList.remove("pracEgdivb");
	document.getElementById('div1').innerHTML = "promeni HTML tekst!";
	vardiv2.style.fontSize="16px";
	document.getElementById('div3b').id='div3';
}
// ***ubaciti primer i za classList.togle

//VEŽBA 2: menjamo više ID-eva klikom na tab
var varbut5 = document.getElementById('but5');
var varbut6 = document.getElementById('but6');
var varbut7 = document.getElementById('but7');
let div5 = document.getElementById('div5');
let div6 = document.getElementById('div6');
let div7 = document.getElementById('div7');

varbut5.onclick = function(){
	div5.style.display ='block';
	div6.style.display ='none';
	div7.style.display ='none';
}
varbut6.onclick = function(){
	div5.style.display ='none';
	div6.style.display ='block';
	div7.style.display ='none';
}
varbut7.onclick = function(){
	div5.style.display ='none';
	div6.style.display ='none';
	div7.style.display ='block';
}

//VEŽBA 3: klikom na sliku menjamo njen sors pomoću funkcije u kojoj je "if else" statement 
var img1 = document.getElementById('img1');
var img1b = document.getElementsByClassName('img1b');
var imgAr1 = ["img/leg1.png", "img/leg2.png", "img/leg3.png", "img/leg4.png", "img/leg5.png", "img/leg6.png",]

img1b[0].onclick = function changeImage() {
    if (img1.src.match("leg1")){
        img1.src = imgAr1[5];
    }
	else if (img1.src.match("leg6")){
        img1.src = imgAr1[4];
    }
	else if (img1.src.match("leg5")){
        img1.src = imgAr1[3];
    }
	else if (img1.src.match("leg4")){
        img1.src = imgAr1[2];
    }
	else if (img1.src.match("leg3")){
        img1.src = imgAr1[1];
    }
	else{img1.src = imgAr1[0];}
}

img1b[1].onclick = function changeImage() {
    if (img1.src.match("leg1")){
        img1.src = imgAr1[1];
    }
	else if (img1.src.match("leg2")){
        img1.src = imgAr1[2];
    }
	else if (img1.src.match("leg3")){
        img1.src = imgAr1[3];
    }
	else if (img1.src.match("leg4")){
        img1.src = imgAr1[4];
    }
	else if (img1.src.match("leg5")){
        img1.src = imgAr1[5];
    }
	else{img1.src = imgAr1[0];}
}

//VEŽBA 4: funkcija koja dodaje klasu div-u ukoliko ista ne postoji i briše je ukoliko postoji {if else}
var vardiv8 = document.getElementById("div8");
var varbut8 = document.getElementById("but8");
varbut8.onclick = function(){
	if(vardiv8.className == "open")
		{vardiv8.className = "";
		varbut8.innerHTML = "prikaži više";}
	else{vardiv8.className = "open";
		varbut8.innerHTML = "prikaži manje";}
};

//VEŽBA 5: jednostavni kalulator (parseFloat, isNaN)
var but9niz = document.getElementsByClassName('but9'); // ima 4 diva sa istom klasom but9, dobili smo niz!

but9niz[0].onclick = function sum(){
	var inp1 = document.getElementById('inp1').value;
	var inp2 = document.getElementById('inp2').value;
	var result = parseFloat(inp1)+parseFloat(inp2);
	if(!isNaN(result)){document.getElementById("outp1").innerHTML=result;}
	else{document.getElementById("outp1").innerHTML="niste uneli broj";}
}

but9niz[1].onclick = function min(){
	var inp1 = document.getElementById('inp1').value;
	var inp2 = document.getElementById('inp2').value;
	var result = parseFloat(inp1)-parseFloat(inp2);
	if(!isNaN(result)){
		document.getElementById("outp1").innerHTML=result;
	}else{document.getElementById("outp1").innerHTML="niste uneli broj";}
}

but9niz[2].onclick = function mult(){
	var inp1 = document.getElementById('inp1').value;
	var inp2 = document.getElementById('inp2').value;
	var result = parseFloat(inp1)*parseFloat(inp2);
	if(!isNaN(result)){
		document.getElementById("outp1").innerHTML=result;
	}else{document.getElementById("outp1").innerHTML="niste uneli broj";}
}

but9niz[3].onclick = function divide(){
	var inp1 = document.getElementById('inp1').value;
	var inp2 = document.getElementById('inp2').value;
	var result = parseFloat(inp1)/parseFloat(inp2);
	if(!isNaN(result)){
		document.getElementById("outp1").innerHTML=result.toFixed(2);
	}else{document.getElementById("outp1").innerHTML="niste uneli broj";}
}

//VEŽBA 6: novim vrednostima zamenjujemo odabrane u padajućem meniju (switch)
var varbut10 = document.getElementById("but10");
varbut10.onclick = function ispisi(){
	var prvopolje = document.getElementById("selectpolje1").value;
	var drugopolje = document.getElementById("selectpolje2").value;	
	var shrez1 = ""; var shrez2 = "";
	
	switch (prvopolje){
		case "1": shrez1 = "hrabri"; break; case "2": shrez1 = "uplakani"; break; case "3": shrez1 = "srećni"; break;
		case "4": shrez1 = "razmaženi"; break; case "5": shrez1 = "brbljivi"; break; case "6": shrez1 = "mrzovoljni"; break;
		case "7": shrez1 = "kategorični"; break; case "8": shrez1 = "vragolasti"; break; case "9": shrez1 = "tvrdoglavi"; break;
		case "10": shrez1 = "omamljeni"; break; case "11": shrez1 = "pomahnitali"; break; case "12": shrez1 = "onemoćali"; break;
		case "13": shrez1 = "ozebli"; break; case "14": shrez1 = "prepaljeni"; break; case "15": shrez1 = "nepodnošljivi"; break; 
		case "16": shrez1 = "naivni"; break; case "17": shrez1 = "lakoverni"; break; case "18": shrez1 = "prevrtljivi"; break;
		case "19": shrez1 = "budalasti"; break; case "20": shrez1 = "prebogati"; break;	case "21": shrez1 = "pijani"; break;
		case "22": shrez1 = "prelepi"; break; case "23": shrez1 = "smrdljivi"; break; case "24": shrez1 = "zavodljivi"; break;
		case "25": shrez1 = "nastrani"; break; case "26": shrez1 = "namazani"; break; case "27": shrez1 = "boginjavi"; break;
		case "28": shrez1 = "nalickani"; break; case "29": shrez1 = "dosetljivi"; break; case "30": shrez1 = "bodljikavi"; break;
		case "31": shrez1 = "maljavi"; break; default: shrez1 = "ostavili prazna polja";
	}
	switch (drugopolje){
		case "Januar": shrez2 = "BRZI GONZALES"; break; case "Februar": shrez2 = "VITEZ KOJA"; break;
		case "Mart": shrez2 = "DAMBLDOR"; break; case "April": shrez2 = "OPTIMUS PRAJM"; break;
		case "Maj": shrez2 = "MORNAR POPAJ"; break; case "Jun": shrez2 = "HARI POTER"; break;
		case "Jul": shrez2 = "HORDAK"; break; case "Avgust": shrez2 = "ATOMSKI MRAV"; break;
		case "Septembar": shrez2 = "BIBOP"; break; case "Oktobar": shrez2 = "SNORKIJEVAC"; break;
		case "Novembar": shrez2 = "FRODO BAGINS"; break; case "Decembar": shrez2 = "KAPETAN KUKA"; break;
		default: shrez2 = "";
	}

	var shrezsum = shrez1 + " " + shrez2;
	document.getElementById("outp2").innerHTML="vi ste " + shrezsum;
}

//VEŽBA 7: DISCO!
var kvadrat = document.getElementsByClassName("kvadrat");
var myVar;
var vardrugeboje;
var vartreceboje;

function prveboje(){
	kvadrat[0].style.background = "radial-gradient(#ffb3ec,#ff66d9)";
	kvadrat[1].style.background = "radial-gradient(#ffb380,#ff6600)";
	kvadrat[2].style.background = "radial-gradient(#99ff99,#00e600)";
	kvadrat[3].style.background = "radial-gradient(#ff8080,#ff0000)";
	kvadrat[4].style.background = "radial-gradient(#ff66d9,#cc0099)";
	kvadrat[5].style.background = "radial-gradient(#809fff,#1a53ff)";
	kvadrat[6].style.background = "radial-gradient(yellow,#ffaf1a)";
	kvadrat[7].style.background = "radial-gradient(#ccffdd,#4dff88)";
	kvadrat[8].style.background = "radial-gradient(#cceeff,#4dc3ff)";
}
			
function startdisco(){
			stopdisco();
			prveboje();
			
			vardrugeboje = setTimeout(function(){
			kvadrat[0].style.background = "radial-gradient(#809fff,#1a53ff)";
			kvadrat[1].style.background = "radial-gradient(yellow,#ffaf1a)";
			kvadrat[2].style.background = "radial-gradient(#ff66d9,#cc0099)";
			kvadrat[3].style.background = "radial-gradient(#ffb380,#ff6600)";
			kvadrat[4].style.background = "radial-gradient(#99ff99,#00e600)";
			kvadrat[5].style.background = "radial-gradient(#cceeff,#4dc3ff)";
			kvadrat[6].style.background = "radial-gradient(#ccffdd,#4dff88)";	
			kvadrat[7].style.background = "radial-gradient(#ffb3ec,#ff66d9)";
			kvadrat[8].style.background = "radial-gradient(#ff8080,#ff0000)";
			},1000);
			
			vartreceboje = setTimeout(function(){
			kvadrat[0].style.background = "radial-gradient(#99ff99,#00e600)";
			kvadrat[1].style.background = "radial-gradient(#cceeff,#4dc3ff)";
			kvadrat[2].style.background = "radial-gradient(#809fff,#1a53ff)";
			kvadrat[3].style.background = "radial-gradient(yellow,#ffaf1a)";
			kvadrat[4].style.background = "radial-gradient(#ccffdd,#4dff88)";
			kvadrat[5].style.background = "radial-gradient(#ffb3ec,#ff66d9)";
			kvadrat[6].style.background = "radial-gradient(#ff8080,#ff0000)";
			kvadrat[7].style.background = "radial-gradient(#ffb380,#ff6600)";
			kvadrat[8].style.background = "radial-gradient(#ff66d9,#cc0099)";
			},2000);
			
			myVar = setInterval(startdisco, 3000);
}

function stopdisco(){
	clearInterval(myVar);
	clearTimeout(vardrugeboje);
	clearTimeout(vartreceboje);
	kvadrat[0].style.background = "";
	kvadrat[1].style.background = "";
	kvadrat[2].style.background = "";
	kvadrat[3].style.background = "";
	kvadrat[4].style.background = "";
	kvadrat[5].style.background = "";
	kvadrat[6].style.background = "";
	kvadrat[7].style.background = "";
	kvadrat[8].style.background = "";
	myVar = null;
}

//VEŽBA 8
let ball1 = document.getElementById("ball");

addEventListener("keydown", move);

function move(e){
	if(e.which == 65){ball1.style.left = "0px"; ball1.style.background = "#ffe608"; 
					ball1.style.borderRadius = "15px 50px"; ball1.style.transition = "all 1s";}
	if(e.which == 87){ball1.style.top = "0px"; ball1.style.background = "orange"; 
					ball1.style.borderRadius = "50%"; ball1.style.transition = "all 1s";}
	if(e.which == 68){ball1.style.left = "296px"; ball1.style.background = "purple"; 
					ball1.style.borderRadius = "70px 40px 70px 40px"; ball1.style.transition = "all 1s";}
	if(e.which == 83){ball1.style.top = "296px"; ball1.style.background = "red"; 
					ball1.style.borderRadius = "8%"; ball1.style.transition = "all 1s";}
	if(e.which == 82){ball1.style.left = "148px"; ball1.style.top = "148px"; 
					ball1.style.background = "#3399ff"; ball1.style.borderRadius = "50%"; ball1.style.transition = "all 0.2s";}
}

function gON(){
	addEventListener("keyup", function (e){
			if(e.which == 65){ball1.style.left = "0px"; ball1.style.transition = "all 0.8s";}
			if(e.which == 87){ball1.style.top = "0px"; ball1.style.transition = "all 0.8s";}
			if(e.which == 68){ball1.style.left = "296px"; ball1.style.transition = "all 0.8s";}
			if(e.which == 83){ball1.style.top = "296px"; ball1.style.transition = "all 0.8s";}
		}
	);
}
function gOF(){
	addEventListener("keyup", function(e){
			if(e.which == 65){ball1.style.left = "0.1px"; ball1.style.transition = "all 5s";}
			if(e.which == 87){ball1.style.top = "0.1px"; ball1.style.transition = "all 5s";}
			if(e.which == 68){ball1.style.left = "295.9px"; ball1.style.transition = "all 5s";}
			if(e.which == 83){ball1.style.top = "295.9px"; ball1.style.transition = "all 5s";}		
		}
	);
}

//VEŽBA 9
var varimg3 = document.getElementById("img3");
var varimg4 = document.getElementsByClassName("img4");
//pošto su varimg4 niz, jedini način da dodelimo addEvent... svim elementima niza je kroz for lup
for (w=0;w<varimg4.length;w++){
	varimg4[w].addEventListener("click",display);
}
//sada je svaki element niza varimg4 dobio zadatak da pokrene funkciju "display" na klik
function display(){
	var slike2 = this.getAttribute("src");
	varimg3.setAttribute("src",slike2);
}

//prvo smo napravili var slike2 koji u sebi kaže da svako ko pokrene ovu funkciju, dodeli varijabli svoj sors 
//potom smo varijabli varimg3 dodelili atribut src i vrednost tog atributa koji se kopira iz varijable slike2!

//VEŽBA 10
var slidepromena1;
var slidepromena2;
var slideinterval;

function changeImg(){
	var varimg5 = document.getElementsByClassName("img5");
	varimg5[0].style.display = "flex"
	varimg5[2].style.display = "none"

	stopchangeImg();
	
	slidepromena1 = setTimeout(function(){
		varimg5[0].style.display = "none"
		varimg5[1].style.display = "flex"
		varimg5[2].style.display = "none"
	},3000);
	slidepromena2 = setTimeout(function(){
		varimg5[0].style.display = "none"
		varimg5[1].style.display = "none"
		varimg5[2].style.display = "flex"
	},6000);
	
	slideinterval = setInterval(changeImg, 9000);
}
function stopchangeImg(){
	clearInterval(slideinterval);
	clearTimeout(slidepromena1);
	clearTimeout(slidepromena2);
}
changeImg();

//VEŽBA 11
var slidepromena3;
var slidepromena4;
var slidepromena5;
var slidepromena6;
var slideinterval2;
var varwrap2 = document.getElementById("wrap2");

varwrap2.addEventListener("mouseout",changeImg2);

function changeImg2(){ 										//onload-a se na otvaranju stranice
	var varimg6 = document.getElementsByClassName("img6");  // lokalna var koja definise niz, stanje na pocetku
	varimg6[0].style.opacity = "1";
	varimg6[1].style.opacity = "0";
	varimg6[2].style.opacity = "0";
	varimg6[3].style.opacity = "0";
	varimg6[4].style.opacity = "0";

	stopchangeImg2();
	
	slidepromena3 = setTimeout(function(){
		varimg6[0].style.opacity = "0";
		varimg6[1].style.opacity = "1";
		varimg6[2].style.opacity = "0";
		varimg6[3].style.opacity = "0";
		varimg6[4].style.opacity = "0";
	},4000);
	slidepromena4 = setTimeout(function(){
		varimg6[0].style.opacity = "0";
		varimg6[1].style.opacity = "0";
		varimg6[2].style.opacity = "1";
		varimg6[3].style.opacity = "0";
		varimg6[4].style.opacity = "0";
	},8000);
	slidepromena5 = setTimeout(function(){
		varimg6[0].style.opacity = "0";
		varimg6[1].style.opacity = "0";
		varimg6[2].style.opacity = "0";
		varimg6[3].style.opacity = "1";
		varimg6[4].style.opacity = "0";
	},12000);
	slidepromena6 = setTimeout(function(){
		varimg6[0].style.opacity = "0";
		varimg6[1].style.opacity = "0";
		varimg6[2].style.opacity = "0";
		varimg6[3].style.opacity = "0";
		varimg6[4].style.opacity = "1";
	},16000);
	
	slideinterval2 = setInterval(changeImg2, 20000);	
}

function stopchangeImg2(){
	clearInterval(slideinterval2);
	clearTimeout(slidepromena3);
	clearTimeout(slidepromena4);
	clearTimeout(slidepromena5);
	clearTimeout(slidepromena6);
}
changeImg2();

varwrap2.addEventListener("mouseover",stopchangeImg2);


//VEŽBA 12
var varbut11 = document.getElementById('but11');
var polja = document.getElementsByClassName("tdata");

var defoltparametri = {
	lokacija:"kamenica", 
	povrsina: 900,
	kvadratura: 90,
	cena: 50000,
	evrPoMetZem: function(){return (this.cena / this.povrsina).toFixed(2);},
	evrPoMetKuc: function(){return (this.cena / this.kvadratura).toFixed(2);}
}

function unospodataka(){
	polja[0].innerHTML = defoltparametri.lokacija;
	polja[1].innerHTML = defoltparametri.povrsina;
	polja[2].innerHTML = defoltparametri.kvadratura;
	polja[3].innerHTML = defoltparametri.cena;
	polja[4].innerHTML = defoltparametri.evrPoMetZem();
	polja[5].innerHTML = defoltparametri.evrPoMetKuc();
}
unospodataka();

varbut11.onclick = function prenospodataka(){
	var varinp3 = document.getElementById("inp3").value;
	var varinp4 = document.getElementById("inp4").value;
	var varinp5 = document.getElementById("inp5").value;
	var varinp6 = document.getElementById("inp6").value;
	polja[0].innerHTML = varinp3;
	polja[1].innerHTML = varinp4;
	polja[2].innerHTML = varinp5;
	polja[3].innerHTML = varinp6;
	polja[4].innerHTML = (varinp6 / varinp4).toFixed(2);
	polja[5].innerHTML = (varinp6 / varinp5).toFixed(2);
}

//VEŽBA 13
var vartdata2 = document.getElementsByClassName("tdata2");
var varthumb1 = document.getElementsByClassName("thumb1");
//onda pravimo OBJECT CONSTRUCTOR:
function Animal (nazivZ, kontinentZ, habitatZ, tezinaZ, visinaZ, brzinaZ, bojeZ, ishranaZ, mladunacaZ, vekZ, ugrozenostZ){
	this.naziv = nazivZ;
	this.kontinent = kontinentZ;
	this.habitat = habitatZ;
	this.tezina = tezinaZ;
	this.visina = visinaZ;
	this.brzina = brzinaZ;
	this.boje = bojeZ;
	this.ishrana = ishranaZ;
	this.mladunaca = mladunacaZ;
	this.vek = vekZ;
	this.ugrozenost = ugrozenostZ;
	
	this.unesiutabelu = function(){
		vartdata2[0].innerHTML = this.naziv;
		vartdata2[1].innerHTML = this.kontinent;
		vartdata2[2].innerHTML = this.habitat;
		vartdata2[3].innerHTML = this.tezina;
		vartdata2[4].innerHTML = this.visina;
		vartdata2[5].innerHTML = this.brzina;
		vartdata2[6].innerHTML = this.boje;
		vartdata2[7].innerHTML = this.ishrana;
		vartdata2[8].innerHTML = this.mladunaca;
		vartdata2[9].innerHTML = this.vek;
		vartdata2[10].innerHTML = this.ugrozenost;
	}
}

var zivBeliMedved = new Animal ("Beli Medved", "Arktički krug", "Sever, priobalje, ostrva, led", "od 350kg do 700kg", "od 1.30m do 1.80m", "40km/h", "belo/svetlo žuto", "meso foke", "od 1 do 4", "25 godina", "rizik od izumiranja");
var zivKamila = new Animal ("Baktrijska Kamila", "Centralna Azija", "Stepe, pustinje (Gobi)", "od 400kg do 1000kg", "od 1.80m do 2.30m", "65km/h", "tamno braon do pesak bež", "raznovrsno bilje", "od 1 do 2", "40 godina", "visok rizik od izumiranja");
var zivBelaAjkula = new Animal ("Bela Ajkula", "Amerika, Afrika, Okeanija", "Okean, Atlantik, Pacifik", "od 700kg do 1.200kg", "od 3.50m do 6.50m (dužina)", "56km/h" , "sive i bele", "ribe, raže, morski lavovi...", "od 2 do 10", "70 godina", "rizik od izumiranja");
var zivGorila = new Animal ("Planinska Gorila", "centralna Afrika", "zelene, vulkanske planine", "od 100kg do 200kg", "od 1.40m do 1.70m", "40km/h", "plavo-crna, braon-siva", "lišće, mlade stabljike, voće", "1", "35-40 godina", "kritično ugrožene");
var zivFlamingo = new Animal ("Flamingo", "Amerika, Afrika, Azija...", "morske laguna i jezera", "2-4kg", "od 1.2m do 1.5m", "56km/h", "pink, crvena, bela", "alge, insekti, račići", "1 jaje", "od 30 do 50 godina", "veoma neugroženi");
var zivLos = new Animal ("Los", "Severna hemisfera", "severne šume, tajge", "od 380kg do 700kg", "od 1.4m do 2.1m", "56km/h", "braon, siva, srna...", "grančice, lišće, grmlje...", "1 do 2, retko 3", "od 15 do 25 godina", "neugroženi");
var zivSlon = new Animal ("Afrički Slon", "zapadna i centralna Afrika", "savane, pustinje, šume", "oko 6.000kg", "od 2.8m do 3.5m", "40km/h", "plavkasto ili svetlo siva", "lišće, granje, korenje, voće", "1", "od 60 do 70 godina", "rizik od izumiranja");
var zivTigar = new Animal ("Bengalski Tigar", "Indija, Bangladeš", "tropske prašume, mangrovi", "od 140kg do 220kg", "do 1.1m (do 3.1m dužina)", "80km/h", "narandžasta, crne pruge", "divljač, svinje, jeleni, zec...", "od 3 do 4", "od 8 do 10 godina", "ugrožena vrsta");

varthumb1[0].onclick = function(){zivBeliMedved.unesiutabelu();}
varthumb1[1].onclick = function(){zivKamila.unesiutabelu();}
varthumb1[2].onclick = function(){zivBelaAjkula.unesiutabelu();}
varthumb1[3].onclick = function(){zivGorila.unesiutabelu();}
varthumb1[4].onclick = function(){zivFlamingo.unesiutabelu();}
varthumb1[5].onclick = function(){zivLos.unesiutabelu();}
varthumb1[6].onclick = function(){zivSlon.unesiutabelu();}
varthumb1[7].onclick = function(){zivTigar.unesiutabelu();}

// VEŽBA 14
let varsquare = document.getElementsByClassName("square1"); //ovo je niz

addEventListener("keydown", function(e){
	if(e.which == 103){varsquare[0].style.opacity = "0"; varsquare[0].style.transition = "opacity 0s";}
	if(e.which == 104){varsquare[1].style.opacity = "0"; varsquare[1].style.transition = "opacity 0s"}
	if(e.which == 105){varsquare[2].style.opacity = "0"; varsquare[2].style.transition = "opacity 0s"}
	if(e.which == 100){varsquare[3].style.opacity = "0"; varsquare[3].style.transition = "opacity 0s"}
	if(e.which == 101){varsquare[4].style.opacity = "0"; varsquare[4].style.transition = "opacity 0s"}
	if(e.which == 102){varsquare[5].style.opacity = "0"; varsquare[5].style.transition = "opacity 0s"}
	if(e.which == 97){varsquare[6].style.opacity = "0"; varsquare[6].style.transition = "opacity 0s"}
	if(e.which == 98){varsquare[7].style.opacity = "0"; varsquare[7].style.transition = "opacity 0s"}
	if(e.which == 99){varsquare[8].style.opacity = "0"; varsquare[8].style.transition = "opacity 0s"}
});
addEventListener("keyup", function(e){
	if(e.which == 103){varsquare[0].style.opacity = "1"; varsquare[0].style.transition = "opacity 2.5s";}
	if(e.which == 104){varsquare[1].style.opacity = "1"; varsquare[1].style.transition = "opacity 2.5s";}
	if(e.which == 105){varsquare[2].style.opacity = "1"; varsquare[2].style.transition = "opacity 2.5s";}
	if(e.which == 100){varsquare[3].style.opacity = "1"; varsquare[3].style.transition = "opacity 2.5s";}
	if(e.which == 101){varsquare[4].style.opacity = "1"; varsquare[4].style.transition = "opacity 2.5s";}
	if(e.which == 102){varsquare[5].style.opacity = "1"; varsquare[5].style.transition = "opacity 2.5s";}
	if(e.which == 97){varsquare[6].style.opacity = "1"; varsquare[6].style.transition = "opacity 2.5s";}
	if(e.which == 98){varsquare[7].style.opacity = "1"; varsquare[7].style.transition = "opacity 2.5s";}
	if(e.which == 99){varsquare[8].style.opacity = "1"; varsquare[8].style.transition = "opacity 2.5s";}
});

document.getElementById('but12').addEventListener('click', function(){
	var img7 = document.getElementById('img7');
	var varimg7fullpath = document.getElementById('img7').src;
	var varimg7 = varimg7fullpath.replace(/^.*[\\\/]/, '');
	var selector = document.getElementById('select2');
	var value14 = selector[selector.selectedIndex].value;
	
	switch (varimg7){
		case '14travolta.jpg':
			if (value14 === "John Travolta"){
				alert ("HEJ TRAVOLTA TO SI TI, HEJ HEJ HEJ, DRUŽE MOJ!");
				img7.src="img/14gal.jpg";
				for (var i=0; i<varsquare.length; i++){varsquare[i].style.backgroundColor = "#FF0099";}
				selector.value = "";
			}
			else {alert ("NISTE POGODILI!!!");} 
		break;
		case '14gal.jpg':
			if (value14 === "Gal Gadot"){
				alert ("BRAVO, Jeste to je ona što je glumila Wonder Woman!");
				img7.src="img/14mads.jpg";
				for (var i=0; i<varsquare.length; i++){varsquare[i].style.backgroundColor = "#5353c6";}
				selector.value = "";
			}
			else if (value14 === "James Brown"){alert ("DAL STE NORMALNI? Ona vam liči na James Brown-a???");}
			else {alert ("NISTE POGODILI!!!");} 
		break;
		case '14mads.jpg':
			if (value14 === "Mads Mikkelsen"){
				alert ("BRAVO, Jeste to je ludi skandinavac!");
				img7.src="img/14aretha.jpg";
				for (var i=0; i<varsquare.length; i++){varsquare[i].style.backgroundColor = "#d00";}
				selector.value = "";
			}
			else if (value14 === "Tina Turner"){alert ("Ma ista Tina... pljunuta");}
			else {alert ("NISTE POGODILI!!!");} 
		break;
		case '14aretha.jpg': 
			if (value14 === "Aretha Franklin"){
				alert ("BRAVO MAJSTORE!!! Jeste to je soul diva!");
				img7.src="img/14dred.jpg";
				for (var i=0; i<varsquare.length; i++){varsquare[i].style.backgroundColor = "gold";}
				selector.value = "";
			}
			else {alert ("NISTE POGODILI!!!");} 
		break;
		case '14dred.jpg': 
			if (value14 === "Sylvester Stallone"){
				alert ("SVAKA ČAST! Tako je, to je onaj što je boksao i vik'o ''Edrijen''!");
				img7.src="img/14noomi.jpg";
				for (var i=0; i<varsquare.length; i++){varsquare[i].style.backgroundColor = "#80dfff";}
				selector.value = "";
			}
			else {alert ("NISTE POGODILI!!!");} 
		break;
		case '14noomi.jpg': 
			if (value14 === "Noomi Rapace"){
				alert ("POGODILI STE! To je sjajna glumica!");
				img7.src="img/14travolta.jpg";
				for (var i=0; i<varsquare.length; i++){varsquare[i].style.backgroundColor = "#3399ff";}
				selector.value = "";
			}
			else {alert ("NISTE POGODILI!!!");} 
		break;
	}	
});
// VEŽBA 15
let canvas3 = document.getElementById('canvas3');
	
canvas3.addEventListener('click', function(e){
	var land2 = document.getElementById('land2');
	var land3 = document.getElementById('land3');
	var land4 = document.getElementById('land4');
	var land5 = document.getElementById('land5');
	var land6 = document.getElementById('land6');
	var land7 = document.getElementById('land7');
	var land8 = document.getElementById('land8');
	var land9 = document.getElementById('land9');
	var land10 = document.getElementById('land10');
	
	var square2 = document.getElementById('square2');
	var square3 = document.getElementById('square3');
	var square4 = document.getElementById('square4');
	var square5 = document.getElementById('square5');
	var square6 = document.getElementById('square6');
	var square7 = document.getElementById('square7');
	var square8 = document.getElementById('square8');
	var square9 = document.getElementById('square9');
	var square10 = document.getElementById('square10');
	
	var target1 = event.target.id;
	var globalTop;
	var globalLeft;
			
	if(target1 == "land2"){
		land2.classList.add('bordertrans');
		land3.classList.remove('bordertrans');
		land4.classList.remove('bordertrans');
		land5.classList.remove('bordertrans');
		land6.classList.remove('bordertrans');
		land7.classList.remove('bordertrans');
		land8.classList.remove('bordertrans');
		land9.classList.remove('bordertrans');
		land10.classList.remove('bordertrans');
	
		globalTop = square2.offsetTop;
		globalLeft = square2.offsetLeft;
	
		window.onkeydown = function (event){
			if(event.which == 186){
				globalTop += 140; square2.style.top = globalTop + "px";
				if(globalTop > 280){square2.style.top = "280px"; globalTop = 280;}
			}
			if(event.which == 80){
				globalTop -= 140; square2.style.top = globalTop + "px";
				if(globalTop < 0){square2.style.top = "0px"; globalTop = 0;}
			}
			if(event.which == 222){
				globalLeft += 140; square2.style.left = globalLeft + "px";
				if(globalLeft > 280){square2.style.left = "280px"; globalLeft = 280;}
			}
			if(event.which == 76){
				globalLeft -= 140; square2.style.left = globalLeft + "px";
				if(globalLeft < 0){square2.style.left = "0px"; globalLeft = 0;}
			}
		}	
	}
	
	if(target1 == "land3"){
		land3.classList.add('bordertrans');
		land2.classList.remove('bordertrans');
		land4.classList.remove('bordertrans');
		land5.classList.remove('bordertrans');
		land6.classList.remove('bordertrans');
		land7.classList.remove('bordertrans');
		land8.classList.remove('bordertrans');
		land9.classList.remove('bordertrans');
		land10.classList.remove('bordertrans');
		
		globalTop = square3.offsetTop;
		globalLeft = square3.offsetLeft;
	
		window.onkeydown = function (event){
			if(event.which == 186){
				globalTop += 140; square3.style.top = globalTop + "px";
				if(globalTop > 280){square3.style.top = "280px"; globalTop = 280;}
			}
			if(event.which == 80){
				globalTop -= 140; square3.style.top = globalTop + "px";
				if(globalTop < 0){square3.style.top = "0px"; globalTop = 0;}
			}
			if(event.which == 222){
				globalLeft += 140; square3.style.left = globalLeft + "px";
				if(globalLeft > 280){square3.style.left = "280px"; globalLeft = 280;}
			}
			if(event.which == 76){
				globalLeft -= 140; square3.style.left = globalLeft + "px";
				if(globalLeft < 0){square3.style.left = "0px"; globalLeft = 0;}
			}
		}
	}
	
	if(target1 == "land4"){
		land4.classList.add('bordertrans');
		land3.classList.remove('bordertrans');
		land2.classList.remove('bordertrans');
		land5.classList.remove('bordertrans');
		land6.classList.remove('bordertrans');
		land7.classList.remove('bordertrans');
		land8.classList.remove('bordertrans');
		land9.classList.remove('bordertrans');
		land10.classList.remove('bordertrans');
		
		globalTop = square4.offsetTop;
		globalLeft = square4.offsetLeft;
	
		window.onkeydown = function (event){
			if(event.which == 186){
				globalTop += 140; square4.style.top = globalTop + "px";
				if(globalTop > 280){square4.style.top = "280px"; globalTop = 280;}
			}
			if(event.which == 80){
				globalTop -= 140; square4.style.top = globalTop + "px";
				if(globalTop < 0){square4.style.top = "0px"; globalTop = 0;}
			}
			if(event.which == 222){
				globalLeft += 140; square4.style.left = globalLeft + "px";
				if(globalLeft > 280){square4.style.left = "280px"; globalLeft = 280;}
			}
			if(event.which == 76){
				globalLeft -= 140; square4.style.left = globalLeft + "px";
				if(globalLeft < 0){square4.style.left = "0px"; globalLeft = 0;}
			}
		}
	}
	
	if(target1 == "land5"){
		land5.classList.add('bordertrans');
		land3.classList.remove('bordertrans');
		land4.classList.remove('bordertrans');
		land2.classList.remove('bordertrans');
		land6.classList.remove('bordertrans');
		land7.classList.remove('bordertrans');
		land8.classList.remove('bordertrans');
		land9.classList.remove('bordertrans');
		land10.classList.remove('bordertrans');
		
		globalTop = square5.offsetTop;
		globalLeft = square5.offsetLeft;
	
		window.onkeydown = function (event){
			if(event.which == 186){
				globalTop += 140; square5.style.top = globalTop + "px";
				if(globalTop > 280){square5.style.top = "280px"; globalTop = 280;}
			}
			if(event.which == 80){
				globalTop -= 140; square5.style.top = globalTop + "px";
				if(globalTop < 0){square5.style.top = "0px"; globalTop = 0;}
			}
			if(event.which == 222){
				globalLeft += 140; square5.style.left = globalLeft + "px";
				if(globalLeft > 280){square5.style.left = "280px"; globalLeft = 280;}
			}
			if(event.which == 76){
				globalLeft -= 140; square5.style.left = globalLeft + "px";
				if(globalLeft < 0){square5.style.left = "0px"; globalLeft = 0;}
			}
		}
	}
	
	if(target1 == "land6"){
		land6.classList.add('bordertrans');
		land3.classList.remove('bordertrans');
		land4.classList.remove('bordertrans');
		land5.classList.remove('bordertrans');
		land2.classList.remove('bordertrans');
		land7.classList.remove('bordertrans');
		land8.classList.remove('bordertrans');
		land9.classList.remove('bordertrans');
		land10.classList.remove('bordertrans');
		
		globalTop = square6.offsetTop;
		globalLeft = square6.offsetLeft;
	
		window.onkeydown = function (event){
			if(event.which == 186){
				globalTop += 140; square6.style.top = globalTop + "px";
				if(globalTop > 280){square6.style.top = "280px"; globalTop = 280;}
			}
			if(event.which == 80){
				globalTop -= 140; square6.style.top = globalTop + "px";
				if(globalTop < 0){square6.style.top = "0px"; globalTop = 0;}
			}
			if(event.which == 222){
				globalLeft += 140; square6.style.left = globalLeft + "px";
				if(globalLeft > 280){square6.style.left = "280px"; globalLeft = 280;}
			}
			if(event.which == 76){
				globalLeft -= 140; square6.style.left = globalLeft + "px";
				if(globalLeft < 0){square6.style.left = "0px"; globalLeft = 0;}
			}
		}
	}
	
	if(target1 == "land7"){
		land7.classList.add('bordertrans');
		land3.classList.remove('bordertrans');
		land4.classList.remove('bordertrans');
		land5.classList.remove('bordertrans');
		land6.classList.remove('bordertrans');
		land2.classList.remove('bordertrans');
		land8.classList.remove('bordertrans');
		land9.classList.remove('bordertrans');
		land10.classList.remove('bordertrans');
		
		globalTop = square7.offsetTop;
		globalLeft = square7.offsetLeft;
	
		window.onkeydown = function (event){
			if(event.which == 186){
				globalTop += 140; square7.style.top = globalTop + "px";
				if(globalTop > 280){square7.style.top = "280px"; globalTop = 280;}
			}
			if(event.which == 80){
				globalTop -= 140; square7.style.top = globalTop + "px";
				if(globalTop < 0){square7.style.top = "0px"; globalTop = 0;}
			}
			if(event.which == 222){
				globalLeft += 140; square7.style.left = globalLeft + "px";
				if(globalLeft > 280){square7.style.left = "280px"; globalLeft = 280;}
			}
			if(event.which == 76){
				globalLeft -= 140; square7.style.left = globalLeft + "px";
				if(globalLeft < 0){square7.style.left = "0px"; globalLeft = 0;}
			}
		}
	}
	
	if(target1 == "land8"){
		land8.classList.add('bordertrans');
		land3.classList.remove('bordertrans');
		land4.classList.remove('bordertrans');
		land5.classList.remove('bordertrans');
		land6.classList.remove('bordertrans');
		land7.classList.remove('bordertrans');
		land2.classList.remove('bordertrans');
		land9.classList.remove('bordertrans');
		land10.classList.remove('bordertrans');
		
		globalTop = square8.offsetTop;
		globalLeft = square8.offsetLeft;
		
		window.onkeydown = function (event){
			if(event.which == 186){
				globalTop += 140; square8.style.top = globalTop + "px";
				if(globalTop > 280){square8.style.top = "280px"; globalTop = 280;}
			}
			if(event.which == 80){
				globalTop -= 140; square8.style.top = globalTop + "px";
				if(globalTop < 0){square8.style.top = "0px"; globalTop = 0;}
			}
			if(event.which == 222){
				globalLeft += 140; square8.style.left = globalLeft + "px";
				if(globalLeft > 280){square8.style.left = "280px"; globalLeft = 280;}
			}
			if(event.which == 76){
				globalLeft -= 140; square8.style.left = globalLeft + "px";
				if(globalLeft < 0){square8.style.left = "0px"; globalLeft = 0;}
			}
		}
	}
	
	if(target1 == "land9"){
		land9.classList.add('bordertrans');
		land3.classList.remove('bordertrans');
		land4.classList.remove('bordertrans');
		land5.classList.remove('bordertrans');
		land6.classList.remove('bordertrans');
		land7.classList.remove('bordertrans');
		land8.classList.remove('bordertrans');
		land2.classList.remove('bordertrans');
		land10.classList.remove('bordertrans');
		
		globalTop = square9.offsetTop;
		globalLeft = square9.offsetLeft;
		
		window.onkeydown = function (event){
			if(event.which == 186){
				globalTop += 140; square9.style.top = globalTop + "px";
				if(globalTop > 280){square9.style.top = "280px"; globalTop = 280;}
			}
			if(event.which == 80){
				globalTop -= 140; square9.style.top = globalTop + "px";
				if(globalTop < 0){square9.style.top = "0px"; globalTop = 0;}
			}
			if(event.which == 222){
				globalLeft += 140; square9.style.left = globalLeft + "px";
				if(globalLeft > 280){square9.style.left = "280px"; globalLeft = 280;}
			}
			if(event.which == 76){
				globalLeft -= 140; square9.style.left = globalLeft + "px";
				if(globalLeft < 0){square9.style.left = "0px"; globalLeft = 0;}
			}
		}
	}
	
	if(target1 == "land10"){
		land10.classList.add('bordertrans');
		land3.classList.remove('bordertrans');
		land4.classList.remove('bordertrans');
		land5.classList.remove('bordertrans');
		land6.classList.remove('bordertrans');
		land7.classList.remove('bordertrans');
		land8.classList.remove('bordertrans');
		land9.classList.remove('bordertrans');
		land2.classList.remove('bordertrans');
		
		globalTop = square10.offsetTop;
		globalLeft = square10.offsetLeft;
		
		window.onkeydown = function (event){
			if(event.which == 186){
				globalTop += 140; square10.style.top = globalTop + "px";
				if(globalTop > 280){square10.style.top = "280px"; globalTop = 280;}
			}
			if(event.which == 80){
				globalTop -= 140; square10.style.top = globalTop + "px";
				if(globalTop < 0){square10.style.top = "0px"; globalTop = 0;}
			}
			if(event.which == 222){
				globalLeft += 140; square10.style.left = globalLeft + "px";
				if(globalLeft > 280){square10.style.left = "280px"; globalLeft = 280;}
			}
			if(event.which == 76){
				globalLeft -= 140; square10.style.left = globalLeft + "px";
				if(globalLeft < 0){square10.style.left = "0px"; globalLeft = 0;}
			}
		}
	}
});


/*
nastavak zadnje vezbe
http://jsfiddle.net/antisanity/Vc2X7/


istraziti search bar da radi samo uz pomoc javascript

istraziti image slider sa proizvodima

razmotriti primer
UNOS PODATAKA - PARAMETARA U POLJA
KLIKOM NA DUGME KREIRANJE OBJEKTA
ISPISIVANJE IMENA OBJEKATA NA DRUGOM DELU STRANE
POZIVANJE OBJEKATA NA KLIK
PREZENTACIJA NOVOG KOBJEKTA UMESTO STAROG

PRONACI JOS PRIMERA ZA FOR LUP

NAUCITI CONTINUE STATEMENT I NAPRAVITI PRIMER https://www.w3schools.com/jsref/jsref_continue.asp

PRONAĆI STRANE TUTORIJALE, POGLEDATI BLOG KOG NAM JE GOGA POSLAO

PRONAĆI PRIMERE KUL I KOMPLEKSNIH MENIJA PURE JAVASCRIPT

PRONAĆI PRIMERE KUL I KOMPLEKSNIH IMG SLIDERA

PRONACI PRIMERE JEDNOSTAVNIH JAVASCRIPT IGRICA

PRONACI PRIMERE POKRETNIH IMG MENU-JA

PRONAĆI PRIMER TOČKA SREĆE html konzola
*/





