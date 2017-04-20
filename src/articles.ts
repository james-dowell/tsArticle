export interface IArticleBody {
    type: 'plaintext' | 'h2' | 'pull_quote';
    body: string;
}

export interface IArticle {
    id: number;
    title: string;
    body: IArticleBody[]
    cover: string;
    url: string;
}

export const ARTICLES: IArticle[] = [{
        "id": 0,
        "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        "body": [{
            "type": "plaintext",
            "body": "Frankfurter turducken sausage, landjaeger strip steak tail alcatra. Filet mignon kielbasa brisket tail biltong ham cow. Sausage beef ribs picanha flank chicken, boudin capicola pork loin salami ball tip swine bresaola pig andouille rump. T-bone cupim swine andouille brisket. Pastrami t-bone sausage short loin alcatra porchetta andouille pancetta landjaeger. Frankfurter chicken pork loin, spare ribs sirloin pig picanha rump meatloaf. Venison t-bone sirloin corned beef, cupim tail pastrami capicola tongue landjaeger beef."
        }, {
            "type": "plaintext",
            "body": "Cold-pressed VHS aesthetic YOLO, cray pop-up squid lo-fi swag direct trade. Drinking vinegar yuccie everyday carry kale chips. Hoodie ennui four dollar toast synth, occupy chillwave marfa affogato microdosing pour-over hashtag aesthetic. YOLO mixtape quinoa irony, sartorial vice wolf. Sriracha meh pug polaroid brooklyn, everyday carry blog. Small batch poutine portland mixtape dreamcatcher. Ramps helvetica mlkshk skateboard vinyl, pour-over everyday carry schlitz jean shorts food truck celiac."
        }, {
            "type": "h2",
            "body": "I hacked the Pentagon and all I got was this stupid t-shirt"
        }, {
            "type": "h2",
            "body": "You people wonder why I'm still single?"
        }, {
            "type": "plaintext",
            "body": "Landjaeger pork pastrami, doner bresaola jerky cupim cow. Biltong ham beef meatloaf, corned beef turkey landjaeger pork loin t-bone hamburger swine pork belly flank ground round. Pork belly pig meatloaf jowl short loin filet mignon, frankfurter porchetta brisket alcatra. Meatball landjaeger capicola pancetta prosciutto pork loin short ribs t-bone flank turkey short loin biltong shank pastrami tri-tip. Swine frankfurter pork, rump t-bone jowl hamburger brisket. Prosciutto boudin pork, short loin kevin ball tip pork loin spare ribs cupim brisket filet mignon."
        }, {
            "type": "pull_quote",
            "body": "If one examines the postdeconstructive paradigm of expression, one is faced with a choice: either accept modernist rationalism or conclude that expression is created by the masses."
        }, {
            "type": "plaintext",
            "body": "YOLO yr disrupt farm-to-table. Selvage listicle drinking vinegar, VHS cliche pug pinterest leggings before they sold out intelligentsia. Post-ironic next level schlitz retro butcher, gochujang put a bird on it normcore. Single-origin coffee knausgaard selfies kale chips slow-carb stumptown, photo booth sustainable tote bag fixie health goth seitan occupy. Twee hammock chia, raw denim drinking vinegar blog fanny pack poutine. Fanny pack authentic gluten-free taxidermy, chartreuse echo park hashtag shabby chic vinyl portland you probably haven't heard of them sartorial flannel. Cronut photo booth church-key next level."
        }],
        "cover": "http://ec2-52-17-96-12.eu-west-1.compute.amazonaws.com:8080/images/0.jpg",
        "url": "http://ec2-52-17-96-12.eu-west-1.compute.amazonaws.com:8080/article/0"
    },
    {
        "id": 1,
        "title": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        "body": [{
            "type": "plaintext",
            "body": "Pork loin pastrami bresaola cupim kevin, meatball short ribs drumstick jerky andouille shankle. Pork belly beef chuck chicken strip steak. Venison short loin meatloaf, pork chop porchetta bresaola leberkas doner pork loin. Ham hock prosciutto beef, jerky chuck short loin rump pastrami pork chop. Frankfurter pork chop biltong salami andouille meatloaf sirloin bacon chuck prosciutto pork loin brisket. Cow tenderloin pancetta, ground round ball tip frankfurter andouille short loin tri-tip strip steak."
        }, {
            "type": "plaintext",
            "body": "Bacon ipsum dolor amet beef ribs pork chop frankfurter porchetta. Tri-tip corned beef jowl, meatball fatback jerky ball tip filet mignon pork loin capicola meatloaf pig doner tongue t-bone. Jowl ground round strip steak alcatra pork chop short loin. Pork ham hock swine, pork chop prosciutto hamburger tail shoulder landjaeger ground round tenderloin short loin andouille."
        }, {
            "type": "h2",
            "body": "Going viral isn't a business model"
        }, {
            "type": "h2",
            "body": "Why, why, why didn't I break his legs?"
        }, {
            "type": "plaintext",
            "body": "Cold-pressed VHS aesthetic YOLO, cray pop-up squid lo-fi swag direct trade. Drinking vinegar yuccie everyday carry kale chips. Hoodie ennui four dollar toast synth, occupy chillwave marfa affogato microdosing pour-over hashtag aesthetic. YOLO mixtape quinoa irony, sartorial vice wolf. Sriracha meh pug polaroid brooklyn, everyday carry blog. Small batch poutine portland mixtape dreamcatcher. Ramps helvetica mlkshk skateboard vinyl, pour-over everyday carry schlitz jean shorts food truck celiac."
        }, {
            "type": "pull_quote",
            "body": "If one examines the postdeconstructive paradigm of expression, one is faced with a choice: either accept modernist rationalism or conclude that expression is created by the masses."
        }, {
            "type": "plaintext",
            "body": "Frankfurter turducken sausage, landjaeger strip steak tail alcatra. Filet mignon kielbasa brisket tail biltong ham cow. Sausage beef ribs picanha flank chicken, boudin capicola pork loin salami ball tip swine bresaola pig andouille rump. T-bone cupim swine andouille brisket. Pastrami t-bone sausage short loin alcatra porchetta andouille pancetta landjaeger. Frankfurter chicken pork loin, spare ribs sirloin pig picanha rump meatloaf. Venison t-bone sirloin corned beef, cupim tail pastrami capicola tongue landjaeger beef."
        }],
        "cover": "http://ec2-52-17-96-12.eu-west-1.compute.amazonaws.com:8080/images/1.jpg",
        "url": "http://ec2-52-17-96-12.eu-west-1.compute.amazonaws.com:8080/article/1"
    },
    {
        "id": 2,
        "title": "An unknown printer took a galley of type and scrambled it",
        "body": [{
            "type": "plaintext",
            "body": "Truffaut locavore next level, mlkshk meditation messenger bag quinoa mixtape sriracha. Health goth small batch fixie fanny pack distillery, chia green juice kitsch. Fingerstache blog kombucha paleo. Plaid portland cronut, stumptown truffaut VHS etsy fixie humblebrag bespoke biodiesel seitan readymade ugh neutra. You probably haven't heard of them vegan ramps, sustainable post-ironic everyday carry chia. Wolf pork belly affogato 8-bit asymmetrical, literally everyday carry marfa. Gentrify raw denim lomo blog gluten-free synth."
        }, {
            "type": "plaintext",
            "body": "Flipboard linking Journal Register hackgate digital circulation strategy, paywall hyperlocal explainer pay curtain newsonomics Knight Foundation Django Gannett 5 praise erasers & how to avoid them people formerly known as the audience RSS. we will make them pay digital first I love the Weather & Opera section process vs. product the audience knows more than I do shoot a photo copyboy Nick Denton semipermeable iPhone app, Twitter topples dictators the notional night cops reporter in Des Moines TweetDeck community mthomps Dayton for under $900 a day attracting young readers advertising, serendipity masthead abundance Alberto Ibarguen Ushahidi future of context gotta grok it before you rock it The Weekender."
        }, {
            "type": "h2",
            "body": "You people wonder why I'm still single?"
        }, {
            "type": "h2",
            "body": "You people wonder why I'm still single?"
        }, {
            "type": "plaintext",
            "body": "Pig beef filet mignon tongue strip steak, pork chop ham hock hamburger pork picanha. Porchetta beef pork chop pork belly spare ribs sirloin. Sausage kevin chuck pork belly, strip steak pork chop porchetta filet mignon doner beef ribs jerky. Shank cupim jerky, hamburger andouille biltong picanha porchetta prosciutto boudin ground round fatback drumstick brisket bresaola. Beef ribs turkey cupim kielbasa capicola."
        }, {
            "type": "pull_quote",
            "body": "If one examines the postdeconstructive paradigm of expression, one is faced with a choice: either accept modernist rationalism or conclude that expression is created by the masses."
        }, {
            "type": "plaintext",
            "body": "Craft beer swag flexitarian, letterpress pork belly fap leggings flannel polaroid kickstarter mustache slow-carb forage keytar. Schlitz before they sold out skateboard polaroid helvetica, plaid asymmetrical synth cold-pressed truffaut blue bottle chartreuse ugh 90's. Tilde yuccie williamsburg actually distillery, ugh roof party stumptown organic disrupt health goth wayfarers ennui austin. Street art pug affogato, narwhal slow-carb kitsch direct trade pork belly hashtag everyday carry four loko. Selvage cold-pressed XOXO cardigan, synth retro before they sold out raw denim pug ugh iPhone vinyl tumblr godard normcore. Austin pug yr, tilde twee dreamcatcher celiac keytar man bun literally. Butcher helvetica tacos, cronut banh mi aesthetic forage."
        }],
        "cover": "http://ec2-52-17-96-12.eu-west-1.compute.amazonaws.com:8080/images/2.jpg",
        "url": "http://ec2-52-17-96-12.eu-west-1.compute.amazonaws.com:8080/article/2"
    },
    {
        "id": 3,
        "title": "It has survived five centuries",
        "body": [{
            "type": "plaintext",
            "body": "Cold-pressed VHS aesthetic YOLO, cray pop-up squid lo-fi swag direct trade. Drinking vinegar yuccie everyday carry kale chips. Hoodie ennui four dollar toast synth, occupy chillwave marfa affogato microdosing pour-over hashtag aesthetic. YOLO mixtape quinoa irony, sartorial vice wolf. Sriracha meh pug polaroid brooklyn, everyday carry blog. Small batch poutine portland mixtape dreamcatcher. Ramps helvetica mlkshk skateboard vinyl, pour-over everyday carry schlitz jean shorts food truck celiac."
        }, {
            "type": "plaintext",
            "body": "Truffaut locavore next level, mlkshk meditation messenger bag quinoa mixtape sriracha. Health goth small batch fixie fanny pack distillery, chia green juice kitsch. Fingerstache blog kombucha paleo. Plaid portland cronut, stumptown truffaut VHS etsy fixie humblebrag bespoke biodiesel seitan readymade ugh neutra. You probably haven't heard of them vegan ramps, sustainable post-ironic everyday carry chia. Wolf pork belly affogato 8-bit asymmetrical, literally everyday carry marfa. Gentrify raw denim lomo blog gluten-free synth."
        }, {
            "type": "h2",
            "body": "Why, why, why didn't I break his legs?"
        }, {
            "type": "h2",
            "body": "You people wonder why I'm still single?"
        }, {
            "type": "plaintext",
            "body": "Landjaeger pork pastrami, doner bresaola jerky cupim cow. Biltong ham beef meatloaf, corned beef turkey landjaeger pork loin t-bone hamburger swine pork belly flank ground round. Pork belly pig meatloaf jowl short loin filet mignon, frankfurter porchetta brisket alcatra. Meatball landjaeger capicola pancetta prosciutto pork loin short ribs t-bone flank turkey short loin biltong shank pastrami tri-tip. Swine frankfurter pork, rump t-bone jowl hamburger brisket. Prosciutto boudin pork, short loin kevin ball tip pork loin spare ribs cupim brisket filet mignon."
        }, {
            "type": "pull_quote",
            "body": "If one examines the postdeconstructive paradigm of expression, one is faced with a choice: either accept modernist rationalism or conclude that expression is created by the masses."
        }, {
            "type": "plaintext",
            "body": "Frankfurter turducken sausage, landjaeger strip steak tail alcatra. Filet mignon kielbasa brisket tail biltong ham cow. Sausage beef ribs picanha flank chicken, boudin capicola pork loin salami ball tip swine bresaola pig andouille rump. T-bone cupim swine andouille brisket. Pastrami t-bone sausage short loin alcatra porchetta andouille pancetta landjaeger. Frankfurter chicken pork loin, spare ribs sirloin pig picanha rump meatloaf. Venison t-bone sirloin corned beef, cupim tail pastrami capicola tongue landjaeger beef."
        }],
        "cover": "http://ec2-52-17-96-12.eu-west-1.compute.amazonaws.com:8080/images/3.jpg",
        "url": "http://ec2-52-17-96-12.eu-west-1.compute.amazonaws.com:8080/article/3"
    },
    {
        "id": 4,
        "title": "It was popularised in the 1960s with the release of Letraset sheets",
        "body": [{
            "type": "plaintext",
            "body": "Flipboard linking Journal Register hackgate digital circulation strategy, paywall hyperlocal explainer pay curtain newsonomics Knight Foundation Django Gannett 5 praise erasers & how to avoid them people formerly known as the audience RSS. we will make them pay digital first I love the Weather & Opera section process vs. product the audience knows more than I do shoot a photo copyboy Nick Denton semipermeable iPhone app, Twitter topples dictators the notional night cops reporter in Des Moines TweetDeck community mthomps Dayton for under $900 a day attracting young readers advertising, serendipity masthead abundance Alberto Ibarguen Ushahidi future of context gotta grok it before you rock it The Weekender."
        }, {
            "type": "plaintext",
            "body": "Truffaut locavore next level, mlkshk meditation messenger bag quinoa mixtape sriracha. Health goth small batch fixie fanny pack distillery, chia green juice kitsch. Fingerstache blog kombucha paleo. Plaid portland cronut, stumptown truffaut VHS etsy fixie humblebrag bespoke biodiesel seitan readymade ugh neutra. You probably haven't heard of them vegan ramps, sustainable post-ironic everyday carry chia. Wolf pork belly affogato 8-bit asymmetrical, literally everyday carry marfa. Gentrify raw denim lomo blog gluten-free synth."
        }, {
            "type": "h2",
            "body": "You people wonder why I'm still single?"
        }, {
            "type": "h2",
            "body": "Going viral isn't a business model"
        }, {
            "type": "plaintext",
            "body": "Pig beef filet mignon tongue strip steak, pork chop ham hock hamburger pork picanha. Porchetta beef pork chop pork belly spare ribs sirloin. Sausage kevin chuck pork belly, strip steak pork chop porchetta filet mignon doner beef ribs jerky. Shank cupim jerky, hamburger andouille biltong picanha porchetta prosciutto boudin ground round fatback drumstick brisket bresaola. Beef ribs turkey cupim kielbasa capicola."
        }, {
            "type": "pull_quote",
            "body": "If neotextual conceptual theory holds, the works of Rushdie are postmodern."
        }, {
            "type": "plaintext",
            "body": "Bacon ipsum dolor amet beef ribs pork chop frankfurter porchetta. Tri-tip corned beef jowl, meatball fatback jerky ball tip filet mignon pork loin capicola meatloaf pig doner tongue t-bone. Jowl ground round strip steak alcatra pork chop short loin. Pork ham hock swine, pork chop prosciutto hamburger tail shoulder landjaeger ground round tenderloin short loin andouille."
        }],
        "cover": "http://ec2-52-17-96-12.eu-west-1.compute.amazonaws.com:8080/images/4.jpg",
        "url": "http://ec2-52-17-96-12.eu-west-1.compute.amazonaws.com:8080/article/4"
    },
    {
        "id": 5,
        "title": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        "body": [{
            "type": "plaintext",
            "body": "Pork loin pastrami bresaola cupim kevin, meatball short ribs drumstick jerky andouille shankle. Pork belly beef chuck chicken strip steak. Venison short loin meatloaf, pork chop porchetta bresaola leberkas doner pork loin. Ham hock prosciutto beef, jerky chuck short loin rump pastrami pork chop. Frankfurter pork chop biltong salami andouille meatloaf sirloin bacon chuck prosciutto pork loin brisket. Cow tenderloin pancetta, ground round ball tip frankfurter andouille short loin tri-tip strip steak."
        }, {
            "type": "plaintext",
            "body": "Frankfurter turducken sausage, landjaeger strip steak tail alcatra. Filet mignon kielbasa brisket tail biltong ham cow. Sausage beef ribs picanha flank chicken, boudin capicola pork loin salami ball tip swine bresaola pig andouille rump. T-bone cupim swine andouille brisket. Pastrami t-bone sausage short loin alcatra porchetta andouille pancetta landjaeger. Frankfurter chicken pork loin, spare ribs sirloin pig picanha rump meatloaf. Venison t-bone sirloin corned beef, cupim tail pastrami capicola tongue landjaeger beef."
        }, {
            "type": "h2",
            "body": "Why, why, why didn't I break his legs?"
        }, {
            "type": "h2",
            "body": "You people wonder why I'm still single?"
        }, {
            "type": "plaintext",
            "body": "Truffaut locavore next level, mlkshk meditation messenger bag quinoa mixtape sriracha. Health goth small batch fixie fanny pack distillery, chia green juice kitsch. Fingerstache blog kombucha paleo. Plaid portland cronut, stumptown truffaut VHS etsy fixie humblebrag bespoke biodiesel seitan readymade ugh neutra. You probably haven't heard of them vegan ramps, sustainable post-ironic everyday carry chia. Wolf pork belly affogato 8-bit asymmetrical, literally everyday carry marfa. Gentrify raw denim lomo blog gluten-free synth."
        }, {
            "type": "pull_quote",
            "body": "The main theme of the works of Rushdie is not theory, as the postdeconstructive paradigm of expression suggests, but neotheory."
        }, {
            "type": "plaintext",
            "body": "Landjaeger pork pastrami, doner bresaola jerky cupim cow. Biltong ham beef meatloaf, corned beef turkey landjaeger pork loin t-bone hamburger swine pork belly flank ground round. Pork belly pig meatloaf jowl short loin filet mignon, frankfurter porchetta brisket alcatra. Meatball landjaeger capicola pancetta prosciutto pork loin short ribs t-bone flank turkey short loin biltong shank pastrami tri-tip. Swine frankfurter pork, rump t-bone jowl hamburger brisket. Prosciutto boudin pork, short loin kevin ball tip pork loin spare ribs cupim brisket filet mignon."
        }],
        "cover": "http://ec2-52-17-96-12.eu-west-1.compute.amazonaws.com:8080/images/5.jpg",
        "url": "http://ec2-52-17-96-12.eu-west-1.compute.amazonaws.com:8080/article/5"
    },
    {
        "id": 6,
        "title": "A search for 'lorem ipsum' will uncover many web sites still in their infancy",
        "body": [{
            "type": "plaintext",
            "body": "Pork loin pastrami bresaola cupim kevin, meatball short ribs drumstick jerky andouille shankle. Pork belly beef chuck chicken strip steak. Venison short loin meatloaf, pork chop porchetta bresaola leberkas doner pork loin. Ham hock prosciutto beef, jerky chuck short loin rump pastrami pork chop. Frankfurter pork chop biltong salami andouille meatloaf sirloin bacon chuck prosciutto pork loin brisket. Cow tenderloin pancetta, ground round ball tip frankfurter andouille short loin tri-tip strip steak."
        }, {
            "type": "plaintext",
            "body": "Craft beer swag flexitarian, letterpress pork belly fap leggings flannel polaroid kickstarter mustache slow-carb forage keytar. Schlitz before they sold out skateboard polaroid helvetica, plaid asymmetrical synth cold-pressed truffaut blue bottle chartreuse ugh 90's. Tilde yuccie williamsburg actually distillery, ugh roof party stumptown organic disrupt health goth wayfarers ennui austin. Street art pug affogato, narwhal slow-carb kitsch direct trade pork belly hashtag everyday carry four loko. Selvage cold-pressed XOXO cardigan, synth retro before they sold out raw denim pug ugh iPhone vinyl tumblr godard normcore. Austin pug yr, tilde twee dreamcatcher celiac keytar man bun literally. Butcher helvetica tacos, cronut banh mi aesthetic forage."
        }, {
            "type": "h2",
            "body": "Why, why, why didn't I break his legs?"
        }, {
            "type": "h2",
            "body": "I hacked the Pentagon and all I got was this stupid t-shirt"
        }, {
            "type": "plaintext",
            "body": "Landjaeger pork pastrami, doner bresaola jerky cupim cow. Biltong ham beef meatloaf, corned beef turkey landjaeger pork loin t-bone hamburger swine pork belly flank ground round. Pork belly pig meatloaf jowl short loin filet mignon, frankfurter porchetta brisket alcatra. Meatball landjaeger capicola pancetta prosciutto pork loin short ribs t-bone flank turkey short loin biltong shank pastrami tri-tip. Swine frankfurter pork, rump t-bone jowl hamburger brisket. Prosciutto boudin pork, short loin kevin ball tip pork loin spare ribs cupim brisket filet mignon."
        }, {
            "type": "pull_quote",
            "body": "The main theme of the works of Rushdie is not theory, as the postdeconstructive paradigm of expression suggests, but neotheory."
        }, {
            "type": "plaintext",
            "body": "Landjaeger pork pastrami, doner bresaola jerky cupim cow. Biltong ham beef meatloaf, corned beef turkey landjaeger pork loin t-bone hamburger swine pork belly flank ground round. Pork belly pig meatloaf jowl short loin filet mignon, frankfurter porchetta brisket alcatra. Meatball landjaeger capicola pancetta prosciutto pork loin short ribs t-bone flank turkey short loin biltong shank pastrami tri-tip. Swine frankfurter pork, rump t-bone jowl hamburger brisket. Prosciutto boudin pork, short loin kevin ball tip pork loin spare ribs cupim brisket filet mignon."
        }],
        "cover": "http://ec2-52-17-96-12.eu-west-1.compute.amazonaws.com:8080/images/6.jpg",
        "url": "http://ec2-52-17-96-12.eu-west-1.compute.amazonaws.com:8080/article/6"
    },
    {
        "id": 7,
        "title": "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
        "body": [{
            "type": "plaintext",
            "body": "Pork loin pastrami bresaola cupim kevin, meatball short ribs drumstick jerky andouille shankle. Pork belly beef chuck chicken strip steak. Venison short loin meatloaf, pork chop porchetta bresaola leberkas doner pork loin. Ham hock prosciutto beef, jerky chuck short loin rump pastrami pork chop. Frankfurter pork chop biltong salami andouille meatloaf sirloin bacon chuck prosciutto pork loin brisket. Cow tenderloin pancetta, ground round ball tip frankfurter andouille short loin tri-tip strip steak."
        }, {
            "type": "plaintext",
            "body": "Truffaut locavore next level, mlkshk meditation messenger bag quinoa mixtape sriracha. Health goth small batch fixie fanny pack distillery, chia green juice kitsch. Fingerstache blog kombucha paleo. Plaid portland cronut, stumptown truffaut VHS etsy fixie humblebrag bespoke biodiesel seitan readymade ugh neutra. You probably haven't heard of them vegan ramps, sustainable post-ironic everyday carry chia. Wolf pork belly affogato 8-bit asymmetrical, literally everyday carry marfa. Gentrify raw denim lomo blog gluten-free synth."
        }, {
            "type": "h2",
            "body": "Why, why, why didn't I break his legs?"
        }, {
            "type": "h2",
            "body": "I hacked the Pentagon and all I got was this stupid t-shirt"
        }, {
            "type": "plaintext",
            "body": "Cold-pressed VHS aesthetic YOLO, cray pop-up squid lo-fi swag direct trade. Drinking vinegar yuccie everyday carry kale chips. Hoodie ennui four dollar toast synth, occupy chillwave marfa affogato microdosing pour-over hashtag aesthetic. YOLO mixtape quinoa irony, sartorial vice wolf. Sriracha meh pug polaroid brooklyn, everyday carry blog. Small batch poutine portland mixtape dreamcatcher. Ramps helvetica mlkshk skateboard vinyl, pour-over everyday carry schlitz jean shorts food truck celiac."
        }, {
            "type": "pull_quote",
            "body": "If one examines the postdeconstructive paradigm of expression, one is faced with a choice: either accept modernist rationalism or conclude that expression is created by the masses."
        }, {
            "type": "plaintext",
            "body": "Craft beer swag flexitarian, letterpress pork belly fap leggings flannel polaroid kickstarter mustache slow-carb forage keytar. Schlitz before they sold out skateboard polaroid helvetica, plaid asymmetrical synth cold-pressed truffaut blue bottle chartreuse ugh 90's. Tilde yuccie williamsburg actually distillery, ugh roof party stumptown organic disrupt health goth wayfarers ennui austin. Street art pug affogato, narwhal slow-carb kitsch direct trade pork belly hashtag everyday carry four loko. Selvage cold-pressed XOXO cardigan, synth retro before they sold out raw denim pug ugh iPhone vinyl tumblr godard normcore. Austin pug yr, tilde twee dreamcatcher celiac keytar man bun literally. Butcher helvetica tacos, cronut banh mi aesthetic forage."
        }],
        "cover": "http://ec2-52-17-96-12.eu-west-1.compute.amazonaws.com:8080/images/7.jpg",
        "url": "http://ec2-52-17-96-12.eu-west-1.compute.amazonaws.com:8080/article/7"
    },
    {
        "id": 8,
        "title": "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\"",
        "body": [{
            "type": "plaintext",
            "body": "Cold-pressed VHS aesthetic YOLO, cray pop-up squid lo-fi swag direct trade. Drinking vinegar yuccie everyday carry kale chips. Hoodie ennui four dollar toast synth, occupy chillwave marfa affogato microdosing pour-over hashtag aesthetic. YOLO mixtape quinoa irony, sartorial vice wolf. Sriracha meh pug polaroid brooklyn, everyday carry blog. Small batch poutine portland mixtape dreamcatcher. Ramps helvetica mlkshk skateboard vinyl, pour-over everyday carry schlitz jean shorts food truck celiac."
        }, {
            "type": "plaintext",
            "body": "Truffaut locavore next level, mlkshk meditation messenger bag quinoa mixtape sriracha. Health goth small batch fixie fanny pack distillery, chia green juice kitsch. Fingerstache blog kombucha paleo. Plaid portland cronut, stumptown truffaut VHS etsy fixie humblebrag bespoke biodiesel seitan readymade ugh neutra. You probably haven't heard of them vegan ramps, sustainable post-ironic everyday carry chia. Wolf pork belly affogato 8-bit asymmetrical, literally everyday carry marfa. Gentrify raw denim lomo blog gluten-free synth."
        }, {
            "type": "h2",
            "body": "You people wonder why I'm still single?"
        }, {
            "type": "h2",
            "body": "Why, why, why didn't I break his legs?"
        }, {
            "type": "plaintext",
            "body": "Cold-pressed VHS aesthetic YOLO, cray pop-up squid lo-fi swag direct trade. Drinking vinegar yuccie everyday carry kale chips. Hoodie ennui four dollar toast synth, occupy chillwave marfa affogato microdosing pour-over hashtag aesthetic. YOLO mixtape quinoa irony, sartorial vice wolf. Sriracha meh pug polaroid brooklyn, everyday carry blog. Small batch poutine portland mixtape dreamcatcher. Ramps helvetica mlkshk skateboard vinyl, pour-over everyday carry schlitz jean shorts food truck celiac."
        }, {
            "type": "pull_quote",
            "body": "If neotextual conceptual theory holds, the works of Rushdie are postmodern."
        }, {
            "type": "plaintext",
            "body": "Pig beef filet mignon tongue strip steak, pork chop ham hock hamburger pork picanha. Porchetta beef pork chop pork belly spare ribs sirloin. Sausage kevin chuck pork belly, strip steak pork chop porchetta filet mignon doner beef ribs jerky. Shank cupim jerky, hamburger andouille biltong picanha porchetta prosciutto boudin ground round fatback drumstick brisket bresaola. Beef ribs turkey cupim kielbasa capicola."
        }],
        "cover": "http://ec2-52-17-96-12.eu-west-1.compute.amazonaws.com:8080/images/8.jpg",
        "url": "http://ec2-52-17-96-12.eu-west-1.compute.amazonaws.com:8080/article/8"
    },
    {
        "id": 9,
        "title": "Various versions have evolved over the years, sometimes by accident, sometimes on purpose",
        "body": [{
            "type": "plaintext",
            "body": "Cold-pressed VHS aesthetic YOLO, cray pop-up squid lo-fi swag direct trade. Drinking vinegar yuccie everyday carry kale chips. Hoodie ennui four dollar toast synth, occupy chillwave marfa affogato microdosing pour-over hashtag aesthetic. YOLO mixtape quinoa irony, sartorial vice wolf. Sriracha meh pug polaroid brooklyn, everyday carry blog. Small batch poutine portland mixtape dreamcatcher. Ramps helvetica mlkshk skateboard vinyl, pour-over everyday carry schlitz jean shorts food truck celiac."
        }, {
            "type": "plaintext",
            "body": "Pig beef filet mignon tongue strip steak, pork chop ham hock hamburger pork picanha. Porchetta beef pork chop pork belly spare ribs sirloin. Sausage kevin chuck pork belly, strip steak pork chop porchetta filet mignon doner beef ribs jerky. Shank cupim jerky, hamburger andouille biltong picanha porchetta prosciutto boudin ground round fatback drumstick brisket bresaola. Beef ribs turkey cupim kielbasa capicola."
        }, {
            "type": "h2",
            "body": "Why, why, why didn't I break his legs?"
        }, {
            "type": "h2",
            "body": "I hacked the Pentagon and all I got was this stupid t-shirt"
        }, {
            "type": "plaintext",
            "body": "Landjaeger pork pastrami, doner bresaola jerky cupim cow. Biltong ham beef meatloaf, corned beef turkey landjaeger pork loin t-bone hamburger swine pork belly flank ground round. Pork belly pig meatloaf jowl short loin filet mignon, frankfurter porchetta brisket alcatra. Meatball landjaeger capicola pancetta prosciutto pork loin short ribs t-bone flank turkey short loin biltong shank pastrami tri-tip. Swine frankfurter pork, rump t-bone jowl hamburger brisket. Prosciutto boudin pork, short loin kevin ball tip pork loin spare ribs cupim brisket filet mignon."
        }, {
            "type": "pull_quote",
            "body": "If neotextual conceptual theory holds, the works of Rushdie are postmodern."
        }, {
            "type": "plaintext",
            "body": "Craft beer swag flexitarian, letterpress pork belly fap leggings flannel polaroid kickstarter mustache slow-carb forage keytar. Schlitz before they sold out skateboard polaroid helvetica, plaid asymmetrical synth cold-pressed truffaut blue bottle chartreuse ugh 90's. Tilde yuccie williamsburg actually distillery, ugh roof party stumptown organic disrupt health goth wayfarers ennui austin. Street art pug affogato, narwhal slow-carb kitsch direct trade pork belly hashtag everyday carry four loko. Selvage cold-pressed XOXO cardigan, synth retro before they sold out raw denim pug ugh iPhone vinyl tumblr godard normcore. Austin pug yr, tilde twee dreamcatcher celiac keytar man bun literally. Butcher helvetica tacos, cronut banh mi aesthetic forage."
        }],
        "cover": "http://ec2-52-17-96-12.eu-west-1.compute.amazonaws.com:8080/images/9.jpg",
        "url": "http://ec2-52-17-96-12.eu-west-1.compute.amazonaws.com:8080/article/9"
    }
]