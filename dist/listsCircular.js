"use strict";
class Nodo {
    // get y set fot _Dato
    set Dato(d) {
        this._Dato = d;
    }
    get Dato() {
        return this._Dato;
    }
    // get y set for _siguiente elemento de un nodo
    set Siguiente(s) {
        this._Siguiente = s;
    }
    get Siguiente() {
        return this._Siguiente;
    }
}
class Lista {
    constructor() {
        this.primero = new Nodo();
        this.ultimo = new Nodo();
    }
    lista() {
        this.primero.Dato = null;
        this.ultimo.Dato = null;
    }
    /**
     * insertNodo
     */
    insertNodo() {
        let nuevo = new Nodo();
        var dato = document.getElementById("insertar").value.toString();
        nuevo.Dato = dato;
        if (this.primero.Dato == null) {
            this.primero = nuevo;
            //console.log(this.primero);
            this.primero.Siguiente = this.primero;
            //console.log(this.primero.getSiguiente);
            this.ultimo = this.primero;
            console.log(this.ultimo);
        }
        else {
            this.ultimo.Siguiente = nuevo;
            nuevo.Siguiente = this.primero;
            this.ultimo = nuevo;
            console.log(this.ultimo);
        }
    }
    listar() {
        var lista = "<li>Elemento no encontrado</li>";
        var list_actual = new Nodo();
        list_actual = this.primero;
        if (list_actual.Dato != null) {
            var lista = "";
            do {
                lista = lista + "<li>" + list_actual.Dato + "</li>";
                list_actual = list_actual.Siguiente;
                var listado = document.getElementById("listado");
                listado.innerHTML = lista;
                document.getElementById("insertar").value = "";
            } while (list_actual != this.primero);
        }
        else {
            var listado = document.getElementById("listado");
            listado.innerHTML = lista;
            document.getElementById("insertar").value = "";
        }
    }
    /**
     * buscarNodo
     */
    buscarNodo() {
        var actual = new Nodo();
        actual = this.primero;
        var encontrado = false;
        var nodoBuscado = document.getElementById("buscar").value.toString();
        var lista = "<li>Elemento no encontrado</li>";
        //console.log(nodoBuscado);
        if (this.primero != null) {
            while (actual != this.ultimo && encontrado != true) {
                if (actual.Dato == nodoBuscado) {
                    lista = "";
                    lista = lista + "<li>Nodo encontrado: " + nodoBuscado + "</li>";
                    encontrado = true;
                }
                actual = actual.Siguiente;
            }
            if (encontrado == false) {
                var lista = "<li>Elemento no encontrado</li>";
            }
        }
        var listado = document.getElementById("listado");
        listado.innerHTML = lista;
        document.getElementById("buscar").value = "";
    }
}
/* Creación de instancia de la clase lista
** fuera de la función
** Recomendación cambiar al patron de diseño "Singleton"
*/
var lista = new Lista();
function guardarLista() {
    lista.insertNodo();
    lista.listar();
}
function buscarNodo() {
    lista.buscarNodo();
}
//# sourceMappingURL=listsCircular.js.map