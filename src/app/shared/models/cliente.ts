import { Deserializable } from "./deserializable";

export class Cliente implements Deserializable{
    id: number;
    nome: string;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}
