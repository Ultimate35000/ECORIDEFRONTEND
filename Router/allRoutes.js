import Route from "./Route.js";

//Définir ici nos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/connexion", "Page de connexion", "/pages/signin.html"),
    new Route("/signup", "Inscription", "/pages/signup.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Ecoride";