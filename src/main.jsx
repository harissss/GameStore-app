import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/**
 * NOTER: 
 * Components laves normalt som funktioner, man skriver export default (component navn), og så import hvor man har brug for den
 * Hvis man vil returnere flere HTML-elementer i én component, så skal man bruge fragments. Det kan simpelt bare gøres ved at wrap det hele i "<> *alle HTML-elementer* </>"
 * React har en "virtual DOM" som bruges til at opdatere den rigtige DOM. 
 * Man kan bruge {} til at skrive JS kode ind i return-statement af en component. Så kan man render ting dynamisk, conditionally, osv.
 * Events håndteres med "onClick" i et element fx. 
 * Alle elementer skal have en unik "key". Dette kan man tjekke i console hvis den giver en error med et eller andet som "elements need a unique key". Normalt gøres dette med et "id" som hvert data man laver element ud fra har. Men man skal bare sørge for at de er unikke. 
 * Componenets har "states", altså basically variabler, som har en værdi. Her kan man bruge "useState(*init value*)", som returnerer [a, setA] (altså variabel, og setter-metode). Dette kan så opdateres i componenten. 
 * Props bruges til at sende data til componenter. I dette tilfælde vil vi have, at hvert game-card har forskellige spil-titler, billeder, etc. Det kan gives som props til de specifikke components. 
 * Man kan også give en funktion gennem en prop, som kan bruges til Observer-pattern (hvis app bruger en component, kan den component give notifikation tilbage, når et specifikt element er klikket, fx). 
 * State vs props: States er basically intern data, som et component kan ændre på, og bruge til funktionalitet. Props er data, som sendes til en component udefra. Dermed kan man se props som "funktion-args", og state som "lokale variabler". 
 * Props håndterers som immutable. State er mutable. 
 * Hvis man vil pass en child-element til en component, kan man bruge "ReactNode" type i TypeScript. Jeg ved ikke med JavaScript, i guess man bare kan gøre det. 
 */