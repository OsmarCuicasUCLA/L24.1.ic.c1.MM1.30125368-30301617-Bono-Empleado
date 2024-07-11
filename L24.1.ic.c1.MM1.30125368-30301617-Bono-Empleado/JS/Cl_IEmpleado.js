export default class Cl_IEmpleado{
    leerNombre(){
        return prompt("Ingrese el Nombre del Empleado")
    }

    leerMontoVenta(){
        return prompt("Ingrese el Monto de las Ventas")
    }

    leerPorcentaje(){
        return prompt("Ingrese el porcentaje a Aplicar")
    }

    reporteEmpleado(nombre, montoVenta, bonoVenta){
        return `
        Nombre: ${nombre}
        <br>
        Monto de las Ventas: ${montoVenta}
        <br>
        Bono de Ventas: ${bonoVenta} 
        `
    }
}