"use strict"


/** ============================================================================
 * 
 * Project filters: the following project filter tags are allowed, so far.
 * 
 * A bitwise flag number representing the specific tags on any given project
 * 
 * e.g.     0001 -> HTML/CSS
 *          0010 -> Javascript
 *          0100 -> Wordpress
 * 
 *          0101 -> HTMLCSS and Wordpress
 *          etc.
*/
const TAG_CHECKNONE         = 0x00;
const TAG_HTMLCSS           = 0x01;
const TAG_JAVASCRIPT        = 0x02;
const TAG_WORDPRESS         = 0x04;
const TAG_ONLINESTORE       = 0x08;
const TAG_BCIT              = 0x10;
const TAG_EDUCATIONAL       = 0x20;
const TAG_CHECKALL
    = TAG_HTMLCSS | TAG_JAVASCRIPT | TAG_WORDPRESS | TAG_ONLINESTORE | TAG_BCIT | TAG_EDUCATIONAL;

// An array of the flags for iteration
const chkFilterFlag = [
    TAG_CHECKNONE,
    TAG_HTMLCSS,
    TAG_JAVASCRIPT,
    TAG_WORDPRESS,
    TAG_ONLINESTORE,
    TAG_BCIT,
    TAG_EDUCATIONAL
];

// Each entry of filterIcon contains a pair of strings: a link to the icon image, and the alt text
const filterIcon = [];
filterIcon[TAG_CHECKALL] = null;
filterIcon[TAG_HTMLCSS] =
    [
        "./images/icon_htmlcss.gif",
        "Icon for HTML/CSS project"
    ];
filterIcon[TAG_JAVASCRIPT] =
    [
        "./images/icon_javascript.gif",
        "Icon for Javascript project"
    ];
filterIcon[TAG_WORDPRESS] =
    [
        "./images/icon_wordpress.gif",
        "Icon for WordPress project"
    ];
filterIcon[TAG_ONLINESTORE] =
    [
        "./images/icon_onlinestore.gif",
        "Icon for Online Store project"
    ];
filterIcon[TAG_BCIT] =
    [
        "./images/icon_bcit.gif",
        "Icon for BCIT project"
    ];
filterIcon[TAG_EDUCATIONAL] =
    [
        "./images/icon_educational.gif",
        "Icon for Educational project"
    ];

// Create a DOM icon element; filterFlag parameter is a chkFilterFlag entry
function createIcon(filterFlag) {

    if (!filterFlag) {
        return null;
    }
    
    const newIcon = document.createElement("img");
    newIcon.setAttribute("src", filterIcon[filterFlag][0]);
    newIcon.setAttribute("alt", filterIcon[filterFlag][1]);
    newIcon.setAttribute("width", "20");
    newIcon.setAttribute("height", "20");
    newIcon.classList.add("icon");
    return newIcon;

}


/** ============================================================================
 * 
 * ProjectTemplate class
 * 
 * A class that houses the details and DOM element of a single project built by Dan Blain
 * 
 * -- Fields
 * node: A reference to the DOM object, an article.class, that displays the project details on the webpage
 * name: The project name
 * tags: A combination of TAG_ flags. The project will display when the user filters by that tag
 * descr: A description of the project
 * image: An image representing the project. Currently fixed at 300px by 200px
 * imgAlt: The alt text for the aforementioned image
 * newDivNode: A reference to a div, a catch-all element in case the user wants to include something else in the project presentation
 * 
 */
class ProjectTemplate {

