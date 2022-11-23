var horas;
var minutos;
var segundos_restantes;
var segundos_totais = parseInt(prompt("Segundos?"));

horas = parseInt(segundos_totais / 3600);
segundos_restantes = segundos_totais - (horas * 3600);
minutos = parseInt(segundos_restantes / 60);
segundos_restantes = segundos_restantes - (minutos * 60);

alert(horas+"H : "+minutos+"M : "+segundos_restantes+"S");
