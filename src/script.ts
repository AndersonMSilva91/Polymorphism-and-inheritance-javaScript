import { Dog } from "./Dog";
import { Horse } from "./Horse";
import { Sloth } from "./Sloth";
import { ISound } from "./ISound";

const dog = new Dog('cleiton', 12);
const horse = new Horse('Bom de guerra', 22);
const sloth = new Sloth('flash',24);

function Sound(Animal : ISound){
    Animal.Sound();
}

Sound(dog);
Sound(horse);
Sound(sloth);