# 🏎️ AutoVault — Catálogo de Altas Prestaciones & Superdeportivos (Práctica 5 React Native)

Aplicación móvil desarrollada con **React Native** y **Expo (SDK 58)** siguiendo los principios arquitectónicos y buenas prácticas de la guía docente de clase y el tutorial de **Midudev** ([Curso de React Native para principiantes](https://youtu.be/U23lNFm_J70)).

**Estudiante:** Aitor Portales Crespí  
**Cicle Formatiu:** 2º SMX / DAM • Desenvolupament d'Aplicacions Multiplataforma / Web  
**Materia:** Aplicacions Web / Desenvolupament d'Interfícies (APOF)  
**Centro:** CC Sant Josep Obrer  

---

## 🌟 ¿Qué es AutoVault?

**AutoVault** es una aplicación de automovilismo de altas prestaciones y superdeportivos inspirada en interfaces como Top Gear, Car and Driver y catálogos oficiales de fabricantes como Porsche, Ferrari y BMW M. 

Permite explorar los vehículos más icónicos del mundo del motor, filtrar por categorías (Superdeportivos, Deportivos, Eléctricos, SUVs y 4x4, Gran Turismo), buscar en tiempo real por marca, modelo o motorización, consultar fichas técnicas de ingeniería completas (CV, aceleración 0-100, velocidad punta, veredictos de la prensa) y gestionar un garaje personal de favoritos.

A nivel técnico, la aplicación implementa de forma práctica los 5 conceptos clave exigidos en la guía docente:
1. **Inicialización sin residuos (`npx`):** Creada con `npx create-expo-app` para evitar instalaciones globales obsoletas (`npm install -g`), garantizando siempre la última versión estable del SDK de Expo.
2. **Estrategia de desarrollo web primero:** Optimizada para iterar rápidamente en el navegador web (`npm run web`) con *Fast Refresh* casi instantáneo antes de pasar a dispositivos físicos.
3. **Arquitectura limpia desde plantilla vacía (*Blank Template*):** Estructura creada desde cero, separando datos (`src/data/cars.js`), componentes modulares reutilizables (`src/components/`) y constantes de diseño (`src/styles/theme.js`).
4. **Componentes nativos esenciales:** Uso riguroso de `<View>`, `<Text>` e `<Image>` (tanto local mediante `require` como remota mediante `{ uri }`), respetando el comportamiento nativo de Flexbox (`flexDirection: 'column'`) y la obligatoriedad de encapsular textos en `<Text>`.
5. **Entorno ligero y accesible:** Demostración de que **NO es necesario instalar Android Studio ni Xcode**, ejecutando la app en dispositivos móviles físicos mediante **Expo Go (código QR)** o en el navegador web para no sobrecargar los equipos del aula.

---

## 📱 Funcionalidades Principales

- **🔥 Vehículo Estrella (Hero Banner):** Presentación del bólido más destacado del catálogo (*Porsche 911 GT3 RS*) con fotografía panorámica, prestaciones clave y acceso directo a la ficha técnica.
- **🔍 Búsqueda en tiempo real y Filtros por Categoría:** Filtro instantáneo por marcas (*Porsche, Ferrari, BMW, Mercedes-AMG, Ford, Audi, Toyota*), modelos o tipos de motor (*V8, Bóxer, Eléctrico, Híbrido*).
- **📊 Tarjetas Técnicas (*CarCard*):** Visualización de potencia (CV), aceleración de 0 a 100 km/h, velocidad máxima, precio y botón de guardado en el garaje personal.
- **📑 Ficha Técnica de Ingeniería (*Modal Inmersivo*):** Al pulsar sobre cualquier vehículo, se despliega una ficha técnica detallada con desglose de motor, transmisión, chasis, sinopsis aerodinámica y cita del análisis de la prensa del motor.
- **❤️ Mi Garaje Personal:** Pestaña dedicada con los coches guardados por el usuario y contador dinámico en la barra de navegación.
- **📚 Memoria Técnica Integrada:** Pestaña con la justificación pedagógica y técnica de los 5 puntos de la guía docente.

---

## 📁 Estructura del Repositorio

```text
React 5/
├── assets/                    # Recursos multimedia nativos (iconos y splash screen)
│   ├── icon.png
│   └── splash-icon.png
├── src/
│   ├── components/            # Componentes modulares de interfaz
│   │   ├── BottomNav.js       # Barra de navegación inferior (Catálogo, Mi Garaje, Guía)
│   │   ├── CarCard.js         # Tarjeta de coche con prestaciones, foto y botón de garaje
│   │   ├── CarDetailModal.js  # Modal inmersivo con la ficha técnica completa del vehículo
│   │   ├── CategoryChips.js   # Píldoras de filtro por categoría con scroll horizontal
│   │   ├── ClassGuideView.js  # Vista técnica con la memoria de la práctica
│   │   ├── FeaturedHero.js    # Banner panorámico del superdeportivo estrella
│   │   ├── Header.js          # Barra superior con logotipo y branding AutoVault
│   │   ├── SearchBar.js       # Barra de búsqueda con icono y botón de borrado
│   │   └── SpecBadge.js       # Insignias de prestaciones mecánicas
│   ├── data/
│   │   └── cars.js            # Base de datos con los vehículos, prestaciones y análisis
│   └── styles/
│       └── theme.js           # Tokens de diseño (asfalto, fibra de carbono, rojo deportivo)
├── App.js                     # Componente principal que coordina estados y navegación
├── index.js                   # Punto de arranque registrado con registerRootComponent
├── metro.config.js            # Configuración oficial de Metro Bundler para Expo
├── app.json                   # Configuración del manifiesto de Expo
├── package.json               # Dependencias del proyecto (Expo 58, React 19, Vector Icons)
├── RESPUESTAS_TEORIA.md       # Memoria teórica completa de la práctica (Castellano)
├── RESPOSTES_TEORIA.md        # Memòria teòrica completa de la pràctica (Català)
└── README.md                  # Documentación del repositorio
```

---

## 🚀 Cómo Ejecutar la Aplicación

### 1. Clonar e instalar dependencias
```bash
npm install
```

### 2. Probar en el Navegador Web (Recomendado en aula)
```bash
npm run web
```
La aplicación se compilará con Metro y se abrirá en `http://localhost:8081`.

### 3. Probar en Móvil Físico con Expo Go
```bash
npm start
```
1. Descarga la app gratuita **Expo Go** en tu smartphone (Android o iOS).
2. Escanea el código QR que se genera en la terminal.
3. La aplicación se ejecutará de forma nativa en tu dispositivo mediante la red WiFi local.

### 4. Diagnóstico de Salud del Proyecto
```bash
npx expo-doctor
```
Verifica que las dependencias, SDK y configuraciones del manifiesto sean 100% compatibles (20/20 comprobaciones superadas).

---

## 🛠️ Tecnologías y Librerías Utilizadas

- **React Native 0.88** & **React 19**
- **Expo SDK 58** (`expo`, `expo-status-bar`, `expo-font`, `expo-asset`)
- **React Native Web** (`@expo/metro-runtime`, `react-dom`, `react-native-web`)
- **@expo/vector-icons** (Iconografía Ionicons)
