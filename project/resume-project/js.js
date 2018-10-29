$(document).ready(function(){

    $("#buttonList").click(function(){
        $("#dataList").toggle();
    });

    $("#buttonAbout").click(function(){
        $("#typedtext").toggle();
    });
let myText = 'Look, if you had, one shot, or one opportunity To seize everything you ever wanted- <br> One moment <br> Would you capture it, or just let it slip?'
let sportText = '<span class="span">To win - </span>This what one must aim for.Whatever challenge that you take in life you must aim at winning the challenge,then only you can give your best. This has been named at number 10 here,but for professionals and for everyone,it has to be at number 1. <br> <span class="span">To learn new skills - </span> This states , you must always learn new things in life, at-least try to learn and if you are on a right track eventually you will learn it for sure. E.g. If you know 2 languages ,why not to try to learn 3rd language. What matters is your dedication and importantly discipline that you follow. <br><span class="span">To be a part of team - </span> One simply cannot live alone. As you’re in this world you are going to be a part of big team.The Society. You are part of this society, and your role is as important as the other member of the society, it will influence the whole society. Just like a soccer game or every other game, every player has it’s own role to play ,which will eventually take the team to a higher level.'   
let musicText = 'Music brings joy to my life and for something to bring joy to your life, that is truly something special. Music is something that can transcend from one generation to another and something that can bring families together. There is music for every thing you could think of, they sing "Happy Birthday" to you on your birthday, you walk down the aisle at your wedding to the "Wedding March" or something else like it, they play sad music at your funeral, and there are countless of other occasions where there is music.'   
let friendshipText = 'A best Friend is a person in whom u can confide everything. He is a your lifeline when you are sad, depressed and want to share something. When you need someone, after family your best friend will always be with you. You can share all you happiness and sorrows with him. When you want to share something but not with your parents then your best friend is the one whom you can tell. He is the person who can be blindly be trusted. It is Important to  have a best friends in Life.'   
let ecoText = 'Existence in the world is made up of living and non living things. The two groups have to coexist in order to share the resources that are available within the environmental ecosystem. To understand about this mutual co relationship we need to study and understand ecology.'
let ecoText2 = "Ecology is featuring as the key talk in world forums as the world tries to mitigate the destruction that is already rife in the ecosystem. Talks and forums are held to push for the world to embrace ecology, reserve and conserve the ecosystem. Kyoto protocol, green energy, Energy star appliances, Renewable energy, animal and energy conservation, anti poaching, equitable mineral allocation, good and ethical mining practices have become norm in the current ecosystem."    
let restText = 'Sometimes mustering up the motivation to work out is a challenge. But other times, like when we’re really determined to reach a goal or we feel like we need to make up for lost time, the opposite is true. <br> Sometimes we take on that frantic “must work out every day” mindset and completely forget that one of the most important parts of exercising effectively is giving our bodies time to recover.'
    $( "#em-text" ).html(myText);
    $( "#p-sport" ).html(sportText);
    $( "#p-music" ).html(musicText);
    $( "#friendly" ).html(friendshipText);
    $( "#p-eco" ).html(ecoText);
    $( "#p-eco2" ).html(ecoText2);
    $( "#p-rest" ).html(restText);


		function leftAnimation(a){
		 		anime({
			  targets: a,
			  translateX: 250,
			  opacity: 1
			})
		}; 

		function rightAnimation(b){
		    anime({
			  targets: b,
			  translateX: -150,
			  opacity: 1
			})
		}; 


      $(window).scroll(()=>{

				if($(this).scrollTop()>=1400){
					$('#boxUp').addClass('show-element');
		  		leftAnimation(".left-box-music");
		  		}
			  if($(this).scrollTop()>=2500){
					rightAnimation(".right-box-sport");
			  	}
			  if($(this).scrollTop()>=50){
					leftAnimation(".my-card");
			  	}
			  if($(this).scrollTop()>=3100){
					leftAnimation(".friends-left-block");
			  	}
			  if($(this).scrollTop()>=3700){
					rightAnimation(".right-box-eco");
			  	}
		  	else {
		  		$('#boxUp').removeClass('show-element')
		  		$( ".card-title" ).animate({ "top": "0" }, "fast" );
		  		$( ".photo-box" ).animate({ "right": "0" }, "fast" );
		  	}
		  });
		      $('#boxUp').on("click",function(){
		      $(window).scrollTop(0);
			});

		});

function info(name, Sname, year, phone, email, city){
	return {
		name, Sname, year, phone, email, city
	}
}
 
const infoMySelf = [
	info('Orest', 'Vasylenko', '30.08.1995', +380987118301, 'myrooom911@gmail.com', 'Lviv'
		)
]

new Vue ({
	el: '#app',
	data: {
		infoMySelf: infoMySelf,
		info: infoMySelf[0],
		logs: [],
		search: ''
	},
	methods: {
		
	},
	computed: {

	},

	filters: {
		
	}

})

var aText = new Array(
"Привіт, мені 23 і я прагну розвиватися в напрямку веб розробки. Ще з дитинства мене цікавив механізм роботи програмного забезпечення, програм, ігор, тощо... ", 
"Сьогодні, у мене є чітко поставлені цілі, методи, завдання, і що найважливіше - шанс. Шанс, який я використаю і досягну поставленної мети. Робота в ІТ-компанії - це те що потрібно мені. Можливо я той, хто потрібен Вам?!"
);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
 
function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");
 
 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "|";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 500);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}


typewriter();