    constructor(newId, newName, newTags, newDescr, newLink, newImage, imgAlt, newImageHoriz, newDivNode=null) {

        // Store project fields
        this.id = newId;
        this.name = newName;
        this.tags = newTags;
        this.descr = newDescr;
        this.link = newLink;
        this.image = newImage;
        this.imgAlt = imgAlt;
        this.imageHoriz = newImageHoriz;

        // Create the Project DOM node, a clickable link with an article.project child
        let newChild, newGrandchild;
        let newProject = document.createElement("a");
        newProject.setAttribute("href", this.link);        
        newChild = document.createElement("article");
        newProject.classList = "project";
        newProject.setAttribute("id", "proj-" + newId);

        // Store in the object and move the variables down one generation
        newProject.appendChild(newChild);
        this.node = newProject;
        newProject = newChild;
    
        // Add the project images, vertical by default but also horizontal for responsiveness
        newChild = document.createElement("div");
        newChild.classList = "projectMarquee";
            // Add the project image (normal)
            newGrandchild = document.createElement("img");
            newGrandchild.setAttribute("src", newImage);
            newGrandchild.setAttribute("alt", imgAlt);
            newGrandchild.classList = "vertical";
            newChild.appendChild(newGrandchild);
            // Add the horizontal project image
            newGrandchild = document.createElement("img");
            newGrandchild.setAttribute("src", newImageHoriz);
            newGrandchild.setAttribute("alt", imgAlt);
            newGrandchild.classList = "horizontal";
            newChild.appendChild(newGrandchild);
        newProject.appendChild(newChild);


        // Add a div (content spacer)
        newChild = document.createElement("div");

            // Add the project name
            newGrandchild = document.createElement("h3");
            newGrandchild.textContent = newName;
            newChild.appendChild(newGrandchild);

            // Add an unordered list for the project filter icons
            newGrandchild = document.createElement("ul");
            chkFilterFlag.forEach((item) => {
                if (item & newTags) {
                    let newIcon;
                    if (newIcon = createIcon(item)) {
                        newGrandchild.appendChild(createIcon(item));
                    }
                }
            })
            newChild.appendChild(newGrandchild);

        newProject.appendChild(newChild);
    
    
        // Add the project description
        newChild = document.createElement("p");
        newChild.textContent = newDescr;
        newProject.appendChild(newChild);
    
        // Add a div node, if any. Extra elements I haven't accounted for
        if (newDivNode != null) {
            newProject.appendChild(newDivNode);
        }

    }

}


/** ============================================================================
 * 
 * projectCatalogue array
 * 
 * The sole purpose is to maintain in memory a complete list of Daniel Blain's projects.
 * 
 * WARNING: Do not remove items from this array while presenting the content to the user. That's what the filters are for.
 * 
 */

