// UNIDAD 1
// Ejercicio 1
/*
console.log('Script desde visual')
var nombre = prompt('Ingrese su nombre')
var apellido = prompt('Ingrese su apellido')
console.log('Bienvenido'+' '+nombre+' '+apellido)
*/
// Ejercicio 2
/*
const PI=3.141516
var diametro = prompt('Ingrese el diametro del circulo')
var radio=diametro/2
var perimetro=2*PI*radio
console.log('El perimetro del circulo es: '+perimetro.toFixed(2))
*/
// Ejercicio 3
/*
var acu = 0, prom
for (let i = 0; i < 4; i++) {
    var num = prompt('Ingrese un numero')
    num = parseInt(num)
    acu = acu + num
}
prom = acu/4
console.log('El promedio es: '+prom.toFixed(2))
*/
// Ejercicio 4
/*
var precioHora = prompt('Ingrese el precio de la hora')
var horasTrabajo = prompt('Ingrese las horas trabajadas del mes')
var sueldo = precioHora*horasTrabajo
console.log('El sueldo es de : $'+sueldo.toFixed(2))
*/
// Ejercicio 5
/*
var precioHora = prompt('Ingrese el precio de la hora')
var horasTrabajo = prompt('Ingrese las horas trabajadas del mes')
var antiguedad = prompt('Ingrese la antiguedad del empleado')
var bono = 15*antiguedad
var sueldo = (precioHora*horasTrabajo)+(((precioHora*horasTrabajo)*bono)/100)
console.log('El sueldo es de : $'+sueldo.toFixed(2))
*/
// Ejercicio 6
/*
var precioHora = prompt('Ingrese el precio de la hora')
var horasTrabajo = prompt('Ingrese las horas trabajadas del mes')
var antiguedad = prompt('Ingrese la antiguedad del empleado')
var cantSeguros = prompt('Ingrese la cantidad de seguros vendidos')
var seguroCaro = prompt('Ingrese el monto del seguro mas caro vendido')
var bono = (15*antiguedad)+(25*cantSeguros)
var sueldo = (precioHora*horasTrabajo)+(((precioHora*horasTrabajo)*bono)/100)+(seguroCaro*0.5)
console.log('El sueldo es de : $'+sueldo.toFixed(2))
*/

