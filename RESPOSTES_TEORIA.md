# Respostes Teòriques i Bones Pràctiques — React Native (Unitat 5)

**Cicle Formatiu:** Formació Professional — Desenvolupament d'Aplicacions Multiplataforma / Web (2n SMX / DAM / DAW)  
**Matèria:** Aplicacions Web / Desenvolupament d'Interfícies (APOF)  
**Centre:** CC Sant Josep Obrer  
**Recurs de referència:** [Tutorial en vídeo de Midudev (YouTube)](https://youtu.be/U23lNFm_J70)

---

## Índex de Continguts

1. [Punt 1 (Minut 23:03): Creació i Inicialització del Projecte (`npx`)](#punt-1-minut-2303-creació-i-inicialització-del-projecte-npx)
2. [Punt 2 (Minuts 26:50 - 28:20): Enrutament i Estratègia de Desenvolupament Web](#punt-2-minuts-2650---2820-enrutament-i-estratègia-de-desenvolupament-web)
3. [Punt 3 (Minut 37:05): Inici des de Plantilla Buida (*Blank Template*)](#punt-3-minut-3705-inici-des-de-plantilla-buida-blank-template)
4. [Punt 4 (Minuts 41:50 - 44:05): Components Natius de React Native](#punt-4-minuts-4150---4405-components-natius-de-react-native)
5. [Punt 5 (Minut 53:20): Requisits d'Entorn i Dubtes Freqüents](#punt-5-minut-5320-requisits-dentorn-i-dubtes-freqüents)

---

## Punt 1 (Minut 23:03): Creació i Inicialització del Projecte (`npx`)

### 1.1 Què és `npx` i quin concepte fonamental introdueix?
`npx` (Node Package eXecute) és una utilitat integrada a `npm` (a partir de la versió 5.2) dissenyada per **descarregar, executar i descartar paquets de Node.js sota demanda**, sense necessitat d'instal·lació global prèvia al sistema operatiu.

### 1.2 Avantatges clau d'utilitzar `npx` respecte a la instal·lació global (`npm install -g`):
1. **No embruta el sistema operatiu:** Les eines globals queden emmagatzemades a carpetes del sistema ocupant espai permanentment, encara que només s'utilitzin una vegada.
2. **Garantia de versió més recent:** En executar `npx create-expo-app`, npm descarrega temporalment la darrera versió estable de la plantilla, evitant generar projectes amb eines desactualitzades.
3. **Eliminació de conflictes de permisos:** A les aules d'informàtica (on l'alumnat sovint no té privilegis d'administrador per a `npm install -g`), `npx` funciona de manera transparent dins l'espai d'usuari local.
4. **Independència entre projectes:** Evita discrepàncies entre diferents aplicacions que depenguin de versions incompatibles d'un mateix generador.

### 1.3 Comparativa: Expo CLI vs React Native Bare CLI

| Característica | Expo CLI (`npx create-expo-app`) | React Native CLI Bare (`npx react-native init`) |
| :--- | :--- | :--- |
| **Ordre d'inici** | `npx create-expo-app el-meu-projecte --template blank` | `npx react-native init ElMeuProjecte` |
| **Carpetes natives manuals** | No crea carpetes `android/` ni `ios/` manualment (Continuous Native Generation). | Genera carpetes `android/` i `ios/` amb codi natiu des del primer instant. |
| **Dependència de SDK natiu** | **No** requereix Android Studio ni Xcode per començar. | **Obligatori** instal·lar i configurar Android SDK, Gradle, NDK o Xcode abans d'executar. |
| **Velocitat de posada en marxa** | Immediata (menys de 2 minuts). | Lenta (fàcilment més d'una hora d'instal·lacions complexes). |
| **Recomanació docent** | Ideal per iniciar-se i comprendre els fonaments de React Native sense entrebancs tècnics. | Només recomanat per a projectes que requereixin codi natiu C++/Java personalitzat des del principi. |

---

## Punt 2 (Minuts 26:50 - 28:20): Enrutament i Estratègia de Desenvolupament Web

### 2.1 Justificació pedagògica i tècnica del desenvolupament inicial a Navegador Web
Una de les millors pràctiques destacades al curs de Midudev és **iniciar el desenvolupament, maquetació i iteració de la interfície d'usuari al navegador web** (`npm run web`), en lloc d'engegar emuladors pesants de forma prematura.

### 2.2 Beneficis directes d'aquesta estratègia:
1. **Iteració ultraràpida amb Fast Refresh:** Els canvis a `App.js` o components es reflecteixen al navegador en mil·lisegons sense perdre l'estat actual de la pantalla.
2. **Inspecció visual immediata amb Chrome DevTools:** Permet depurar l'arbre d'elements, la jerarquia Flexbox, la consola i l'emmagatzematge amb eines conegudes.
3. **Consum mínim de recursos:** Un navegador consumeix una fracció mínima de memòria RAM en comparació amb un emulador AVD d'Android o el simulador d'iOS.
4. **Agilitat a l'aula:** Als ordinadors de centres educatius amb maquinari limitat, engegar emuladors pot saturar el sistema. Treballar primer en web garanteix la màxima fluïdesa.

### 2.3 Quan passar a dispositius mòbils?
Un cop validada l'estructura visual en web, es passa al telèfon físic mitjançant **Expo Go (escanejant el codi QR)** per comprovar:
- Resposta a gestos tàctils reals (*touch targets*, desplaçament natiu).
- Dimensions reals de pantalles mòbils (*notch*, barres d'estat).
- APIs natives del dispositiu (càmera, acceleròmetre, geolocalització, notificacions).

---

## Punt 3 (Minut 37:05): Inici des de Plantilla Buida (*Blank Template*)

### 3.1 Importància de partir d'una plantilla neta (*Blank Template*)
Les plantilles completes predeterminades incorporen codi pregenerat (sistemes de navegació per pestanyes, icones, tipografies i rutes complexes) que pot confondre l'estudiant.

Partir d'una **plantilla neta (*blank*)**:
- Evita codi innecessari (*boilerplate*).
- Permet construir l'aplicació pas a pas amb ple control i comprensió.
- Facilita identificar amb exactitud la responsabilitat de cada fitxer del projecte.

### 3.2 Anatomia del projecte: Funció exacta de cada fitxer a l'arrel

- **`App.js`:**
  - Component arrel de l'aplicació.
  - Defineix la interfície principal que es renderitza en obrir l'app.
  - A la plantilla buida conté un contenidor `<View>` amb un missatge de benvinguda i la barra d'estat `<StatusBar />`.
- **`index.js`:**
  - Punt d'arrencada tècnic.
  - Importa `registerRootComponent` d'Expo i registra el component `App` a l'`AppRegistry` natiu de React Native.
- **`app.json`:**
  - Manifest de configuració d'Expo.
  - Defineix metadades clau: nom de l'app, *slug*, versió, orientació de pantalla, icones, pantalla de càrrega (*splash*) i identificadors natius (`package` per a Android i `bundleIdentifier` per a iOS).
- **`package.json`:**
  - Fitxer estàndard de Node.js amb metadades, dependències (`expo`, `react`, `react-native`, etc.) i scripts d'execució (`start`, `android`, `ios`, `web`).
- **`package-lock.json`:**
  - Assegura la instal·lació determinista i exacta de les mateixes versions de dependències per a qualsevol membre de l'equip.
- **`assets/`:**
  - Carpeta per a recursos estàtics: icones (`icon.png`), imatge de càrrega (`splash-icon.png`) i gràfics locals.
- **`.gitignore`:**
  - Especifica quins fitxers no s'han d'afegir al control de versions Git (`node_modules/`, `.expo/`, fitxers temporals).

---

## Punt 4 (Minuts 41:50 - 44:05): Components Natius de React Native

### 4.1 Concepte d'equivalència amb el DOM Web
React Native no empra HTML ni el DOM clàssic. El codi JSX s'associa a components natius que el motor compila directament a les vistes natives del sistema:
- A **Android:** Es transformen en vistes natives Java/Kotlin (`ViewGroup`, `TextView`, `ImageView`).
- A **iOS:** Es transformen en vistes natives UIKit (`UIView`, `UILabel`, `UIImageView`).
- A **Web:** Mitjançant `react-native-web`, es tradueixen en elements estàndard optimitzats del DOM (`<div>`, `<span>`, `<img>`).

### 4.2 Taula d'Equivalències i Bones Pràctiques

| Component React Native | Equivalent HTML | Descripció i Bones Pràctiques |
| :--- | :--- | :--- |
| **`<View>`** | `<div>` | Contenidor fonamental per estructurar la interfície. Suporta Flexbox, vores, fons i esdeveniments tàctils. |
| **`<Text>`** | `<p>` / `<span>` | Component obligatori per renderitzar text. Suporta niament d'estils tipogràfics. |
| **`<Image>`** | `<img>` | Component per mostrar imatges locals o remotes. Requereix mides explícites per a imatges remotes. |

### 4.3 Diferència clau de Flexbox: `flexDirection`
- **A la Web clàssica (CSS):** La propietat `flex-direction` té per defecte el valor **`row`** (disposició horitzontal en fila).
- **A React Native:** La propietat `flexDirection` té per defecte el valor **`column`** (disposició vertical en columna).
  - *Motiu tècnic:* Els telèfons mòbils tenen pantalles predominantment verticals, de manera que el flux natural dels elements és de dalt a baix.

### 4.4 Regla estricta del component `<Text>`
A diferència d'HTML, a React Native està **estrictament prohibit** posar text lliure dins una `<View>`:
```jsx
// ❌ ERROR a React Native
<View>Hola món</View>

// ✅ CORRECTE a React Native
<View>
  <Text>Hola món</Text>
</View>
```

### 4.5 Càrrega d'Imatges: Locals vs Remotes
1. **Imatges Locals (estàtiques):**
   ```jsx
   <Image source={require('./assets/icon.png')} style={{ width: 50, height: 50 }} />
   ```
   - S'empaqueten amb el paquet de l'aplicació mitjançant `require()`.
   - La seva mida original és coneguda en temps de compilació.

2. **Imatges Remotes (per xarxa via URI):**
   ```jsx
   <Image source={{ uri: 'https://exemple.cat/foto.jpg' }} style={{ width: 100, height: 100 }} />
   ```
   - Empren un objecte amb la propietat `uri`.
   - **Obligatori:** Cal especificar sempre `width` i `height` als estils per poder visualitzar-les.

---

## Punt 5 (Minut 53:20): Requisits d'Entorn i Dubtes Freqüents

### 5.1 Pregunta Clau: És obligatori instal·lar Android Studio o Xcode per començar?
> **Resposta oficial i fonamentada: NO ÉS OBLIGATORI.**

### 5.2 Justificació i alternatives lleugeres recomanades:
Per aprendre React Native, practicar components natius, disseny amb Flexbox i estats, **no cal** instal·lar Android Studio (més de 15 GB) ni configurar emuladors pesants (que consumeixen de 4 a 8 GB de RAM):

1. **Expo Go a telèfon mòbil físic:**
   - S'instal·la l'aplicació gratuïta **Expo Go** (des de Google Play o App Store).
   - S'executa a la terminal:
     ```bash
     npx expo start
     ```
   - S'escaneja el codi QR generat i l'app s'executa a l'instant al dispositiu real amb recàrrega en temps real.
2. **Entorn Web al navegador:**
   - Executant:
     ```bash
     npm run web
     ```
   - L'aplicació s'obre a Chrome o Firefox amb un consum mínim de recursos, ideal per als equips d'aula.

### 5.3 Quan cal realment Android Studio o Xcode?
Només és necessari en etapes avançades quan:
- Cal enllaçar codi natiu personalitzat en C++, Java, Kotlin, Swift o Objective-C.
- Es volen compilar i signar binaris de distribució (`.apk`, `.aab`, `.ipa`) en local sense emprar serveis al núvol com EAS Build.
- Es requereix depuració nativa de baix nivell amb Android Profiler o Instruments.

