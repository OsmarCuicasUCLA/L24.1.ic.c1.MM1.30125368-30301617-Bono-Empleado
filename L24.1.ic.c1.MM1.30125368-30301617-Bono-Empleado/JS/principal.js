/*
2 BONO EMPLEADO
Crear un programa que calcule el bono para un empleado en función del monto de sus ventas. El programa debe
solicitar al usuario que ingrese el nombre del empleado, el monto de las ventas y el porcentaje a aplicarse. El
programa debe calcular el monto del bono y mostrarlo junto con el nombre del empleado y el monto de las ventas
Datos de Prueba
Nombre: Gregorio
Monto de las ventas : 570
Porcentaje a aplicar: 16
Salida
Nombre: Gregorio
Monto de las ventas: 570
Bono de ventas: 91.2
*/ 

import Cl_Empleado from "./Cl_Empleado.js";
import Cl_IEmpleado from "./Cl_IEmpleado.js";

let iEmp = new Cl_IEmpleado();
let nombre = iEmp.leerNombre();
let montoVenta = iEmp.leerMontoVenta();
let porcentaje = iEmp.leerPorcentaje();

let emp = new Cl_Empleado(nombre, montoVenta, porcentaje);

let salida = document.getElementById("Salida");
salida.innerHTML = iEmp.reporteEmpleado(emp.nombre, emp.montoVenta, emp.Calc_Porcentaje());