// UNIDAD 2
// Ejercicio 7
/*
var num = prompt('Ingrese un numero')
if (num == 0){
    console.log('El numero '+num+' es un CERO.')
}else{
    if((num%2)==0){
        console.log('El numero '+num+' es un numero PAR.')
    }else{
        if((num%2)!=0){    
            console.log('El numero '+num+' es un numero IMPAR.')
        }
    }
}
*/
// Ejercicio 8
/*
var num = prompt('Ingrese un numero')
if ((num%3)==0){
    console.log('El numero '+num+' es multiplo de 3.')
}else{
    console.log('El numero '+num+' NO es multiplo de 3.')  
}
*/
// Ejercicio 9
/*
var letra = prompt('Ingrese una letra')
if (letra=='a' || letra=='e' || letra=='i' || letra=='o' || letra=='u'){
    console.log('La letra es una vocal.')
}else{
    console.log('La letra NO es una vocal.')
}
*/
// Ejercicio 10
/*
var rangoMax = 1, rangoMin = 0
while((rangoMax-rangoMin)<=5){
    rangoMin = prompt('Ingrese el minimo del rango')
    rangoMax = prompt('Ingrese el maximo del rango')
    if((rangoMax-rangoMin)<=5){
        alert('Volver a ingresar datos. El rango minimo entre ambos debe ser 5!')
    }
    if ((rangoMax-rangoMin)>5){
        var num = prompt('Ingrese un numero')
        if ((num<=rangoMax)&&(num>=rangoMin)){
            if((num%2)==0){
                alert('El numero esta dentro del rango y es PAR.')
            }else{
                alert('El numero esta dentro del rango.')
            }
        }else{
            if((num%2)!=0){
                alert('El numero NO esta dentro del rango y es IMPAR.')
            }else{
                alert('El numero NO esta dentro del rango.')
            }          
        }
    }
}
*/
// Ejercicio 11
/*
var num1 = prompt('Ingrese un numero.')
var num2 = prompt('Ingrese el otro numero.')
var operador = prompt('Ingrese el operador.')
switch (operador){
    case ('+'):
        num1 = parseInt(num1)
        num2 = parseInt(num2)
        var oper = (num1+num2)
        console.log('SUMA. El resultado es: '+oper)
        break;
    case ('-'):
        var oper = (num1-num2)
        console.log('RESTA. El resultado es: '+oper)
        break;
    case ('/'):
        var oper = (num1/num2)
        console.log('DIVISION. El resultado es: '+oper)
        break;
    case ('*'):
        var oper = (num1*num2)
        console.log('MULTIPLICACION. El resultado es: '+oper)
        break;
    default:
        console.log('No se ingreso un operador valido.')
        break;
}
*/
// Ejercicio 12
/*
alert('Ingrese los lados del tringulo.')
var ladoA = prompt('Lado A')
var ladoB = prompt('Lado B')
var ladoC = prompt('Lado C')
if ((ladoA==ladoB)&&(ladoB==ladoC)){
    alert('Es un tringulo EQUILATERO')
}else{
    if ((ladoA!=ladoB)&&(ladoA!=ladoC)&&(ladoB!=ladoC)){
        alert('Es un triangulo ESCALENO')
    }else{
        alert('Es un triangulo ISOSCELES')
    }
}
*/
// Ejercicio 13
/*
const sueldo1 = 2000, sueldo2 = 3000, sueldo3 = 4000
var sueldo = 0
var categoria = prompt('Ingrese a que categoria pertenece.')
var horasEx = prompt('Ingrese la horas extras.')
switch (categoria){
    case ('1'):
        if (horasEx>20){
            sueldo=sueldo1+500
        }else{
            sueldo+=sueldo1
        }
        if (sueldo>4000){
            alert('El sueldo supero los u$s4000. Sueldo: u$s'+sueldo)
        }else{
            alert('El sueldo NO supero los u$s4000. Sueldo: u$s: '+sueldo)
        }
        break;
    case ('2'):
        sueldo+=sueldo2
        if (sueldo>4000){
            alert('El sueldo supero los u$s4000. Sueldo: u$s'+sueldo)
        }else{
            alert('El sueldo NO supero los u$s4000. Sueldo: u$s: '+sueldo)
        }
        break;
    case ('3'):
        if (horasEx>30){
            sueldo=sueldo3+1000
        }else{
            sueldo+=sueldo3
        }
        if (sueldo>4000){
            alert('El sueldo supero los u$s4000. Sueldo: u$s'+sueldo)
        }else{
            alert('El sueldo NO supero los u$s4000. Sueldo: u$s: '+sueldo)
        }
        break;
    default:
        alert('Ingreso una categoria no valida.')
        break;
}
*/

