class carrito{
    //metodo para agregar producto al carrito

    compraProducto(e){
        e.preventDefault();
        if(e.target.classList.contains("Agregar-carrito")){
            let producto= e.target.parentElement.parentElemnt;
            this.leerDatosProducto(producto);
        }
    }
}