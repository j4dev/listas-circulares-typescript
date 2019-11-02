class Nodo {
    private Dato: string;
    private Siguiente: Nodo;

    // get y set fot _Dato
    public set setDato(d : string) {
        this.Dato = d;
    }
    
    public get getDato() : string {
        return this.Dato
    }
    
    // get y set for _siguiente elemento de un nodo
    
    public set setSiguiente(s : Nodo) {
        this.Siguiente = s;
    }
    
    public get getSiguiente() : Nodo {
        return this.Siguiente;
    }
    
}

class Lista {
    private primero = new Nodo();
    private ultimo = new Nodo();

    public lista(){
        this.primero.setDato = null;
        this.ultimo.setDato = null;
    }

    /**
     * insertNodo
     */
    public insertNodo() {
        let nuevo = new Nodo();

        var dato = (<HTMLInputElement>document.getElementById("insertar")).value.toString();
        nuevo.setDato = dato;

        if (this.primero.getDato == null) {

            this.primero = nuevo;
            //console.log(this.primero);
            this.primero.setSiguiente = this.primero;
            //console.log(this.primero.getSiguiente);
            this.ultimo = this.primero;
            //console.log(this.ultimo);

        } else {

            this.ultimo.setSiguiente = nuevo;
            nuevo.setSiguiente = this.primero;
            this.ultimo = nuevo;
            console.log(this.ultimo);
        }

    }

    public listar() {
        var lista = "<li>Elemento no encontrado</li>";
        var list_actual = new Nodo();
        list_actual = this.primero;
        
        if(list_actual.getDato != null )
        {
            var lista = "";
            do {
                
                lista = lista+"<li>"+list_actual.getDato+"</li>";
                list_actual = list_actual.getSiguiente;
                var listado = <HTMLElement> document.getElementById("listado");
                listado.innerHTML = lista;
                (<HTMLInputElement>document.getElementById("insertar")).value = "";
    
            } while (list_actual != this.primero);
        }else{
            var listado = <HTMLElement> document.getElementById("listado");
            listado.innerHTML = lista;
            (<HTMLInputElement>document.getElementById("insertar")).value = "";
        }
}

}

/* Creación de instancia de la clase lista
** fuera de la función
** Recomendación cambiar al patron de diseño "Singleton"
*/
var lista = new Lista();
function guardar_l() {
    
    lista.insertNodo();
    lista.listar();
}