class Nodo<T> {
    public elements: T[] = []
    public valor: T
    public siguiente: Nodo<T> | null 

    constructor(valor: T) {
        this.valor = valor
        this.siguiente = null
    }
}

 export interface ILista<T> {
        insertarAlFInal(valor: T): void;
        eliminarPrimero(): T | undefined;
        buscar(valor: T): boolean;
        tamaño(): number;
        imprimir(): void;
        splice(index: number, deleteCount?: number): T[];
}

class ListaEnlazada<T> implements ILista<T> {
    
    private elementos: T[] = [];

    insertarAlFInal(valor: T): void {
        this.elementos.push(valor);
    }

    eliminarPrimero(): T | undefined {
        return this.elementos.shift();
    }

    splice(index: number, deleteCount?: number): T[] {
        return this.elementos.splice(index, deleteCount);
    }

    buscar(valor: T): boolean {
        return this.elementos.indexOf(valor) !== -1;
    }

    tamaño(): number {
         return this.elementos.length;
    }

    imprimir(): void {
        console.log(this.elementos);
    }

}

const lista = new ListaEnlazada<string>();
lista.insertarAlFInal("Juan");
lista.insertarAlFInal("María");
lista.insertarAlFInal("Pedro");
lista.insertarAlFInal("Ana");
lista.insertarAlFInal("Carlos");

const nombreExist = lista.buscar("Carlos")
console.log({nombreExist});

lista.splice(0)
console.log({lista});
