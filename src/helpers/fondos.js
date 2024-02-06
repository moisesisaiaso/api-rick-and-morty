import fondo1 from "../assets/img/rick1.jpg";
import fondo2 from "../assets/img/rick2.jpg";
import fondo3 from "../assets/img/rick3.jpg";
import fondo4 from "../assets/img/rick4.jpg";
import fondo5 from "../assets/img/rick5.jpg";
import fondo6 from "../assets/img/rick6.jpg";
import fondo7 from "../assets/img/rick7.jpg";
import fondo8 from "../assets/img/rick8.jpg";
import fondo9 from "../assets/img/rick9.jpg";
import fondo10 from "../assets/img/rick10.jpg";
import fondo11 from "../assets/img/rick11.jpg";
import fondo12 from "../assets/img/rick12.jpg";
import fondo13 from "../assets/img/rick13.jpg";
import fondo14 from "../assets/img/rick14.jpg";
import fondo15 from "../assets/img/rick15.jpg";
import fondo16 from "../assets/img/rick16.jpg";
import fondo17 from "../assets/img/rick17.jpg";

const fondos = [
    fondo1,
    fondo2,
    fondo3,
    fondo4,
    fondo5,
    fondo6,
    fondo7,
    fondo8,
    fondo9,
    fondo10,
    fondo11,
    fondo12,
    fondo13,
    fondo14,
    fondo15,
    fondo16,
    fondo17,
];

export const getRandomBackground = () => {
    const randomIndex = Math.floor(Math.random() * fondos.length);

    return fondos[randomIndex];
};
