#include <iostream>
#include <cstdlib>

using namespace std;

int
main ()
{
  float IMC, altura, peso;
  bool Altura;
Principio:
  cout <<
    "Bienvenido a la calculadora de C-ndice de masa corporal (IMC)\n\n A continuaciC3n ingrese el su altura (Ej. 1.64): ";
  cin >> altura;
  system ("clear");
  cout << "Tu altura es: " << altura <<
    "m ? (Si la respuesta es sC-, pulse 1). ";
  cin >> Altura;
  if (Altura == false)
    goto Principio;
Middle:
  Altura = false;
  system ("clear");
  cout << "Ahora introduzca su peso (Ej. 58.4): ";
  cin >> peso;
  system ("clear");
  cout << "Tu peso es: " << peso <<
    "Kg ? (Si la respuesta es sC-, pulse 1). ";
  cin >> Altura;
  if (Altura == false)
    goto Middle;
  IMC = peso / (altura * altura);
  system ("clear");
  cout << "Aplicando la fC3rmula de IMC: peso/alturaB2 tu IMC es: " << IMC;
  if (IMC < 18.5)
    {
      cout <<
	", lo que da como resultado que tienes un nivel no saludable de masa corporal, especC-ficamente estC!s con muy bajo peso.";
    }
  else if ((IMC >= 18.5) && (IMC <= 24.9))
    {
      cout <<
	", lo que da como resultado que tienes un nivel saludable de masa corporal.";
    }
  else if ((IMC >= 25) && (IMC < 29.9))
    {
      cout <<
	", lo que da como resultado que tienes un nivel no saludable de masa corporal, especC-ficamente estC!s con sobrepeso.";
    }
  else
    cout << "OcurriC3 un error inesperado.";

}
