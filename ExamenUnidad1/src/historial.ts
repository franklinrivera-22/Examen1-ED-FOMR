 export interface IPila<T> {
        apilar(elemento: T): void;
        desapilar(): T | undefined;
        tope(): T | undefined;
        tamaño(): number;
        estaVacia(): boolean;
}

class PilaArreglo<T> implements IPila<T> {

    private elementos: T[] = [];
    apilar(elemento: T): void {
        this.elementos.push(elemento);
    }
    desapilar(): T | undefined {
        return this.elementos.pop();
    }
    tope(): T | undefined {
        return this.elementos[this.elementos.length - 1];
    }
    tamaño(): number {
        return this.elementos.length;
    }
    estaVacia(): boolean {
        return this.elementos.length === 0;
    }
    listar(): T[] {
        return this.elementos;
    }
}

const navegar: IPila<string> = new PilaArreglo<string>();
    navegar.apilar("google.com")
    navegar.apilar("unah.edu.hn")
    navegar.apilar("campus.unah.edu.hn")
    navegar.apilar("correo.unah.edu.hn")


console.log(navegar.tope());
console.log(navegar.desapilar());
console.log(navegar.tamaño());
