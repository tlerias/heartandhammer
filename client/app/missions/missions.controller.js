'use strict';

angular.module('heartHammerApp')
  .controller('MissionsCtrl', function ($scope, $state, $http, $stateParams, $anchorScroll, $location) {
    if ($stateParams.scrollTo) {
      $location.hash($stateParams.scrollTo);
      $anchorScroll();
    }

    $scope.events = [{
    	id: 'senior-center-2016',
    	anchorId: 'seniorcenter_2016_carecases_a',
    	imgId: 'cash_2016_img',
	    badgeClass: 'danger',
	    badgeIconClass: 'glyphicon-cutlery',
	    title: 'Chester Area Senior Housing',
	    date: 'April 2016',
	    location: 'Chester, New Jersey, United States',
	    content: 'The Chester Area Senior Housing was undergoing construction due to flooding. Not only were some members of the senior center displaced, but they lost their recreational center. In April 2016, Heart and Hammer brought dinner, music and line dancing to those living in the center to help lift morale. It was a blessing to hear how grateful the members were and to hear how we threw them the best party yet!'
	  }, {
    	id: 'soup-kitchen-2015',
    	anchorId: 'soupkitchen_2015_a',
    	imgId: 'soup-kitchen-2015_img',
	    badgeClass: 'warning',
	    badgeIconClass: 'glyphicon-cutlery',
	    title: 'Fraternite Notre Dame Mary of Nazareth House Soup Kitchen',
	    date: 'December 2015',
	    location: 'Harlem, New York, United States',
	    content: 'On December 23rd 2015, Heart and Hammer brought holiday cheer to the Fraternite Notre Dame Mary of Nazareth House Soup Kitchen in Harlem New York.  We were able to distribute 125 of our Care Cases, while serving over 250 people. Even the less fortunate deserve a warm meal in their belly during the cold holiday season. Heart and Hammer is proud to have met and serve the attendees of this soup kitchen.'
	  },
	  {
    	id: 'care-case-2015',
    	anchorId: 'carecases_2015_a',
    	imgId: 'mission_2015_holidays_img',
	    badgeClass: 'danger',
	    badgeIconClass: 'glyphicon-gift',
	    title: 'Holiday Care Cases',
	    date: 'November and December 2015',
	    location: 'New York City, Hoboken and Philadelphia, United States',
	    content: 'Holiday Season 2015, the Heart and Hammer team packed Care Cases for the homeless. Each case contained toiletries, healthy snacks, and additional goodies. We distributed hundreds of care cases in New York, New Jersey and Pennsylvania. The Care Cases project continued our mission of improving the lives of the poor through volunteerism and charitable giving with a focus on our local neighborhoods.'
	  },
	  {
    	id: 'mission_2015',
    	anchorId: 'mission_2015_a',
    	imgId: 'mission_2015_img',
	    badgeClass: 'warning',
	    badgeIconClass: 'glyphicon-globe',
	    title: 'Humanitarian Mission 2015',
	    date: 'June 2015',
	    location: 'Siquihor and Bohol, Philippines',
	    content: 'In June of 2015, the Heart and Hammer team distributed almost 1000 care packages serving 4 different communities in 2 different Islands of the Philippines. The first stop was in Maria, Siquihor, where 800 families considered as indigent and live in poverty in 21 Barangays (municipalities) received care packages. Next, the team went to Bohol and served 3 different Gawad Kalinga (Helping Hands) Villages including Dawies 80 families served, Tagbilaran 39 families served, and Baclayon 20 families served. Each family received 10 lbs. of rice, 2 cans of sardines, 2 ramen noodles, toiletries, personal hygiene kits, clothing, candy, pasta, toys, school supplies, teas, coffees, etc. for which was sorted, assembled, and distributed. Colgate also donated and shipped 1000 toothbrushes & toothpastes directly to the Philippines and was included in each of the care packages distributed.',
	    testimonials: [{
	    	quote: 'I appreciate everyone that supported our Heart and Hammer mission trip to the Philippines. Every donation put forth towards the mission trip greatly affects the lives of hundreds of Filipinos. It was an amazing experience witnessing first-hand all of the lives that were changed for the better. I got to personally hand out care packages that couldn’t be possible without all of the support to families and children, young and old. The care packages do not just affect an individual, but an entire family. And the greatest gift of all is seeing their appreciation through their beautiful smiles. The slightest show of support goes a very long way towards changing lives for the better. To the world, you may be on person…but to one person, you may be the world.',
	    	author: 'T.J. DiCesare',
	    	img: 'http://res.cloudinary.com/hgahynedu/image/upload/c_scale,h_200/v1445537664/jun2015_Tj_testimonial_abvgzz.jpg',
	    	imgAlt: 'TJ DiCesare - Testimonial Author'
	   	}]
	  },
	  {
    	id: 'mission_2013',
    	anchorId: 'mission_2013_a',
    	imgId: 'mission_2013_img',
	    badgeClass: 'danger',
	    badgeIconClass: 'glyphicon-globe',
	    title: 'Humanitarian Mission 2013',
	    date: 'February 2013',
	    location: 'Vigan City, Ilocos Sur, Philippines',
	    content: 'The team visited Vigan City\'s slum areas for three days and distributed 1,500 care packages total. 3,000 other families received other donated items. These care packages consisted of 2 kilos of rice, sardines, teas, face towels, candy/chocolates, toothbrushes, toothpaste, shampoo, soap, and a toy for each family. While providing humanitarian efforts at several <a href="http://en.wikipedia.org/wiki/Barangay" target="_new">barangays</a>, Heart & Hammer also distributed care packages at Philippine Medical Association in America\'s (PMAA) 501(c)(3) medical mission.'
	  },
	  {
    	id: 'mission_2012',
    	anchorId: 'mission_2012_a',
    	imgId: 'mission_2012_img',
	    badgeClass: 'warning',
	    badgeIconClass: 'glyphicon-globe',
	    title: 'Humanitarian Mission 2012',
	    date: 'February 2012',
	    location: 'Cebu City, Philippines',
	    content: 'Cebu City hosted Philippine Medical Association in America\'s (PMAA) 501(c)(3) medical mission where those in need were given surgical, medical, and dental services. As PMAA hosted thier medical mission,  Heart & Hammer provided humanitarian support as we distributed more than 2,500 care packages. In these care packages were medicine, vitamins, bowls, rice, sardines, noodles, cookies, candy, toys, bags, clothing and shoes. '
	  }
	  ];

});
