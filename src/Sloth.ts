import { Animal } from "./Animal";
import { ISound } from "./ISound";
import { IClimbTree } from "./IClimbTree";

class Sloth extends Animal implements IClimbTree, ISound{
    constructor(name : string, age : number){
    super(name, age);
    }

 public Sound(): void {
     console.log(`A preguiça nomeada ${this.name} esta grunindo!!!!`);
 }
 public Climb(): void {
     console.log(`A preguiça chamada ${this.name} esta escalando!!!`);
 }
} export {Sloth}