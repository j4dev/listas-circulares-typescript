class Nodo {
    private _Dato: string;
    private _Siguiente: Nodo;

    // get y set fot _Dato
    public set Dato(d : string) {
        this._Dato = d;
    }
    
    public get Dato() : string {
        return this._Dato
    }
    
    // get y set for _siguiente elemento de un nodo
    
    public set Siguiente(s : Nodo) {
        this._Siguiente = s;
    }
    
    public get Siguiente() : Nodo {
        return this._Siguiente;
    }
    
}

class Lista {
    private primero = new Nodo();
    private ultimo = new Nodo();

    public lista(){
        this.primero.Dato = null;
        this.ultimo.Dato = null;
    }

    /**
     * insertNodo
     */
    public insertNodo() {
        let nuevo = new Nodo();

        var dato = (<HTMLInputElement>document.getElementById("insertar")).value.toString();
        nuevo.Dato = dato;

        if (this.primero.Dato == null) {

            this.primero = nuevo;
            //console.log(this.primero);
            this.primero.Siguiente = this.primero;
            //console.log(this.primero.getSiguiente);
            this.ultimo = this.primero;
            console.log(this.ultimo);

        } else {

            this.ultimo.Siguiente = nuevo;
            nuevo.Siguiente = this.primero;
            this.ultimo = nuevo;
            console.log(this.ultimo);
        }

    }

    public listar() {
        var lista = "<li>Elemento no encontrado</li>";
        var list_actual = new Nodo();
        list_actual = this.primero;
        
        if(list_actual.Dato != null )
        {
            var lista = "";
            do {
                
                lista = lista+"<li>"+list_actual.Dato+"</li>";
                list_actual = list_actual.Siguiente;
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

    /**
     * buscarNodo
     */
    public buscarNodo(nodoBuscado: string) {
        var actual = new Nodo();
        actual = this.primero;
        var encontrado: boolean = false;

        var lista = "<li>Elemento no encontrado</li>";
        //console.log(nodoBuscado);
        
        if(this.primero.Dato != null){
            do{
                if (actual.Dato == nodoBuscado) {
                    lista = "";
                    lista = lista+"<li>Nodo encontrado: "+nodoBuscado+"</li>";
                    encontrado = true;
                }

                actual = actual.Siguiente;
            }while (actual != this.primero && encontrado != true)
            if (encontrado == false) {
                var lista = "<li>Elemento no encontrado</li>";
            }

        }
        else{
            var lista = "<li>Lista vacia</li>";
        }

        var listado = <HTMLElement> document.getElementById("listado");
        listado.innerHTML = lista;
        (<HTMLInputElement>document.getElementById("buscar")).value = "";

    }

    /**
     * eliminarNodo
     */
    public eliminarNodo(nodoEliminar: string){
        var actual = new Nodo();
        var anterior = new Nodo();
        var encontrado: boolean = false;
        actual = this.primero;

        var lista = "<li>Elemento no encontrado</li>";
        //console.log(nodoEliminar);
        
        if(this.primero.Dato != null){
            do{
                if (actual.Dato == nodoEliminar) {
                    lista = "";
                    lista = lista+"<li>Nodo eliminado: "+nodoEliminar+"</li>";

                    if (actual == this.primero) {
                        this.primero = this.primero.Siguiente;
                        this.ultimo.Siguiente = this.primero;
                    } else if (actual == this.ultimo) {
                        anterior.Siguiente = actual.Siguiente;
                        this.ultimo = anterior;
                    } else {
                        anterior.Siguiente = actual.Siguiente;
                    }
                    
                    encontrado = true;
                }else{
                    anterior = actual;
                    actual = actual.Siguiente;
                }

            }while (actual != this.primero && encontrado != true)
            if (encontrado == false) {
                var lista = "<li>Elemento no encontrado</li>";
            }

        }else{
            var lista = "<li>Lista vacia</li>";
        }

        var listado = <HTMLElement> document.getElementById("listado");
        listado.innerHTML = lista;
        (<HTMLInputElement>document.getElementById("borrar")).value = "";

    }

}

/* Creación de instancia de la clase lista
** fuera de la función
** Recomendación cambiar al patron de diseño "Singleton"
*/
var lista = new Lista();
function listar() {
    lista.listar();
}
function guardarLista() {
    lista.insertNodo();
    lista.listar();
}
function buscarNodo() {
    var nodoBuscado = (<HTMLInputElement>document.getElementById("buscar")).value.toString();
    lista.buscarNodo(nodoBuscado);
}
function eliminarNodo() {
    var nodoBuscado = (<HTMLInputElement>document.getElementById("borrar")).value.toString();
    lista.eliminarNodo(nodoBuscado);
}
