# 🎮 GameScore — Catálogo de Videojuegos & Crítica (Práctica 5 React Native)

Aplicación móvil desarrollada con **React Native** y **Expo (SDK 58)** siguiendo el tutorial de clase de **Midudev** ([Curso de React Native para principiantes](https://youtu.be/U23lNFm_J70)).

**Estudiante:** Aitor Portales Crespí  
**Cicle Formatiu:** 2º SMX / DAM • Desenvolupament d'Aplicacions Multiplataforma / Web  
**Materia:** Aplicacions Web / Desenvolupament d'Interfícies (APOF)  
**Centro:** CC Sant Josep Obrer  

---

## 🌟 ¿Qué es GameScore?

**GameScore** es una aplicación de catálogo y crítica de videojuegos inspirada en plataformas como Metacritic, IGN y Steam. Permite a los usuarios descubrir los títulos más aclamados por la prensa especializada, filtrar por géneros y plataformas, consultar fichas técnicas completas con sinopsis y citas de análisis, y gestionar su propia lista personal de deseados.

A nivel técnico, la aplicación sirve como demostración práctica y funcional de los 5 conceptos clave de la guía de clase de React Native:
1. **Inicialización sin residuos (`npx`):** Construida directamente con `npx create-expo-app` para garantizar el uso de las últimas versiones sin dependencias globales obsoletas.
2. **Estrategia de desarrollo web primero:** Optimizada para iterar rápidamente en navegador (`npm run web`) con *Fast Refresh* antes de probar en móviles físicos.
3. **Arquitectura limpia desde plantilla vacía (*Blank Template*):** Código estructurado desde cero, separando datos (`src/data/`), componentes (`src/components/`) y estilos (`src/styles/`).
4. **Componentes nativos esenciales:** Uso riguroso de `<View>`, `<Text>` e `<Image>` (tanto local con `require` como remota con `{ uri }`), aprovechando el comportamiento nativo de Flexbox (`flexDirection: 'column'`).
5. **Entorno ligero y accesible:** Ejecutable al 100% en dispositivos reales mediante **Expo Go** (código QR) o en navegador, sin necesidad de instalar los pesados emuladores de Android Studio o Xcode.

---

## 📱 Capturas y Funcionalidades Principales

- **🔥 Destacado de la Crítica (Hero Banner):** Muestra el título con mayor valoración del momento con carátula panorámica, insignia de Metascore dinámica y botón de análisis rápido.
- **🔍 Búsqueda en tiempo real y Filtros por Género:** Filtra instantáneamente entre títulos, estudios y plataformas mediante píldoras táctiles con scroll horizontal.
- **🏷️ Badges de Puntuación Dinámicos:** Sistema de color adaptativo según el Metascore (Verde para Obra Maestra $\ge 90$, Ámbar para Notable $75-89$, Rojo para Regular $< 75$).
- **📑 Modal Inmersivo de Ficha Técnica:** Al pulsar sobre cualquier tarjeta, se despliega una ficha con sinopsis, duración aproximada, distribuidora, plataformas y cita del analista.
- **❤️ Lista Personal de Deseados:** Sistema de favoritos reactivo con contador en la barra de navegación inferior.
- **📚 Pestaña de Guía Docente Integrada:** Sección dedicada que detalla los 5 puntos técnicos de la guía de clase con explicaciones pedagógicas.

---

## 📁 Estructura del Proyecto

```text
React 5/
├── assets/                    # Recursos gráficos nativos (iconos y splash screen)
│   ├── icon.png
│   └── splash-icon.png
├── src/
│   ├── components/            # Componentes modulares de interfaz
│   │   ├── BottomNav.js       # Barra de navegación inferior (Catálogo, Mi Lista, Guía)
│   │   ├── CategoryChips.js   # Píldoras de filtro por género con scroll horizontal
│   │   ├── ClassGuideView.js  # Vista técnica con la memoria de la práctica
│   │   ├── FeaturedHero.js    # Banner del videojuego destacado
│   │   ├── GameCard.js        # Tarjeta de juego con carátula, datos y botón de favoritos
│   │   ├── GameDetailModal.js # Modal inmersivo con la ficha completa del juego
│   │   ├── Header.js          # Barra superior con logotipo y branding
│   │   ├── ScoreBadge.js      # Insignia de puntuación con colores dinámicos
│   │   └── SearchBar.js       # Barra de búsqueda con icono y botón de borrado
│   ├── data/
│   │   └── games.js           # Base de datos con los videojuegos, notas y críticas
│   └── styles/
│       └── theme.js           # Tokens de diseño (colores oscuros, espaciados y bordes)
├── App.js                     # Componente principal que coordina estados y navegación
├── index.js                   # Punto de arranque registrado con registerRootComponent
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

### 2. Probar en el Navegador Web (Desarrollo rápido)
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

### 4. Chequeo de Salud del Entorno
```bash
npx expo-doctor
```
Valida que todas las dependencias y configuraciones estén 100% sincronizadas con el SDK de Expo.

---

## 🛠️ Tecnologías y Librerías Utilizadas

- **React Native 0.88** & **React 19**
- **Expo SDK 58** (`expo`, `expo-status-bar`, `expo-font`, `expo-asset`)
- **React Native Web** (`@expo/metro-runtime`, `react-dom`, `react-native-web`)
- **@expo/vector-icons** (Iconografía Ionicons)
