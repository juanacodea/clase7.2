class Producto{
    constructor(precio, id){
        this.precio=precio;
        this.id=id;
    } 
    total(){
        this.precioTotal=this.precio * 2.1;
    } 
    vender(){
        this.vendido=true
    }
}
const bateria=new Producto(1, 1 );
bateria.total();
let contadorBatería=0

const guitarra=new Producto(2, 2);
guitarra.total();
let contadorGuitarra=0

const piano=new Producto(3, 3 );
piano.total();
let contadorPiano=0

const teclado=new Producto (4, 4)
teclado.total()
let contadorTeclado=0

const bajo=new Producto(5, 5);
bajo.total();
let contadorBajo=0

let contador=0
let listaCompras=[]
let listaPrecio=[]
let totalCompra=0
let listaFinalProductos=[]

alert(`tenemos los siguientes productos a la venta: batería, guitarra, piano, teclado y bajo`)
let ProductoElegido= prompt("elíja algun instrumento para comprar") .toUpperCase()
while(ProductoElegido!=""){
    switch(ProductoElegido){
        case "BATERIA":
            contador=contador+1;
            alert(`El precio el precio de este producto es de: ${bateria.precioTotal} y la cantidad de productos comprados es de:${contador}`);
            listaFinalProductos.push('Batería');
            listaPrecio.push(bateria.precio);
            totalCompra=totalCompra+bateria.precio;
            break;
        case "BATERÍA":
            contador=contador+1;
            alert(`El precio el precio de este producto es de: ${bateria.precioTotal} y la cantidad de productos comprados es de:${contador}`);
            listaFinalProductos.push('Batería');
            listaPrecio.push(bateria.precio);
            totalCompra=totalCompra+bateria.precio;
            break;
        case "GUITARRA":
            contador=contador+1;
            alert(`El precio el precio de este producto es de: ${guitarra.precioTotal} y la cantidad de productos comprados es de:${contador}`);
            listaFinalProductos.push('Guitarra');
            listaPrecio.push(guitarra.precio);
            totalCompra=totalCompra+guitarra.precio;
            break;
        case "PIANO":
            contador=contador+1;
            alert(`El precio el precio de este producto es de: ${piano.precioTotal} y la cantidad de productos comprados es de:${contador}`);
            listaFinalProductos.push('Piano');
            listaPrecio.push(piano.precio);
            totalCompra=totalCompra+piano.precio;
            break;
        case "TECLADO":
            contador=contador+1;
            alert(`El precio el precio de este producto es de: ${teclado.precioTotal} y la cantidad de productos comprados es de:${contador}`);
            listaFinalProductos.push('Teclado');
            listaPrecio.push(teclado.precio);
            totalCompra=totalCompra+teclado.precio;
            break;
        case "BAJO":
            contador=contador+1;
            alert(`El precio el precio de este producto es de: ${bajo.precioTotal} y la cantidad de productos comprados es de:${contador}`);
            listaFinalProductos.push('Bajo');
            listaPrecio.push(bajo.precio);
            totalCompra=totalCompra+bajo.precio;
            break;
        default:
            alert("no tenemos ese producto")
    }
    ProductoElegido= prompt("elíja algun instrumento para comprar") .toUpperCase()
}

while(totalCompra>50){
    totalCompra*0.1;
    alert(`ya que el precio total de su compra fue superior a $50 recibira un descuento del 10%`)
    break;
}
alert(`el precio final de su compra es de:${totalCompra}`)
alert(`usted compro: ${listaFinalProductos}`);
alert(`gracias por su compra!!`)
