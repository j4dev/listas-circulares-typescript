"use strict";
class Nodo {
    // get y set fot _Dato
    set setDato(d) {
        this.Dato = d;
    }
    get getDato() {
        return this.Dato;
    }
    // get y set for _siguiente elemento de un nodo
    set setSiguiente(s) {
        this.Siguiente = s;
    }
    get getSiguiente() {
        return this.Siguiente;
    }
}
class Lista {
    constructor() {
        this.primero = new Nodo();
        this.ultimo = new Nodo();
    }
    lista() {
        this.primero.setDato = null;
        this.ultimo.setDato = null;
    }
    /**
     * insertNodo
     */
    insertNodo() {
        let nuevo = new Nodo();
        var dato = document.getElementById("insertar").value.toString();
        nuevo.setDato = dato;
        if (this.primero.getDato == null) {
            this.primero = nuevo;
            //console.log(this.primero);
            this.primero.setSiguiente = this.primero;
            //console.log(this.primero.getSiguiente);
            this.ultimo = this.primero;
            //console.log(this.ultimo);
        }
        else {
            this.ultimo.setSiguiente = nuevo;
            nuevo.setSiguiente = this.primero;
            this.ultimo = nuevo;
            console.log(this.ultimo);
        }
    }
    listar() {
        var lista = "<li>Elemento no encontrado</li>";
        var list_actual = new Nodo();
        list_actual = this.primero;
        if (list_actual.getDato != null) {
            var lista = "";
            do {
                lista = lista + "<li>" + list_actual.getDato + "</li>";
                list_actual = list_actual.getSiguiente;
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
}
var lista = new Lista();
function guardar_l() {
    lista.insertNodo();
    lista.listar();
}
//# sourceMappingURL=listsCircular.js.map