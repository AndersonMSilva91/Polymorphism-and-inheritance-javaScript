import { Animal } from "./Animal";
import { ISound } from "./ISound";
import { IRun } from "./IRun";

class Horse extends Animal implements IRun, ISound{
    constructor(name: string, age: number){
    super(name, age);
    }
    public Sound(): void {
     console.log(`O pocoto do nome ${this.name} esta relinchando!!!`);   
    }
    public Run(): void {
     console.log(`O pocoto nomeado de ${this.name} esta galopando!!!`);
    }
} export {Horse}