const projectCatalogue = [

    //========================================
    //==================== HTML/CSS Projects

    // Country Website project
    new ProjectTemplate(
        "countryWebsite",
        "Country Website",
        TAG_HTMLCSS | TAG_BCIT | TAG_EDUCATIONAL,
        "Natus quia, illum veritatis nostrum ullam iusto porro adipisci aspernatur facilis mollitia rem vitae nulla eligendi. Nesciunt, magnam. Dignissimos adipisci atque quas asperiores molestias magnam! Suscipit rem iusto autem. Accusamus.",
        "Sudania/",
        "./images/map_showing_sudan.gif",
        "An artistic map of Sudan",
        "./images/map_showing_sudan_horiz.gif",
    ),

    // Business Website project
    new ProjectTemplate (
        "businessWebsite",
        "Business Website",
        TAG_HTMLCSS | TAG_BCIT,
        "Ducimus, nostrum! Architecto, accusamus amet? Quia, sapiente iste molestiae, ipsa debitis veritatis voluptas asperiores odit eum magnam tempora, ad exercitationem a soluta id sequi error. Nesciunt commodi quas sed recusandae!",
        "#",
        "./images/shaking_hands.gif",
        "Business associates shaking hands",
        "./images/shaking_hands_horiz.gif",
    ),

    //========================================
    //==================== Javascript Projects

    new ProjectTemplate (
        "thisPortfolio",
        "This Portfolio",
        TAG_JAVASCRIPT | TAG_BCIT | TAG_EDUCATIONAL,
        "Veritatis dolorum illo nam eaque. Dicta ad minus modi porro saepe, eligendi impedit animi ratione temporibus provident in aspernatur assumenda non deleniti sed vitae doloribus eius sunt ipsa officiis. Rerum.",
        "#",
        "./images/engineer_desk_with_tablet.gif",
        "Engineer's desk with tablet",
        "./images/engineer_desk_with_tablet_horiz.gif",
    ),

    new ProjectTemplate (
        "danTyper",
        "DanTyper",
        TAG_JAVASCRIPT | TAG_BCIT | TAG_EDUCATIONAL,
        "Debitis accusantium neque vitae, doloremque tempora quo similique iusto expedita vero ratione quod quis dolores quidem voluptates ipsa sed aliquid ea animi perspiciatis incidunt dicta eaque a? Aspernatur, illo non!",
        "#",
        "./images/exploded_keyboard.gif",
        "A pile of keys removed from a computer keyboard",
        "./images/exploded_keyboard_horiz.gif",
    ),

    new ProjectTemplate (
        "movieDatabase",
        "Movie Database",
        TAG_JAVASCRIPT | TAG_BCIT | TAG_EDUCATIONAL,
        "Architecto ratione dignissimos eos amet distinctio quisquam cum, vero quam voluptates exercitationem repudiandae quidem perferendis libero a. Hic quo veritatis laboriosam accusamus nihil odit officiis modi voluptate. Quos, aperiam vitae?",
        "#",
        "./images/midnight_cinema.gif",
        "A cinema with neon-lit marquee at midnight",
        "./images/midnight_cinema_horiz.gif",
    ),

    //========================================
    //==================== WordPress Sites

    new ProjectTemplate (
        "vancouver",
        "Vancouver",
        TAG_WORDPRESS | TAG_BCIT,
        "Eum quam libero molestias est quos provident, labore tempore iusto recusandae aut iure ducimus expedita, quae maxime quod ipsa optio temporibus quas aliquid porro soluta cumque facilis? Beatae, aliquid error?",
        "#",
        "./images/science_world_sphere_and_bay.gif",
        "The bay in front of Science World in West Vancouver",
        "./images/science_world_sphere_and_bay_horiz.gif",
    ),

    new ProjectTemplate (
        "mindset",
        "Mindset",
        TAG_WORDPRESS | TAG_BCIT,
        "Sequi quod voluptatem iusto natus sed ab id illum repudiandae accusamus, nisi eligendi maxime possimus itaque fugit deserunt est deleniti eos pariatur unde a, nulla esse fugiat dolorum? Optio, unde?",
        "#",
        "./images/mindset_whiteboard.gif",
        "A whiteboard with Mindset written on it along with brainstorming",
        "./images/mindset_whiteboard_horiz.gif",
    ),

    new ProjectTemplate (
        "school",
        "School",
        TAG_WORDPRESS | TAG_BCIT,
        "Eius quam ea saepe quas neque perferendis consequatur maiores necessitatibus doloremque tempora tempore corporis ut totam enim ratione libero at, id possimus officiis asperiores. Quis rerum atque nostrum ab alias.",
        "#",
        "./images/magic_pentagram.gif",
        "A tablet user sitting in front of a magic pentagram",
        "./images/magic_pentagram_horiz.gif",
    ),

    //========================================
    //==================== Online Stores

    new ProjectTemplate (
        "shopifyStore",
        "Shopify Store",
        TAG_ONLINESTORE | TAG_BCIT | TAG_EDUCATIONAL,
        "Beatae earum nesciunt culpa, dolorem, saepe accusamus excepturi aspernatur ad cupiditate facere illo ratione odit rem reprehenderit maxime magnam. Ratione quae mollitia necessitatibus blanditiis quas dolor at, error excepturi iure.",
        "#",
        "./images/tiny_shopping_cart_and_bag.jpg",
        "A tiny shopping cart and shopping bag",
        "./images/tiny_shopping_cart_and_bag_horiz.jpg",
    ),

    new ProjectTemplate (
        "wooCommerceStore",
        "WooCommerce Store",
        TAG_ONLINESTORE | TAG_BCIT | TAG_EDUCATIONAL,
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates vel sit culpa porro repellendus est recusandae? Nemo, veritatis ea pariatur, eos minima quasi vel sed odit quo, eaque rerum ab?",
        "#",
        "./images/woman_purchasing_online.jpg",
        "Woman using a credit card to make a purchase online",
        "./images/woman_purchasing_online_horiz.jpg",
    )

]


/** ============================================================================
 * 
 * generateBannerQuote function - generates a random quote (chosen from a list) for every user that visits the page
 */
