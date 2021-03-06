/**
 * Created by mcaead10 on 17-01-20.
 */

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}

function empty_main() {
    $(document).ready(function () {
        $("main").empty();
    });
    closeNav();
}

function cv() {
    $(document).ready(function () {
        $("#content").html("<div class='col-xs-12 col-md-12'><h1>Curriculum Vitæ</h1></div>\
        <div class='col-xs-12 col-md-12'><h2 >Formation</h2></div>\
        <div class='col-xs-12 col-md-12'><h4>Baccalauréat en Informatique et Génie Logiciel</h4></div>\
        <div class='col-xs-8'><p>Université du Québec à Montréal</p></div>\
        <div class='col-xs-4 right'><p>2013-2016</p></div>\
        <div class='col-xs-12 col-md-12'><h4>Certificat en Science Comptable</h4></div>\
        <div class='col-xs-8'><p>Université du Québec à Montréal</p></div>\
        <div class='col-xs-4 right'><p>2012-2013</p></div>\
        <div class='col-xs-12 col-md-12'><h4>Techniques de Comptabilité et de Gestion</h4></div>\
        <div class='col-xs-8'><p>CÉGEP de l'Abitibi-Témiscamingue</p></div>\
        <div class='col-xs-4 right'><p>2008-2011</p></div>\
        <div class='col-xs-12 col-md-12'><h2>Expériences Professionnelles</h2></div>\
        <div class='col-md-8 col-xs-8'><h4>Morneau Shepell<br>Stagiaire en informatique</h4></div>\
        <div class='col-md-4 col-xs-4 right'><p>Septembre 2015<br> à Août 2016</p></div>\
        <div class='col-md-8 col-xs-12'><p class='descrpition'>Développement et création de l’architecture d’une interface de programmation en C# pour l’application <a href=\"http://www.ranorex.com/\" target=\"blank\">Ranorex</a>, pour permettre à l’équipe d’assurance qualité d’automatiser leurs scénarios de test.</p></div>\
        <div class='col-xs-12 col-md-12'><h2>Implications Sociales</h2></div>\
        <div class='col-md-8 col-xs-8'><h4>Association Générale des Étudiantes et Étudiants en Informatique<br>Président</h4></div>\
        <div class='col-md-4 col-xs-4 right'><p>2016 - 2017</p></div>\
        <div class='col-md-8 col-xs-8'><h4>Association Générale des Étudiantes et Étudiants en Informatique<br>Trésorier</h4></div>\
        <div class='col-md-4 col-xs-4 right'><p>2014 - 2016</p></div>\
        <div class='col-md-8 col-xs-8'><h4>Comité Organisateur des <a href='http://csgames.org/corpo/fr/' target='blank'>CS Games</a><br>VP-Finance</h4></div>\
        <div class='col-md-4 col-xs-4 right'><p>2016</p></div>\
        <div class='col-md-8 col-xs-8'><h4><a href='http://csgames.org/corpo/fr/' target='blank'>CS Games</a><br>Bénévole</h4></div>\
        <div class='col-md-4 col-xs-4 right'><p>2017</p></div>");
    });
}

function projects() {
  $(document).ready(function () {
    $("#content").html("<div class='col-xs-12 col-md-12'><h1>Projets</h1></div>\
      <div class='col-xs-12 col-md-12'><h2>Pour voir le code source de mes projets, visitez ma page <a href='https://www.github.com/mcaead10' target='_blank'>Github</a></h2></div>\
      <div class='col-xs-12 col-md-12'><h4><a href='https://github.com/mcaead10/FoodTruckLocator' target='_blank'>Foodturck Locator</a></h4></div>\
      <div class='col-xs-12 col-md-12'><p class='descrpition'>Permet l’affichage des camions restaurants de la ville de Montréal sur une carte OpenStreetMap \
      avec la bibliothèque Leaflet. Les données de localisation des camions restaurants sont récoltées \
      grâce au Portail de Données Ouvertes de la ville de Montréal</p></div>\
      <div class='col-xs-12 col-md-12'><h4><a href='https://github.com/mcaead10/path_finding' target='_blank'>Path Finding</a></h4></div>\
      <div class='col-xs-12 col-md-12'><p class='descrpition'>Réalisée dans le cadre d’un cours de structures de données. Implémente l’algorithme de Dijkstra.\
      Les objets, graphes et coordonnées géographiques ont été créés avec la librairie standard C++.</p></div>");
    });
}


$(document).ready(function () {
    $(".link").click(function () {
        closeNav();
    });
    $("#cv").click(function () {
        cv();
    });
    $("#projets").click(function () {
        projects();
    });
    $("#expériences").click(function () {
        $("#content").html("<h1>Expériences</h1>\
      <h1>EN CONSTRUCTION</h1>\
    ");
    });
    $("#intérêts").click(function () {
        $("#content").html("<h1>Intérêts</h1>\
      <h1>EN CONSTRUCTION</h1>\
    ");
    });
    $("#compétences").click(function () {
        $("#content").html("<h1>Compétences</h1>\
      <h1>EN CONSTRUCTION</h1>\
    ");
    });
});
