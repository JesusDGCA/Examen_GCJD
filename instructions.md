# 🚀 Proyecto React Moderno con Vite: Plan de Desarrollo para Copilot

¡Hola, Copilot! Vamos a construir una aplicación de React usando Vite. Este documento es nuestra hoja de ruta. Tómalo como una conversación directa sobre lo que necesito que codifiques.

---

## 🛠️ Entorno y Estructura Base

Asume que el proyecto ya está inicializado con Vite y React.

### 📂 Estructura de Archivos (Paso Inicial)

Por favor, ayúdame a crear las siguientes carpetas dentro de `src/` para mantener el proyecto ordenado:

* **`src/components/Layout/`**: Para la barra de navegación y el pie de página.
* **`src/components/Features/`**: Para los componentes que tienen lógica de negocio, como el carrusel o las listas de productos.
* **`src/hooks/`**: Aquí guardaremos la lógica de React reutilizable.

---

## 🎯 1. Componente de Navegación (`Navbar`)

**Ubicación:** `src/components/Layout/Navbar.jsx`

Quiero un componente de navegación inteligente:

1.  Debe usar **`useState`** para controlar si el menú está abierto o cerrado (**`isMenuOpen`**).
2.  Necesita una función **`toggleMenu`** para cambiar ese estado.
3.  Los enlaces de navegación serán: **Home**, **Productos** y **Contacto**.
4.  Asegura que el componente sea **responsivo**. En pantallas pequeñas, debe mostrar solo el logo y un botón de "hamburguesa" que active el menú usando el estado `isMenuOpen`.

---

## 🎯 2. Lógica Asíncrona: El Manejo de APIs

Aquí usaremos lógica **asíncrona** con **`async/await`** y hooks.

### A. Custom Hook para Fetching (`useFetchData`)

**Ubicación:** `src/hooks/useFetchData.js`

1.  Crea un **Custom Hook** llamado **`useFetchData(url)`**.
2.  Este hook tiene que usar **`useState`** para tres cosas:
    * **`data`** (para guardar la respuesta de la API).
    * **`loading`** (un booleano, inicialmente `true`).
    * **`error`** (para guardar cualquier error).
3.  Implementa la función de fetching dentro de un **`useEffect`**. La función debe ser **`async`** y usar **`await fetch(url)`**.
4.  Utiliza **`try...catch`** para manejar cualquier error de red o de la API.
5.  **Muy importante:** Incluye la **función de limpieza** del `useEffect` para evitar advertencias de React.
6.  El hook debe devolver un objeto: **`{ data, loading, error }`**.

### B. Componente que Consume el Hook (`AsyncContent`)

**Ubicación:** `src/components/Features/AsyncContent.jsx`

1.  Crea el componente funcional **`AsyncContent`**.
2.  Llama al hook **`useFetchData`** con esta URL de prueba: `https://jsonplaceholder.typicode.com/posts?_limit=4`.
3.  Maneja los tres estados devueltos (`loading`, `error`, `data`) con **renderizado condicional**:
    * Si **`loading`** es `true`, muestra: "Cargando datos...".
    * Si hay un **`error`**, muestra: "Ocurrió un error: [mensaje]".
    * Si **`data`** existe, itera sobre los elementos y muestra el **título** de cada uno.

---

## 🎯 3. Componente de Carrusel Dinámico (`ContentCarousel`)

**Ubicación:** `src/components/Features/ContentCarousel.jsx`

Necesito un carrusel de contenido flexible:

1.  Se llamará **`ContentCarousel`** y recibirá un prop llamado **`slides`** (un array con el contenido a mostrar).
2.  Utiliza **`useState`** para rastrear el índice actual (**`currentIndex`**).
3.  Crea las funciones **`goToNext`** y **`goToPrev`**.
4.  La lógica de estas funciones debe implementar un **"loop infinito"**: si das "siguiente" en el último slide, vuelve al primero, y si das "anterior" en el primero, ve al último.
5.  Muestra el contenido que corresponde al `slides[currentIndex]`.

---

## 🎯 4. Ensamblaje en el Componente Principal

**Ubicación:** `src/App.jsx`

Por favor, ensambla todo aquí:

1.  Importa y renderiza el **`Navbar`**.
2.  Importa y renderiza el **`AsyncContent`**.
3.  Define un array simple de prueba (ej. `const carouselItems = ['Contenido 1', 'Contenido 2', 'Contenido 3']`) y pásalo como prop **`slides`** al componente **`ContentCarousel`**.