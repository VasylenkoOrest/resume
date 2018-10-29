function element(name, model, owner, year, phone, image, price, info){
	return {
		name, model, owner, year, phone, image, price, info
	}
}
 
const goods = [
	element('Iphone', ' X', 'Igor', 2017, +390960452488, 'img/iphone-X.png', 11999,
		'The iPhone X is Apple`s new flagship 10th anniversary iPhone featuring a 5.8-inch OLED display, facial recognition and 3D camera functionality, a glass body, and an A11 Bionic processor. Launched November 3, 2017.'),
	element('Samsung', ' a7', 'Max', 2015, +390942452488, 'img/samsung-a7.jpg', 4212,
		'The Samsung Galaxy A7 (2017) is an Android high to midrange smartphone produced by Samsung Electronics. It was announced on January 2, 2017, along with Samsung Galaxy A3 (2017) and Samsung Galaxy A5 (2017). This move marks Samsungs first product launch since the discontinuation of the Galaxy Note 7 back on October 2016'),
	element('Meizu', ' m3 note', 'Oleg', 2014, +3909522152, 'img/meizu-m3-note.png', 3312,
		'Meizu m3 note smartphone was launched in April 2016. The phone comes with a 5.50-inch touchscreen display with a resolution of 1080 pixels by 1920 pixels at a PPI of 403 pixels per inch. Meizu m3 note price in India starts from Rs. 5,290.'),
	element('Alcatel', ' 1x', 'Ivanka', 2005, +390942452488, 'img/alcatel_1x.png', 812,
		'The 1 Series family, home of the best starter smartphones, makes the high-end 18:9 display within anyone’s reach. With its immersive FullView display, suede, soft touch and metal brushed flagship-like design, and social-ready camera abilities such as Photo booth, Instant Collage and Social Square, it’s like getting the latest stuff - without spending the big money.'),
	element('Nokia', ' 3250', 'Lilya', 2009, +3909522152, 'img/nokia-3250-.jpg', 1322,
		'The Nokia 3250 (code-named Thunder) is a smartphone running Symbian OS v9.1 (S60 3rd Edition), announced on September 26, 2005.[1] It features a unique `twist` design that transforms the traditional phone keypad into a camera (90° CW/CCW) and dedicated music control keys (180° CCW). It was marketed as a music phone and can store up to 2 gigabytes of music (500 songs) and other data thanks to a microSD memory card slot, and features a two-megapixel camera as well as other smartphone capabilities.')
]



new Vue ({
	el: '#app',
	data: {
		goods: goods,
		element: goods[0],
	 	selectGoodsIndex: 0,
	 	textShow: false,
		 modalVisibility: false
	},
	methods: {
		selectGoods: function(i) {
			this.element = goods[i]
			this.selectGoodsIndex = i
		}
	},
	computed: {
		textVisibility() {
			return this.textShow ? 'Hide details' : 'Show details'
		}
	},

	filters: {
		
	}

})