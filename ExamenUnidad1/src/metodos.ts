interface Venta {
id: number;
producto: string;
monto: number;
categoria: string;
pagado: boolean;
}

const ventas: Venta[] = [
{ id:1, producto:"Martillo", monto:120.00,
    categoria:"Herramienta", pagado:true },
{ id:2, producto:"Cable 10m", monto:85.50,
categoria:"Electrico", pagado:false },
{ id:3, producto:"Llave inglesa", monto:95.00,
categoria:"Herramienta", pagado:true },
{ id:4, producto:"Tubo PVC 1/2", monto:32.00,
categoria:"Plomeria", pagado:true },
{ id:5, producto:"Taladro", monto:450.00,
categoria:"Electrico", pagado:false },
{ id:6, producto:"Cemento 50kg", monto:210.00,
categoria:"Material", pagado:true },
{ id:7, producto:"Sierra circular", monto:380.00,
categoria:"Herramienta", pagado:true },
{ id:8, producto:"Cinta métrica", monto:55.00,
categoria:"Herramienta", pagado:false },
];

//filter - O(n)
const ventasPagadas = ventas.filter(venta => venta.pagado === true)
console.log({ventasPagadas});

//map - O(n)
const nombresProductos: string[] = ventas.map(venta => venta.producto);
console.log({nombresProductos});

// reduce - O(n)
const totalVentas = ventas.reduce((numero, x) => numero + x.monto, 0);
console.log({totalVentas});

//encadenado - O(n)
const TotalHerramientas: number = ventas
  .filter(venta => venta.categoria === "Herramienta")
  .reduce((total, venta) => total + venta.monto, 0);
console.log({TotalHerramientas}); 

//sort - O(n log n)
const ordenadoAsc = ventas
  .sort((a, b) => a.monto - b.monto)
  .map(venta => venta.producto + " L. " + venta.monto);
console.log({ordenadoAsc});

