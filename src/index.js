import DomManipulation from "./js/DomManipulation";

import ape from "./assets/images/ape.jpg";
import carrot from "./assets/images/carrot.png";
import frog from "./assets/images/frog.jpg";
import man from "./assets/images/man.jpg";

const body = document.querySelector("body");
let images = [ape, carrot, frog, man];

let imageCarousel = new DomManipulation(body, images);


export default DomManipulation;