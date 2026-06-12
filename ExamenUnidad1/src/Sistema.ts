enum CategoriProducto{
    herramienta,
    material,
    electrico,
    plomeria,
    
}

let codigoProducto : string;
let nombreProducto: string;
let enStock: boolean = true;
let precioUnitario: number;
let categoria: CategoriProducto;

let RegistroProducto: [number, string, CategoriProducto, number, boolean];

let producto1: [number, string, CategoriProducto, number, boolean] =
 [1293, "Martillo", CategoriProducto.plomeria, 200, true];

[, nombreProducto, , precioUnitario] = producto1;
console.log(nombreProducto);
console.log(precioUnitario);
