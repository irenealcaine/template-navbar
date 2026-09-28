# template-navbar

Plantilla de componentes React con Vite, navegación, temas claro/oscuro y colores dinámicos.

## Stack

- [React 18](https://reactjs.org) + [Vite](https://vitejs.dev)
- [React Router](https://reactrouter.com) para las rutas
- [react-icons](https://react-icons.github.io/react-icons) para iconos
- [Sass](https://sass-lang.com) (CSS con anidamiento y variables)
- CSS Modules / Variables de tema en `src/Variables.css`

## Scripts

```bash
npm install      # instala dependencias
npm run dev      # entorno de desarrollo
npm run build    # build de producción
npm run preview  # previsualiza el build
```

## Estructura

```
src/
├── App.jsx                  # rutas y providers
├── Components/              # biblioteca de componentes
│   ├── Accordion/  Button/  Card/  CodeBlock/
│   ├── Footer/  Header/  HeaderSideBar/  Hr/
│   ├── Input/  List/  Loader/  Modal/  Pagination/
│   ├── Paragraph/  ProgressBar/  RadialProgress/  Table/
│   ├── Tabs/  Tag/  ThemeSwitcher/  Title/  Toast/
│   ├── BackButton/  ErrorMessage/  Content/
├── Context/
│   ├── darkModeContext.jsx   # tema claro/oscuro
│   └── themeColorContext.jsx # color main / dark main
├── Data/                     # datos de ejemplo (posts, productos)
├── Layout/Main/              # layout global (header, footer, contenido)
├── Pages/
│   ├── Home/                 # demo general + selector de colores
│   ├── Page1/  Page2/  Page3/  Page4/   # ejemplos prácticos en inglés
│   └── NotFound/
└── Utils/                    # constantes de navegación y fuentes
```

## Temas y colores

- Toggle claro/oscuro disponible en el footer (botón de tema) y en `HeaderSideBar`.
- El selector de colores (`ThemeSwitcher`) aparece solo en Home: permite cambiar
  el color principal (`--main`) y el color oscuro (`--dark-main`) mediante
  contextos de React (`themeColorContext`).
- Paleta disponible: blue, green, purple, red, orange, yellow, pink, lime.

## Páginas de ejemplo

- **Home** — demo de todos los componentes y selector de colores.
- **Page 1** — formularios (input, select, textarea, checkbox, switch).
- **Page 2** — tabla, tarjetas y paginación con datos de productos.
- **Page 3** — feedback y estado (loaders, progreso, modales, toasts).
- **Page 4** — contenido (acordeones, tabs, cards de blog, bloques de código).

## Añadir una página

1. Crea el componente en `src/Pages/`.
2. Registra la ruta en `src/App.jsx`.
3. Añade el item en `navbarItems` en `src/Utils/Constants.jsx`.