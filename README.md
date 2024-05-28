# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

calculadora

El Componente padre será “Calculator”:
-Debe contener el estado del valor actual de la calculadora (useState).
-Debe mostrar el valor actual en un campo de texto.
-Debe tener botones para los números del 0 al 9, +, -, *, / e =.


Los componentes hijos serán “Button”:
-Debe recibir como propiedad el valor del botón y la función para transmitir la información.
-Debe mostrar el valor recibido en su interior.