# Práctica 5: Introducción a React Native (APOF)

Proyecto interactivo y documentación estructurada basada en la **Guía de Clase: Introducción a React Native** y el tutorial en vídeo de **Midudev** ([Enlace al vídeo en YouTube](https://youtu.be/U23lNFm_J70)).

**Ciclo Formativo:** 2º SMX / DAM / DAW — Desarrollo de Aplicaciones Multiplataforma / Web  
**Materia:** Aplicaciones Web / Desarrollo de Interfaces (APOF)  
**Centro:** CC Sant Josep Obrer  

---

## 📱 Descripción del Proyecto

Esta aplicación desarrollada con **React Native (Expo SDK 58)** implementa un panel pedagógico e interactivo que demuestra de forma práctica y visual los 5 conceptos clave de la guía de clase:

1. **Creación e Inicialización (`npx`):** Comparativa entre `npx` y `npm install -g`, y diferencias entre Expo CLI y React Native Bare CLI.
2. **Estrategia de Desarrollo Web:** Demostración en vivo de estado reactivo y justificación de iterar en navegador antes de pasar a emuladores.
3. **Inicio desde Plantilla Vacía (*Blank Template*):** Explorador interactivo que explica la función de cada archivo en la raíz del proyecto.
4. **Componentes Nativos y Flexbox:**
   - Tabla de equivalencias `<View>`/`<div>`, `<Text>`/`<p>`, `<Image>`/`<img>`.
   - Selector interactivo de Flexbox: `flexDirection: 'column'` (por defecto en React Native) vs `flexDirection: 'row'` (web tradicional).
   - Selector de imágenes locales (`require`) vs remotas (`{ uri }`).
   - Demostración de la regla obligatoria para textos (`<Text>`).
5. **Requisitos de Entorno y Dudas Frecuentes:** Justificación y demostración de por qué **NO** es necesario instalar Android Studio o Xcode para comenzar, empleando Expo Go y el entorno Web.

---

## 📁 Estructura del Repositorio

```text
React 5/
├── assets/                          # Recursos multimedia estáticos (iconos, splash)
│   ├── icon.png
│   └── splash-icon.png
├── src/
│   ├── components/
│   │   ├── Header.js                # Encabezado visual con logo y metadatos
│   │   ├── SectionCard.js           # Tarjeta contenedora reutilizable con timestamps
│   │   ├── InitSection.js           # Punto 1: npx y plantillas
│   │   ├── WebStrategySection.js    # Punto 2: Desarrollo web rápido e interactividad
│   │   ├── ArchitectureSection.js   # Punto 3: Explorador de archivos del Blank Template
│   │   ├── NativeComponentsSection.js # Punto 4: Flexbox (column/row), imágenes y reglas
│   │   ├── EnvironmentSection.js    # Punto 5: FAQ Android Studio / Xcode vs Expo Go
│   │   └── Footer.js                # Pie de página institucional
│   └── styles/
│       └── theme.js                 # Constantes de diseño (colores, espaciados, fuentes)
├── App.js                           # Componente raíz con filtro de secciones
├── index.js                         # Punto de entrada de Expo (registerRootComponent)
├── app.json                         # Configuración y manifiesto de Expo
├── package.json                     # Scripts y dependencias del proyecto
├── RESPUESTAS_TEORIA.md             # Documentación teórica completa (Castellano)
├── RESPOSTES_TEORIA.md              # Documentació teòrica completa (Català)
└── README.md                        # Guía de uso y especificaciones del proyecto
```

---

## 🚀 Instrucciones de Ejecución

### 1. Instalación de dependencias
```bash
npm install
```

### 2. Ejecución rápida en el Navegador Web (Recomendado en aula)
```bash
npm run web
```
Abre la aplicación de forma inmediata en `http://localhost:8081` con recarga ultrarrápida (*Fast Refresh*) y sin sobrecargar la memoria RAM.

### 3. Ejecución en Dispositivo Móvil Físico con Expo Go
```bash
npm start
```
1. Abre la aplicación **Expo Go** en tu smartphone (Android o iOS).
2. Escanea el código QR que aparecerá en la terminal.
3. La aplicación se cargará directamente en tu móvil vía WiFi.

### 4. Diagnóstico de Salud del Proyecto
```bash
npx expo-doctor
```
Verifica que las dependencias, SDK y configuraciones del manifiesto sean 100% compatibles.

---

## 💡 Buenas Prácticas Aplicadas

- **Uso de `npx` y plantilla limpia (*blank*):** Código libre de boilerplate innecesario para un aprendizaje claro y modular.
- **Componentes nativos puros:** Uso riguroso de `<View>`, `<Text>` e `<Image>`, respetando las restricciones de la plataforma (no colocar texto libre sin `<Text>`).
- **Mobile-First con Flexbox:** Implementación nativa con `flexDirection: 'column'` por defecto y diseño responsive con `ScrollView` y `SafeAreaView`.
- **Estilos centralizados:** Uso de `StyleSheet.create` y tokens de diseño en `src/styles/theme.js` para mantener coherencia visual y rendimiento.
- **Bilingüismo:** Documentación teórica disponible tanto en castellano (`RESPUESTAS_TEORIA.md`) como en catalán (`RESPOSTES_TEORIA.md`).