// UNIDAD 3
// Ejercicio 14
/*
for (let i=0; i<3; i++){
    var k= i+1;
    var num = prompt('Ingrese el numero '+k)
    if (((num%3)!=0)&&((num%5)!=0)){
        alert('El numero NO es multiplo de 3 ni de 5')
    }else{
        if (((num%3)==0)&&((num%5)==0)){
            alert('El numero es multiplo de 3 y de 5')
        }else{
            if (((num%3)==0)){
                alert('El numero es multiplo de 3')
            }else{
                if ((num%5)==0){
                    alert('El numero es multiplo de 5')
                }
            }
        }
    }
}
*/
// Ejercicio 15
/*
var rangoMax = 1, rangoMin = 0
while((rangoMax-rangoMin)<=5){
    rangoMin = prompt('Ingrese el minimo del rango')
    rangoMax = prompt('Ingrese el maximo del rango')
    if((rangoMax-rangoMin)<=5){
        alert('Volver a ingresar datos. El rango minimo entre ambos debe ser 5!')
    }
    if ((rangoMax-rangoMin)>5){
        var cant = prompt('Ingrese la cantidad de valores que desea ingresar!')
        for (let i=0; i<cant; i++){
            var num = prompt('Ingrese un numero')
            if ((num<=rangoMax)&&(num>=rangoMin)){
                if((num%2)==0){
                    alert('El numero esta dentro del rango y es PAR.')
                    break
                }else{
                    alert('El numero esta dentro del rango.')
                    break
                }
            }else{
                if((num%2)!=0){
                    alert('El numero NO esta dentro del rango y es IMPAR.')
                    break
                }else{
                    alert('El numero NO esta dentro del rango.')
                    break
                }          
            }
        }
    }
}
*/
// Ejercicio 16
/*
do{
    var num1 = prompt('Ingrese un numero.')
    var num2 = prompt('Ingrese el otro numero.')
    var operador = prompt('Ingrese el operador.')
    switch (operador){
        case ('+'):
            num1 = parseInt(num1)
            num2 = parseInt(num2)
            var oper = (num1+num2)
            alert('SUMA. El resultado es: '+oper)
            break;
        case ('-'):
            var oper = (num1-num2)
            alert('RESTA. El resultado es: '+oper)
            break;
        case ('/'):
            var oper = (num1/num2)
            alert('DIVISION. El resultado es: '+oper)
            break;
        case ('*'):
            var oper = (num1*num2)
            alert('MULTIPLICACION. El resultado es: '+oper)
            break;
        default:
            alert('No se ingreso un operador valido.')
            break;
    }
    var continuar = prompt('¿Desea continuar?\n y/n')
}while(continuar!='n')
*/
// Ejercicio 17
/*
var cant = prompt('Ingrese la cantidad de parciales.')
var acu=0, aprob=0, desaprob=0
for (let i=0; i<(cant-1); i++){
    do{
        var nota = prompt('Ingrese la nota del parcial')
        if ((nota>=0)&&(nota<=10)){
            nota=parseInt(nota)
            acu+=nota
            console.log('acu: '+acu)
            if (nota>=4){
                aprob++
                console.log('aprob: '+aprob)
            }else{
                desaprob++
                console.log('desaprob: '+desaprob)
            }
        }else{
            alert('La nota del parcial debe estar entre 0 y 10.\nIngrese la nota nuevamente.')
        }
    }while((nota<=0)||(nota>=10))
}
alert('Porcetaje de alumnos aprobados: '+((aprob*100)/cant)+'%')
alert('Porcetaje de alumnos desaprobados: '+((desaprob*100)/cant)+'%')
alert('Promedio de notas: '+(acu/cant))
*/
// Ejercicio 26
/*
var cant = prompt('¿Cual la cantidad de datos que desea ingresar?')
var max=0, min=9999999999, acu=0
for (let i=0; i<cant; i++){
    var dato = prompt('Ingrese un numero')
    dato=parseInt(dato)
    acu+=dato
    if (dato>max){
        max=dato
    }
    if (dato<min){
        min = dato
    }
}
alert('La sumatoria de los valores ingresado es: '+acu)
alert('El valor MAXIMO ingresado es: '+max)
alert('El valor MINIMO ingresado es: '+min)
*/
// Ejercicio 18
/*
var cant = prompt('Ingrese la cantidad de personas encuestadas.')
var cantH=0, cantM=0, cantH18=0, cantM25=0, acuAlturaH=0, acuEdadM=0, maxAltura=0, minEdad=9999
for (let i=0; i<cant; i++){
    var sexo = prompt('Ingrese el sexo.\n(H: hombre; M: mujer)')
    var edad = prompt('Ingrese la edad')
    var altura = prompt('Ingrese la altura (en centimetros)')
    if(altura>maxAltura){
        maxAltura=altura
    }
    if(edad<minEdad){
        minEdad=edad
    }
    switch(sexo){
        case 'M':
            cantM++
            edad=parseInt(edad)
            acuEdadM+=edad
            if(edad>25){
                cantM25++
            }
        break;
        case 'H':
            cantH++
            altura=parseInt(altura)
            acuAlturaH+=altura
            if(edad<18){
                cantH18++
            }
        break;
    }
}
alert('El porcentaje de mujeres mayores de 25 años es: '+(cantM25*100)/cantM+'%')
alert('El porcentaje de hombres menores de 18 años es: '+(cantH18*100)/cantH+'%')
alert('El promedio de edad de las mujeres es: '+(acuEdadM/cantM))
alert('El promedio de altura de los hombres es: '+(acuAlturaH/cantH))
alert('La menor edad ingresada es: '+minEdad+' años')
alert('La mayor altura ingresada es: '+maxAltura+' cm')
*/