/////////HANDLERBARS DEMO//////
// Grab the HTML source that needs to be compiled
var menuSource = document.getElementById( 'menu-template' ).innerHTML;
// Compiles the source
var menuTemplate = Handlebars.compile( menuSource );

//Data that will replace the handlebars expressions in our template
var menuData = {
    linkName1 : "Link 1",
    linkName2 : "Link 2",
    linkName3 : "Link 3",
    linkName4 : "Link 4",
    linkName5 : "Link 5",
    linkURL1 : "http://google.com",
    linkURL2 : "http://jaskokoyn.com",
    linkURL3 : "http://yahoo.com",
    linkURL4 : "http://youtube.com",
    linkURL5 : "http://twitter.com"
};

// Process Template with Data
document.getElementById( 'menu-placeholder' ).innerHTML = menuTemplate( menuData );