function generateBannerQuote() {
    const quoteIndex = 0;
    const authorIndex = 1;
    const sourceIndex = 2;

    const quoteCatalogue = [
        
        [
            `“You know,” said Arthur, “it's at times like this, when I'm trapped in a Vogon airlock with a man from Betelgeuse, and about to die of asphyxiation in deep space that I really wish I'd listened to what my mother told me when I was young.”`,
            `Douglas Adams`,
            `The Hitchhiker's Guide to the Galaxy`,
        ],

        [
            `If there's nothing wrong with me, maybe there's something wrong with the universe.`,
            `Doctor Beverly Crusher, fictional character`,
            `Star Trek the Next Generation`,
        ],

        [
            `A single Data - and forgive me, Commander - is a curiosity. A wonder, even. But thousands of Datas - isn't that becoming... a race? And won't we be judged by how we treat that race?`,
            `Captain Jean-Luc Picard, fictional character`,
            `Star Trek the Next Generation`,
        ],

        [
            `This is deduced from most obvious and therefore most powerfully convincing observations. The most palpable of these, which excludes the earth from the center and places the sun there, is that we find all the planets closer to the earth at one time and farther from it at another. The differences are so great that Venus, for example, is six times as distant from us at its farthest as at its closest, and Mars soars nearly eight times as high in the one state as in the other. You may thus see whether Aristotle was not some trifle deceived in believing that they were always equally distant from us.`,
            `Galileo Galilei as Salviati`,
            `Dialogue Concerning the Two Chief World Systems`,
        ],

        [
            `It is indeed a matter of great difficulty to discover, and effectually to distinguish, the true motions of particular bodies from the apparent; because the parts of that immovable space, in which those motions are performed, do by no means come under the observation of our senses. Yet the thing is not altogether desperate; for we have some arguments to guide us, partly from the forces, which are the causes and effects of the true motions.`,
            `Isaac Newton`,
            `The Principia: Mathematical Principles of Natural Philosophy`,
        ],

        [
            `Nay, the machine of God's making is so imperfect, according to these gentlemen ;  that he is so obliged to clean it now and then by an extraordinary concourse, and even to mend it, as a clockmaker mends his work ;  who must consequently be so much the more inskilful a workman, as he is oftener obliged to mend his work and to set it right.`,
            `G W Leibniz by way of Samuel Clarke`,
            `The Leibniz-Clarke Correspondence`,
        ],

        [
            `But this explanation involves a vicious circle. For it assumes the existence of time in order to account for the way in which moments are past, present and future. Time then must be pre-supposed to account for the A series. But we have already seen that the A series has to be assumed in order to account for time. Accordingly the A series has to be pre-supposed in order to account for the A series. And this is clearly a vicious circle.`,
            `J Ellis McTaggart`,
            `The Unreality of Time`,
        ],

        [
            `But perhaps this feeling of proud certainty would have you immediately if some one were to ask you: "What, then, do you mean by the assertion that these propositions are true?"`,
            `Albert Einstein`,
            `Relativity: The Special and the General Theory`,
        ],

        [
            `Novelty for its own sake is not a desideratum in the sciences as it is in so many other creative fields. As a result, though new paradigms seldom or never possess all the capabilities of their predecessors, they usually preserve a great deal of the most concrete parts of past achievements and they always permit additional concrete problem-solutions besides.`,
            `Thomas S Kuhn`,
            `The Structure of Scientific Revolutions`,
        ],

        [
            `One question looms: what do I do with my life now? Read a book? Go outside? Talk to one of those creepy "human" things?`,
            `Daniel Blain`,
            `His previous (and now closed) Twitter feed`,
        ],

        [
            `Sorry out of Bagel`,
            `Unknown author`,
            `A picture I saw online, once`,
        ],

        [
            `Being an elevator operator was an interesting job, but it had its ups and downs.`,
            `Norman Blain`,
            `His terrible sense of humour`,
        ],

        [
            `Why doesn't that work? In my mind, that works. Wait.. there's something really basic I'm missing, isn't there? Alright now, hold on, hold on! Before you start the hate comments..!`,
            `Ngeruma (https://www.youtube.com/@ngeruma)`,
            `"Manifold" | Perpetual Testing | Portal 2 Community Maps & Mods (https://youtu.be/gqn23qMQlM8?t=203)`,
        ],

        [
            `Now what we're going to do is, we're going to let them be happy for a couple of generations, just to see where things go. And then, once they've adapted to a type of utopian lifestyle where they have no worries, we're going to..`,
            `GrayStillPlays (https://www.youtube.com/@GrayStillPlays)`,
            `Repeatedly Exposed Humans to Radiation and This Happened - Species: Artificial Life, Real Evolution (https://youtu.be/vYxpY5gJgrg?t=107)`,
        ],

        [
            `Please note that we have added a consequence for failure. Any contact with the chamber floor will result in an unsatisfactory mark on your official testing record, followed by death.`,
            `GLaDOS, fictional character`,
            `Portal (https://en.wikipedia.org/wiki/Portal_(video_game))`,
        ],

        [
            `Guybrush: "I'm looking for a good used coffin." Stan: "Amazing! When you first came in I thought to myself: Now there's a guy that needs a good used coffin!`,
            `Guybrush Threepwood and "Smilin'" Stan S. Stanman, fictional characters`,
            `Monkey Island 2 (https://en.wikipedia.org/wiki/Monkey_Island_2:_LeChuck%27s_Revenge)`,
        ],

        [
            `As a ghost pirate: "Byarghhh!"  As a zombie pirate: "Yarharharghhh!"  As a demon pirate:"AAAARRRRGHHHHH!"`,
            `The Ghost-Zombie-Demon Pirate God LeChuck in various undead forms, fictional character`,
            `Monkey Island 4 Opening Cinematic (https://en.wikipedia.org/wiki/Escape_from_Monkey_Island)`,
        ],
        
        // Future memorable quotes forthcoming
        
    ];
    const selectedQuote = quoteCatalogue[Math.floor(Math.random()*quoteCatalogue.length)];

    // Replace the quote
    document.getElementById("quote-block").textContent = selectedQuote[quoteIndex];

    // Is there a quote author? (Left empty if author is Daniel Blain)
    if (selectedQuote[authorIndex]) {

        // Replace the author
        document.getElementById("author-block").textContent = selectedQuote[authorIndex];

        // Is there a source?
        if (selectedQuote[sourceIndex]) {

            //Replace the source
            document.getElementById("source-block").textContent = selectedQuote[sourceIndex];

        }

    }

}


