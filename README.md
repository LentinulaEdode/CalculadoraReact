--------------------------------------------------------------------------------------------
De la creación de TuWeather, llega TuCalcu! 

Esta aplicación React se encarga de crear una calculadora simple con funcionalidades básicas y la capacidad de aceptar entrada tanto mediante clics de botón como a través del teclado.
--------------------------------------------------------------------------------------------

Breve explicación del código:

- useState se utiliza para manejar el estado del componente. "input" guarda la cadena de entrada actual en la calculadora.

- handleButtonClick(value): Agrega el valor del botón presionado a la entrada actual.

- calculateResult(): Evalúa la expresión en la entrada y actualiza el estado con el resultado. Si hay un error en la evaluación, se establece el estado en 'Error'.

- clearInput(): Restablece la entrada a una cadena vacía.

- handleKeyDown(event): Captura las pulsaciones de teclas y realiza acciones correspondientes. Por ejemplo, si la tecla es un número o un operador matemático, se agrega a la entrada. Si es "Enter", se realiza la operación, y así sucesivamente.

- useEffect se utiliza para añadir y quitar un evento de escucha para las pulsaciones de teclas. Esto asegura que el componente responda a las teclas incluso cuando no hay clics del ratón.


--------------------------------------------
Se trató de implementar "TailwindCss", pero finalmente se decidió no utilizarlo.
El estilo se encuentra en puro CSS. 