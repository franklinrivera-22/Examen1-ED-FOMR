 export interface ICola<T> {
        encolar(elemento: T): void;
        desencolar(): T | undefined;
        frente(): T | undefined;
        tamaño(): number;
        estaVacia(): boolean;
}
class ColaArreglo<T> implements ICola<T> {
  

    private elementos: T[] = [];
    encolar(elemento: T): void {
        this.elementos.push(elemento);
    }
    desencolar(): T | undefined {
        return this.elementos.shift();
    }
    frente(): T | undefined {
        return this.elementos[0];
    }
    tamaño(): number {
        return this.elementos.length;
    }
    estaVacia(): boolean {
        return this.elementos.length === 0;
    }

}

const cola = new ColaArreglo<string>();
cola.encolar("Juan")
cola.encolar("María")
cola.encolar("Pedro")
cola.encolar("Ana")
cola.encolar("Carlos")

console.log(cola.frente());
console.log(cola.desencolar());
console.log(cola.tamaño());
