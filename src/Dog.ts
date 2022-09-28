import { Animal } from "./Animal";
import { ISound } from "./ISound";
import { IRun } from "./IRun";

class Dog extends Animal implements ISound, IRun{
    
            constructor(name : string, age : number){
                super(name, age);
            }

    public Sound(): void {
        console.log(`O doginho chamado de ${this.name} esta a LATIR!!!`);
    }
    public Run(): void {
        console.log(`O doguinho chamado de ${this.name} esta a CORRER!!!!`);
    }
} export {Dog}