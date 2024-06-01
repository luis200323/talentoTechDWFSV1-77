//determinar el dia de la semana con switch
var diadelasemana = parseInt(
  prompt("Ingrese un numero para determinar el dia de la semana")
);

switch (diadelasemana) {
  case 1:
    alert(diadelasemana + " corresponde al dia Lunes");

    break;
  case 2:
    alert(diadelasemana + " corresponde al dia Martes");

    break;
  case 3:
    alert(diadelasemana + " corresponde al dia Miercoles");

    break;
  case 4:
    alert(diadelasemana + " corresponde al dia Jueves");

    break;
  case 5:
    alert(diadelasemana + " corresponde al dia Viernes");

    break;
  case 6:
    alert(diadelasemana + " corresponde al dia Sabado");

    break;
  case 7:
    alert(diadelasemana + " corresponde al dia Domingo");
    break;

  default:
    alert("Numero inavalido, por favor ingresa un entre 1-8");
    break;
}

//Determina si un numero es par o impar
alert("Ahora verifiquemos si un numero es par o impar");
let numero = parseInt(prompt("Ingrese un numero"));

if (numero % 2 === 2) {
  alert(numero + " es un numero par");
} else {
  alert(numero + " es un numero impar");
}
//Determinar el tipo de dia (laboral o fin de semana)
alert("Por ultimo determinemos si un dia es laboral o fin de semana");

var dia = prompt(
  "Ingrese el dia para determinar si es laboral o fin de semana"
);

switch (dia) {
  case "lunes":
    alert(dia + " es un dia laboral");
    break;
  case "martes":
    alert(dia + " es un dia laboral");
    break;
  case "miercoles":
    alert(dia + " es un dia laboral");
    break;
  case "jueves":
    alert(dia + " es un dia laboral");
    break;
  case "viernes":
    alert(dia + " es un dia laboral");
    break;

  default:
    alert(dia + " es un dia no laboral");
    break;
}
