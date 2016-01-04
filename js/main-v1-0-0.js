var app = document.querySelector('#app');

app.getData = function() {
	return app.data.menu;
}

app.addEventListener('dom-change', function() {
});

app.openTCs = function() {
	var modal = document.querySelector('#tcs');
	modal.open();
}

app.openContact = function() {
	var modal = document.querySelector('#contact');
	modal.open();
}

app.closeDrawer = function() {
	var drawer = document.querySelector('paper-drawer-panel');
	drawer.closeDrawer();
}

app.data = {
	"menu" : {
		//"name": "Menu",
		"items": [
			{
				"items": [
					{ "text": "Home", "link": "/", "on-click": "app.closeDrawer();" },
				]
			},
			{
				"name": "Collections",
				"items": [
					{
						"name": "Summer 2016 - SCOOP",
						"items": [
							{ "text": "Ready to Wear", "link": "#/summer-2016", "on-click": "app.closeDrawer();" },
							{ "text": "Accessories", "link": "#/summer-2016/accessories", "on-click": "app.closeDrawer();" }
						],
					},

					{
						"name": "Winter 2015",
						"items": [
							{ "text": "Ready to Wear", "link": "#/winter-2015", "on-click": "app.closeDrawer();" },
							{ "text": "Accessories", "link": "#/winter-2015/accessories", "on-click": "app.closeDrawer();" }
						],
					}
				]
			},

			{
				"name": "Info",
				"items": [
					{ "text": "Contact", "on-click": "app.closeDrawer(); app.openContact();" },
					{ "text": "Legal Terms", "on-click": "app.closeDrawer(); app.openTCs();" }
				]
			},

			{
				"icon": "language",
				"items": [
					{ "text": "English", "link": "http://rose-et-sophie.com" },
					//s{ "text": "Français", "link": "http://rose-et-sophie.fr" }
				],
				"collapsable": true,
				"opened": false
			}
		]
	},

	"home" : {
		"slides": [
			{
				url: "/img/home/scoop-banner.jpg",
				//text: "first",
				link: "http://www.scoop-international.com"
			},
		]
	},

	"winter-2015" : {
		"slides": [
			{
				url: "/img/collection/winter-2015/hero1.jpg",
				text: "1. \"AMAZONE\" SKIRT AND \"LENA\" JACKET",
				link: "#/winter-2015/1"
			},
			{
				url: "/img/collection/winter-2015/hero2.jpg",
				text: "2. \"RIO BRAVO\" WAISTCOAT AND \"AMAZONE\" SKIRT",
				link: "#/winter-2015/2"
			},
			{
				url: "/img/collection/winter-2015/hero3.jpg",
				text: "3. \"DANUBE\" TOP AND \"AMAZONE\" SKIRT",
				link: "#/winter-2015/3"
			},
			{
				url: "/img/collection/winter-2015/hero4.jpg",
				text: "4. \"TAGE\" TOP AND \"AMAZONE\" SKIRT",
				link: "#/winter-2015/4"
			},
			{
				url: "/img/collection/winter-2015/hero5.jpg",
				text: "5. \"TAGE\" TOP AND \"PARANA\" SHORTS",
				link: "#/winter-2015/5"
			},
			{
				url: "/img/collection/winter-2015/hero6.jpg",
				text: "6. \"DANUBE\" TOP AND \"RIO GRANDE\" TROUSERS",
				link: "#/winter-2015/6"
			},
			{
				url: "/img/collection/winter-2015/hero7.jpg",
				text: "7. \"ESCAPADE\" TRENCH COAT",
				link: "#/winter-2015/7"
			},
			{
				url: "/img/collection/winter-2015/hero8.jpg",
				text: "8. \"ABEILLE\" COAT DRESS WITH BLACK UNDERDRESS",
				link: "#/winter-2015/8"
			},
		],

		"ensembles" : {
			"1" : {
				"text": "\"Lena\" Quilted Lambskin and Mink Jacket (€3,900), \"Amazone\" Lambskin Skirt (€1,100)",
				"views": [
					{
						"mainurl": "/img/collection/winter-2015/1/all_front.jpg",
						"otherurl": "/img/collection/winter-2015/1/all_back.jpg"
					},
					{
						"mainurl": "/img/collection/winter-2015/1/bottom_front.jpg",
						"otherurl": "/img/collection/winter-2015/1/bottom_back.jpg"
					}
				]
			},
			"2" : {
				"text": "\"Rio Bravo\" Lambskin Waistcoat (€570), \"Amazone\" Lambskin Skirt (€1,100)",
				"views": [
					{
						"mainurl": "/img/collection/winter-2015/2/all_front.jpg",
						"otherurl": "/img/collection/winter-2015/2/all_back.jpg"
					},
					{
						"mainurl": "/img/collection/winter-2015/1/bottom_front.jpg",
						"otherurl": "/img/collection/winter-2015/1/bottom_back.jpg"
					}
				]
			},
			"3" : {
				"text": "\"Danube\" Lambskin Top (€900), Detatchable Blue Astrakhan Fur Collar (€180), \"Amazone\" Lambskin Skirt (€1,100), Black or Honey Lambskin Belt, 2cm (€180)",
				"views": [
					{
						"mainurl": "/img/collection/winter-2015/3/all_front.jpg",
						"otherurl": "/img/collection/winter-2015/3/all_back.jpg"
					},
					{
						"mainurl": "/img/collection/winter-2015/1/bottom_front.jpg",
						"otherurl": "/img/collection/winter-2015/1/bottom_back.jpg"
					}
				]
			},
			"4" : {
				"text": "\"Tage\" Lambskin Top (€700), Detatchable Blue or Brown Astrakhan Fur Collar (€180), \"Amazone\" Lambskin Skirt (€1,100)",
				"views": [
					{
						"mainurl": "/img/collection/winter-2015/4/all_front.jpg",
						"otherurl": "/img/collection/winter-2015/4/all_back.jpg"
					},
					{
						"mainurl": "/img/collection/winter-2015/1/bottom_front.jpg",
						"otherurl": "/img/collection/winter-2015/1/bottom_back.jpg"
					}
				]
			},
			"5" : {
				"text": "\"Tage\" Lambskin Top (€700), Detatchable Brown Astrakhan Fur Collar (€180), \"Parana\" Lambskin Shorts (€450)",
				"views": [
					{
						"mainurl": "/img/collection/winter-2015/5/all_front.jpg",
						"otherurl": "/img/collection/winter-2015/5/all_back.jpg"
					},
				]
			},
			"6" : {
				"text": "\"Danube\" Lambskin Top (€900), Detatchable Blue or Brown Astrakhan Fur Collar (€180), \"Rio Grande\" Lambskin Trousers (€750)",
				"views": [
					{
						"mainurl": "/img/collection/winter-2015/6/all_front.jpg",
						"otherurl": "/img/collection/winter-2015/6/all_back.jpg"
					},
				]
			},
			"7" : {
				"text": "\"Escapade\" Leather Trench Coat (€1,800), Detatchable Fox Fur Collar (€850)",
				"views": [
					{
						"mainurl": "/img/collection/winter-2015/7/with_front.jpg",
						"otherurl": "/img/collection/winter-2015/7/with_back.jpg"
					},
					{
						"mainurl": "/img/collection/winter-2015/7/without_front.jpg",
						"otherurl": "/img/collection/winter-2015/7/without_back.jpg"
					}
				]
			},
			"8" : {
				"text": "\"Abeille\" Leather Dress Coat (€950) and Black Silk Crêpe Under-dress (together: €1,350), Detatchable Honey Yellow Astrakhan Fur Collar (€180)",
				"views": [
					{
						"mainurl": "/img/collection/winter-2015/8/with_front.jpg",
						"otherurl": "/img/collection/winter-2015/8/with_back.jpg"
					},
					{
						"mainurl": "/img/collection/winter-2015/8/without_front.jpg",
						"otherurl": "/img/collection/winter-2015/8/without_back.jpg"
					}
				]
			},
		},

		"accessories" : {
			"slides": [
				{
					url: "/img/collection/winter-2015/accessories/fox_collar.jpg",
					text: "Detatchable Fox Fur Collar €850",
					link: ""
				},
				{
					url: "/img/collection/winter-2015/accessories/belts.jpg",
					text: "Black or Honey Lambskin Belt (2cm) €180, Calfskin Belt (4cm) €230, Lambskin Belt (4cm) €250",
					link: ""
				},
				{
					url: "/img/collection/winter-2015/accessories/astrakhan_collar.jpg",
					text: "Detatchable Blue or Brown Astrakhan Fur Collar €180",
					link: ""
				},
				{
					url: "/img/collection/winter-2015/accessories/ruffled_bag.jpg",
					text: "Brown Ruffled Lambskin Bag, Leather Interior €600",
					link: ""
				},
			],
		}
	},

	"summer-2016" : {
		"slides" : [
			{
				url: "/img/collection/summer-2016/1/full_trench_congo_front.jpg",
				text: "1. \"Congo\" Trench Coat",
				link: "#/summer-2016/1"
			},
			{
				url: "/img/collection/summer-2016/2/full_casamance_parana_front.jpg",
				text: "2. \"Casamance\" Sleeveless Top, \"Parana\" Lambskin Shorts",
				link: "#/summer-2016/2"
			},
			{
				url: "/img/collection/summer-2016/3/full_safari_segura_front.jpg",
				text: "3. Safari Lambskin Jacket, \"Segura\" Pirate Trousers",
				link: "#/summer-2016/3"
			},
			{
				url: "/img/collection/summer-2016/4/full_tage_parana_pouch_front.jpg",
				text: "4. \"tage\" Short Sleeve Top, \"Parana\" Lambskin Shorts",
				link: "#/summer-2016/4"
			},
			{
				url: "/img/collection/summer-2016/5/full_caballitos_front.jpg",
				text: "5. \"Caballitos\" Dress",
				link: "#/summer-2016/5"
			},
			{
				url: "/img/collection/summer-2016/6/full_tocantin_front.jpg",
				text: "6. Midnight Blue \"Tocantin\" Blazer",
				link: "#/summer-2016/6"
			},
			{
				url: "/img/collection/summer-2016/7/full_abeille_front.jpg",
				text: "7. \"Abeille\" Leather Dress Coat, Black Silk Crêpe Under-dress",
				link: "#/summer-2016/7"
			},
			{
				url: "/img/collection/summer-2016/8/top_casamance_segura_front.jpg",
				text: "8. \"Casamance\" Sleeveless Top, \"Segura\" Pirate Trousers",
				link: "#/summer-2016/8"
			},
		],

		"ensembles" : {
			"1" : {
				"text": "\"Congo\" Trench Coat (€1,800)",
				"views": [
					{
						"mainurl": "/img/collection/summer-2016/1/full_trench_congo_front.jpg",
					},
					{
						"mainurl": "/img/collection/summer-2016/1/detail_trench_congo_front.jpg",
						"otherurl": "/img/collection/summer-2016/1/detail_trench_congo_back.jpg"
					}
				]
			},
			"2" : {
				"text": "\"Casamance\" Sleeveless Top (€480), \"Parana\" Lambskin Shorts (€450)",
				"views": [
					{
						"mainurl": "/img/collection/summer-2016/2/full_casamance_parana_front.jpg",
					},
					{
						"mainurl": "/img/collection/summer-2016/2/detail_casamance_parana_midnight_blue_pouch_front.jpg",
					}
				]
			},
			"3" : {
				"text": "Safari Lambskin Jacket (€1,500), \"Segura\" Pirate Trousers (€690)",
				"views": [
					{
						"mainurl": "/img/collection/summer-2016/3/full_safari_segura_front.jpg",
					},
					{
						"mainurl": "/img/collection/summer-2016/3/top_safari_front.jpg",
					}
				]
			},
			"4" : {
				"text": "\"Tage\" Short Sleeve Top (€700), \"Parana\" Lambskin Shorts (€450)",
				"views": [
					{
						"mainurl": "/img/collection/summer-2016/4/full_tage_parana_pouch_front.jpg",
					},
					{
						"mainurl": "/img/collection/summer-2016/4/detail_tage_parana_front.jpg",
					}
				]
			},
			"5" : {
				"text": "\"Caballitos\" Embroidered Dress (€900)",
				"views": [
					{
						"mainurl": "/img/collection/summer-2016/5/full_caballitos_front.jpg",
					},
					{
						"mainurl": "/img/collection/summer-2016/5/detail_caballitos_front.jpg",
					}
				] 
			},
			"6" : {
				"text": "Midnight Blue \"Tocantin\" Blazer (€1200)",
				"views": [
					{
						"mainurl": "/img/collection/summer-2016/6/full_tocantin_front.jpg",
					},
				] 
			},
			"7" : {
				"text": "\"Abeille\" Leather Dress Coat (€950) and Black Silk Crêpe Under-dress (together: €1,350)",
				"views": [
					{
						"mainurl": "/img/collection/summer-2016/7/full_abeille_front.jpg",
					},
				] 
			},
			"8" : {
				"text": "\"Casamance\" Sleeveless Top (€480), \"Segura\" Pirate Trousers (€690)",
				"views": [
					{
						"mainurl": "/img/collection/summer-2016/8/top_casamance_segura_front.jpg",
					},
				] 
			},
			
		},

		"accessories" : {
			"slides": [
				{
					url: "/img/collection/summer-2016/accessories/pouch.jpg",
					text: "Pouch in Blue, Gray or Midnight Blue €200",
					link: ""
				},
			],
		}
	},
};

