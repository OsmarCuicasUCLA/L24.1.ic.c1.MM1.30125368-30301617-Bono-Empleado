export default class Cl_Empleado{
    constructor(nombre, montoVenta, porcentaje){
        this.nombre = nombre;
        this.montoVenta = montoVenta;
        this.porcentaje = porcentaje;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(e){
        this._nombre = e;
    }

    get montoVenta(){
        return this._montoventa;
    }

    set montoVenta(e){
        this._montoventa = +e;
    }

    get porcentaje(){
        return this._porcentaje;
    }

    set porcentaje(e){
        this._porcentaje = +e;
    }

    Calc_Porcentaje(){
        return (this.montoVenta * this.porcentaje) / 100
    }
}