/** ============================================================================
 * 
 * Main Execution Code
 */

// Handy DOM references

// chkboxFilter - Array of the checkbox DOM objects
const chkboxFilter = document.querySelectorAll(".chkFilterProjects");
const chkboxLabel = document.querySelectorAll("#projects-filter > label");

// Generate and insert a quote for the banner
generateBannerQuote();

// Build a bitwise flag number indicating which checkboxes are checked
function buildFilterFromCheckboxes() {

    let filter = 0x00;
    chkboxFilter.forEach((item, index) => {
        filter |= (item.checked) ? chkFilterFlag[index] : 0;
    })

    return filter;

}

// Display the projects, filtered depending upon checkbox choices
function displayProjects() {
    
    /* Get a filter from the current checkboxes status. If no checkboxes are
        selected, select all filters to ensure every project is displayed */
    let currentFilter = buildFilterFromCheckboxes();
    if (currentFilter === 0) {

        chkFilterFlag.forEach((item) => {
            currentFilter |= item;
        })

    }

    // For each project in the catalogue,
    projectCatalogue.forEach((item, index) => {

        /* bitwise-AND the current filter against each project's flags and,
            if there is any match (result > 0), display the project. Otherwise
            hide it */
        item.node.style.display = (currentFilter & item.tags)? "inline" : "none";

    })

}


/* Add event listeners, beginning with the first that launches when the window
    has loaded all the DOM content */
window.addEventListener("DOMContentLoaded", e => {
    
    // Append the entire project catalogue to the #projects-list
    const projectsList = document.getElementById("projects-list");
    projectCatalogue.forEach(item => {
        projectsList.appendChild(item.node);
    })

    // Add filter icons in #projects-filter
    const projectsFilterLabel = document.getElementById("projects-filter").querySelectorAll("label");
    chkFilterFlag.forEach((item, index) => {
        
        let newIcon;
        if (newIcon = createIcon(item)) {
            projectsFilterLabel[index].appendChild(createIcon(item));
        }

    })
    
    /* Special click event for the Project Filter checkboxes
        - For the Check all checkbox; when this is selected, check all checkboxes or clear them otherwise
        - For each other checkbox; if all but the CheckAll checkbox are cleared, then clear the CheckAll checkbox too.
            Visa versa if all the checkboxes are filled
            */
    chkboxFilter.forEach((item, index) => {
        
        item.addEventListener("click", e => {
            
            if (index === 0) {

                // Check All checkbox - fill or clear the rest
                chkboxFilter.forEach((item_inner) => {
                    item_inner.checked = chkboxFilter[0].checked;
                })

            }
            else {

                // Some other checkbox; determine whether CheckAll checkbox should be set/cleared
                chkboxFilter[0].checked = false;
                if (buildFilterFromCheckboxes() == TAG_CHECKALL) {
                    chkboxFilter[0].checked = true;
                }

            }
        })
        
        /* Add a click event filter to each Project Filter checkbox to display newly filtered projects
            - displayProjects() will account for current filters automatically
         */
        chkboxFilter.forEach((item) => {
    
            item.addEventListener("click", e => {    
                displayProjects();
            })
    
        })

    })

})

