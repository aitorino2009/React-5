# Respuestas Teóricas y Buenas Prácticas — React Native (Unidad 5)

**Ciclo Formativo:** Formación Profesional — Desarrollo de Aplicaciones Multiplataforma / Web (2º SMX / DAM / DAW)  
**Materia:** Aplicaciones Web / Desarrollo de Interfaces (APOF)  
**Centro:** CC Sant Josep Obrer  
**Recurso de referencia:** [Tutorial en vídeo de Midudev (YouTube)](https://youtu.be/U23lNFm_J70)  
**Proyecto Práctico:** AutoVault (Catálogo de Automovilismo & Altas Prestaciones)

---

## Índice de Contenidos

1. [Punto 1 (Minuto 23:03): Creación e Inicialización del Proyecto (`npx`)](#punto-1-minuto-2303-creación-e-inicialización-del-proyecto-npx)
2. [Punto 2 (Minutos 26:50 - 28:20): Enrutado y Estrategia de Desarrollo Web](#punto-2-minutos-2650---2820-enrutado-y-estrategia-de-desarrollo-web)
3. [Punto 3 (Minuto 37:05): Inicio desde Plantilla Vacía (*Blank Template*)](#punto-3-minuto-3705-inicio-desde-plantilla-vacía-blank-template)
4. [Punto 4 (Minutos 41:50 - 44:05): Componentes Nativos de React Native](#punto-4-minutos-4150---4405-componentes-nativos-de-react-native)
5. [Punto 5 (Minuto 53:20): Requisitos de Entorno y Dudas Frecuentes](#punto-5-minuto-5320-requisitos-de-entorno-y-dudas-frecuentes)

---

## Punto 1 (Minuto 23:03): Creación e Inicialización del Proyecto (`npx`)

### 1.1 ¿Qué es `npx` y qué concepto fundamental introduce?
`npx` (Node Package eXecute) es una herramienta CLI integrada en `npm` (a partir de la versión 5.2) diseñada para **descargar, ejecutar y descartar paquetes de Node.js bajo demanda**, sin requerir una instalación global previa en el sistema operativo.

### 1.2 Ventajas clave de utilizar `npx` frente a la instalación global (`npm install -g`):
1. **No ensucia el sistema operativo:** Las herramientas globales quedan ancladas en carpetas del sistema, ocupando espacio en disco permanentemente aunque solo se usen una vez.
2. **Garantía de versión más reciente:** Cuando ejecutamos `npx create-expo-app`, npm descarga temporalmente la última versión estable del generador, evitando crear proyectos con CLI obsoletos.
3. **Eliminación de conflictos de permisos:** En sistemas multiusuario o aulas de informática (donde los alumnos a menudo no tienen permisos de administrador para `npm install -g`), `npx` funciona perfectamente en el espacio de usuario local.
4. **Independencia por proyecto:** Previene discrepancias entre diferentes proyectos que puedan depender de versiones incompatibles de una misma herramienta de generación.

### 1.3 Comparativa de Flujos de Inicialización: Expo CLI vs React Native Bare CLI

| Característica | Expo CLI (`npx create-expo-app`) | React Native CLI Bare (`npx react-native init`) |
| :--- | :--- | :--- |
| **Comando de inicio** | `npx create-expo-app mi-app --template blank` | `npx react-native init MiApp` |
| **Generación de carpetas nativas** | No crea `android/` ni `ios/` de forma manual (Continuous Native Generation). | Genera carpetas `android/` e `ios/` con código Java/Kotlin y Objective-C/Swift desde el inicio. |
| **Dependencia de SDK nativo** | **No** requiere Android Studio ni Xcode para arrancar el desarrollo. | **Obligatorio** instalar y configurar Android SDK, Gradle, NDK o Xcode antes de poder ejecutar. |
| **Velocidad de configuración** | Inmediata (menos de 2 minutos). | Lenta (fácilmente más de 1 hora de instalación de SDKs nativos). |
| **Recomendación docente** | Ideal para iniciarse y comprender los fundamentos de React Native sin fricción técnica. | Recomendado únicamente para proyectos que requieran código nativo C++/Java personalizado desde el día uno. |

---

## Punto 2 (Minutos 26:50 - 28:20): Enrutado y Estrategia de Desarrollo Web

### 2.1 Justificación pedagógica y técnica del desarrollo inicial en Navegador Web
Una de las mejores prácticas destacadas en el curso de Midudev es **iniciar el desarrollo, maquetación e iteración de la interfaz de usuario en el navegador web** (`npm run web`), en lugar de lanzar emuladores pesados de forma prematura.

### 2.2 Beneficios directos de esta estrategia en AutoVault:
1. **Iteración ultrarrápida con Fast Refresh:** Los cambios en las tarjetas de los coches (`CarCard.js`), la paleta de colores deportivos o los filtros se reflejan en el navegador en milisegundos sin perder el estado de la aplicación.
2. **Inspección visual inmediata con Chrome DevTools:** Permite depurar el árbol de elementos, la jerarquía de Flexbox, la consola de JavaScript y el dimensionamiento de las imágenes de los vehículos.
3. **Consumo mínimo de recursos:** Un navegador web consume una fracción mínima de memoria RAM y procesador en comparación con un emulador de Android (AVD) o el simulador de iOS.
4. **Agilidad en el aula de informática:** En ordenadores de centros educativos con hardware limitado, ejecutar emuladores nativos puede colapsar el sistema. Desarrollar primero en web garantiza fluidez a todos los estudiantes.

### 2.3 ¿Cuándo pasar a dispositivos móviles?
Una vez que el catálogo de coches, las fichas técnicas y los componentes visuales están bien validados en el entorno web, se pasa a probar en móvil físico mediante **Expo Go (escaneando el código QR)** para verificar:
- Respuestas a gestos táctiles reales (scroll fluido en la lista de coches, toques en el modal).
- Dimensiones reales de pantallas móviles (notch, islas dinámicas, barras de estado).
- Comportamiento de las imágenes remotas con diferentes resoluciones de pantalla móvil.

---

## Punto 3 (Minuto 37:05): Inicio desde Plantilla Vacía (*Blank Template*)

### 3.1 Importancia de partir de una plantilla limpia (*Blank Template*)
Las plantillas predeterminadas complejas (como la plantilla *tabs*) incluyen código pregenerado con sistemas de navegación preconfigurados, iconos y tipografías que pueden distraer del aprendizaje fundamental.

Partir de una **plantilla limpia (*blank*)**:
- Evita código innecesario ("código basura" o boilerplate).
- Permite construir la aplicación de coches paso a paso con total control y comprensión.
- Facilita identificar con exactitud la responsabilidad de cada archivo del proyecto.

### 3.2 Anatomía del proyecto: Función exacta de cada archivo en la raíz

- **`App.js`:**
  - Componente raíz de la aplicación.
  - Orquesta el estado global: búsqueda por texto, filtro de categorías, lista del garaje personal, vehículo seleccionado y apertura del modal.
- **`index.js`:**
  - Punto de entrada técnico que registra el componente `App` mediante `registerRootComponent(App)` de Expo en el `AppRegistry` de React Native.
- **`metro.config.js`:**
  - Archivo de configuración oficial de Metro Bundler que resuelve de forma óptima los módulos y assets nativos y web.
- **`app.json`:**
  - Manifiesto de Expo donde se configuran el nombre de la app (`AutoVault`), slug, versión, orientación de pantalla, iconos y splash screen.
- **`package.json`:**
  - Archivo de manifiesto de Node.js con dependencias (`expo`, `react`, `react-native`, `@expo/vector-icons`) y scripts de ejecución.
- **`src/data/cars.js`:**
  - Base de datos local estructurada con la información de los vehículos, especificaciones mecánicas y críticas.
- **`src/components/`:**
  - Componentes modulares reutilizables (`CarCard.js`, `CarDetailModal.js`, `FeaturedHero.js`, `SearchBar.js`, `BottomNav.js`...).
- **`src/styles/theme.js`:**
  - Constantes de diseño centralizadas con una estética deportiva de alta gama.

---

## Punto 4 (Minutos 41:50 - 44:05): Componentes Nativos de React Native

### 4.1 Concepto de equivalencia con el DOM Web
React Native no utiliza HTML. El código JSX invoca componentes nativos que el motor traduce a las vistas nativas reales de cada plataforma:
- En **Android:** Se transforman en vistas nativas Java/Kotlin (`android.view.ViewGroup`, `android.widget.TextView`, `android.widget.ImageView`).
- En **iOS:** Se transforman en vistas nativas de UIKit (`UIView`, `UILabel`, `UIImageView`).
- En **Web:** Mediante `react-native-web`, se transforman en elementos estándar del DOM optimizados (`<div>`, `<span>`, `<img>`).

### 4.2 Tabla de Equivalencias y Buenas Prácticas

| Componente React Native | Equivalente HTML | Descripción y Buenas Prácticas |
| :--- | :--- | :--- |
| **`<View>`** | `<div>` | Contenedor fundamental para agrupar y organizar las tarjetas de los coches. Utiliza Flexbox por defecto. |
| **`<Text>`** | `<p>` / `<span>` | Componente obligatorio para renderizar cualquier texto (marca, modelo, potencia). |
| **`<Image>`** | `<img>` | Componente para mostrar las fotografías de los coches (locales o remotas). |

### 4.3 Diferencia clave de Flexbox: `flexDirection`
- **En la Web clásica (CSS):** La propiedad `flex-direction` tiene por defecto el valor **`row`** (alineación horizontal en fila).
- **En React Native:** La propiedad `flexDirection` tiene por defecto el valor **`column`** (alineación vertical en columna).
  - *Razón técnica:* Las pantallas de los smartphones son predominantemente verticales. Al ser `column` el valor por defecto, las tarjetas de los coches se apilan de forma natural de arriba hacia abajo sin necesidad de estilos adicionales.

### 4.4 Regla estricta del componente `<Text>`
En HTML es válido escribir texto suelto dentro de un `<div>`:
```html
<div>Porsche 911 GT3 RS</div>
```
En React Native está **terminantemente prohibido** colocar texto suelto dentro de una `<View>`:
```jsx
// ❌ ERROR en React Native (Text strings must be rendered within a <Text> component)
<View>Porsche 911 GT3 RS</View>

// ✅ CORRECTO en React Native
<View>
  <Text>Porsche 911 GT3 RS</Text>
</View>
```

### 4.5 Carga de Imágenes: Locales vs Remotas
En **AutoVault** se utilizan ambas modalidades:

1. **Imágenes Locales (empaquetadas estáticamente):**
   ```jsx
   <Image source={require('./assets/icon.png')} style={{ width: 48, height: 48 }} />
   ```
   - Utilizan la función `require()`.
   - Se analizan en tiempo de empaquetado y sus dimensiones son conocidas desde el inicio.

2. **Imágenes Remotas (fotografías de vehículos vía URL):**
   ```jsx
   <Image source={{ uri: car.image }} style={{ width: '100%', height: 160 }} resizeMode="cover" />
   ```
   - Utilizan un objeto con la propiedad `uri`.
   - **Obligatorio:** Deben tener especificadas explícitamente las dimensiones (`width` y `height`) en el estilo, ya que el motor de renderizado no conoce el tamaño del recurso antes de descargarlo por la red.

---

## Punto 5 (Minuto 53:20): Requisitos de Entorno y Dudas Frecuentes

### 5.1 Pregunta Clave: ¿Es obligatorio instalar Android Studio o Xcode para empezar?
> **Respuesta oficial y fundamentada: NO ES OBLIGATORIO.**

### 5.2 Justificación y alternativas ligeras recomendadas:
Para desarrollar aplicaciones móviles en React Native, aprender la sintaxis de componentes, dominar Flexbox, manejar estados reactivos y crear experiencias fluidas, **no se requiere** instalar Android Studio (más de 15 GB de instalación) ni configurar pesados emuladores de Android (AVD) que consumen entre 4 y 8 GB de RAM:

1. **Expo Go en dispositivo físico:**
   - Se descarga gratuitamente la aplicación **Expo Go** desde Google Play Store o Apple App Store en el teléfono móvil del alumno.
   - En la consola del proyecto se ejecuta:
     ```bash
     npm start
     ```
   - Se escanea el código QR mostrado en la terminal con la cámara del smartphone.
   - La aplicación se ejecuta de inmediato en el hardware real del teléfono con conexión WiFi local, con recarga en tiempo real (*Fast Refresh*).
2. **Entorno Web en el navegador:**
   - Ejecutando:
     ```bash
     npm run web
     ```
   - La aplicación se ejecuta de inmediato en el navegador web local (Chrome/Firefox/Edge), con bajísimo consumo de recursos y total fluidez.

### 5.3 ¿Cuándo es necesario Android Studio o Xcode?
Solo se requiere instalar entornos nativos completos en fases avanzadas del ciclo de desarrollo cuando:
- Se desarrollan módulos nativos personalizados en C++, Java, Kotlin, Swift u Objective-C.
- Se requiere compilar y firmar localmente los paquetes binarios de distribución (`.apk`, `.aab`, `.ipa`) sin utilizar servicios en la nube como EAS Build (`eas build`).
- Se necesita depuración a bajo nivel del hilo nativo o profiling profundo de memoria con Android Profiler / Instruments.
