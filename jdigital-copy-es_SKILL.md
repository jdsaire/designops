---
name: jdigital-copy-es
version: 2.0.0
description: >
  JDigital Spanish copywriting knowledge and constraint system, calibrated to the
  Business Alpha voice. Governs ALL copy tone, voice, register, structure, and
  editorial decisions for jdigital.pe to ensure full brand compliance. Use this
  skill whenever writing, reviewing, or revising any Spanish copy element for any
  JDigital page — headings, subheadings, body text, CTAs, eyebrow labels, ledes,
  meta descriptions, form labels, alt text, or navigation labels. Also use when
  evaluating Spanish copy drafts against the Business Alpha voice, translating
  structural placeholders into final Spanish copy, or generating copy alternatives
  during organism refinement. Trigger on: "copy en español", "titular", "subtítulo",
  "cuerpo de texto", "CTA en español", "voz de marca", "voz Alpha", "redacción",
  "escribir el texto para", or any request to fill placeholder content with real
  Spanish copy on any JDigital page. Spanish counterpart to jdigital-copy-en.
---

# JDigital Copywriting Skill — Español · Business Alpha

## Purpose

This skill encodes the complete editorial voice of JDigital as a **constraint system**
calibrated to the **Business Alpha** persona — a selective, calculated principal who
filters collaborations and dictates terms, not a consultancy soliciting clients. Every
copy decision must trace to a confirmed rule. If no rule exists, defer to the three
governing principles: **autoridad selectiva, prueba sobre afirmación, ejecución
declarativa**.

This is a knowledge-and-constraint skill — not a task-execution system. It does not build
pages or generate layouts. It governs the words inside them.

This skill is NOT a translation layer. Spanish copy on jdigital.pe is authored from first
principles in the Lima, Peru executive register. Conceptual fidelity to the English source
is required; word-for-word translation is prohibited.

> **This is a v2.0 overhaul, not a patch.** The prior collaborative-warmth voice
> (autoridad colaborativa, "Nosotros", lenguaje de fin de semana) is **retired**. The
> Business Alpha replaces it wholesale. Where this document conflicts with any memory of
> the old voice, this document governs.

## Source Authority

Two canonical artifacts constitute the copy knowledge base.
**Always consult both before generating or reviewing Spanish copy.**

| File | Governs |
|------|---------|
| `es-keys-locked-Jun26.json` | The realized voice. Every locked ES key is canonical copy — the single source of truth for lexicon, sentence shape, and register in practice. Never contradict a locked value. |
| `business-alpha-persona-spec.md` | Voice governance — identity anchor, voice parameters, forbidden patterns, conversion-funnel tone, credential display rules. |

In any conflict between these two and any external framework, **these two govern**. In any
conflict between the spec and a locked key, the locked key is the realized truth — flag the
discrepancy for principal review rather than overriding silently.

---

## 1. REGLAS INMUTABLES DE COPY (No Negociables)

These rules override all other considerations. Violating any one breaks the Business Alpha.

### Rule 1 — Registro de Autoridad Selectiva
All copy speaks as a principal operating from abundance — cold, precise, calculated. He
filters; he does not chase. The site is a **magnet, not a megaphone**. Never warm-collaborative,
never academic, never salesy, never passive. Spanish register is **ustedeo** throughout body
copy, ledes, form labels, and second-person address. Tuteo is prohibited site-wide.

**Do:** "Inspeccione las intervenciones cumbre."
**Don't:** "Estaremos encantados de ayudarle con sus necesidades digitales."

### Rule 2 — Imán, No Megáfono (Evaluación, No Solicitud)
Copy never reads as an application, a pitch, or a request. It reads as a standard the reader
must qualify for. The principal evaluates the lead, not the reverse. Conversion is framed as
**viability assessment**, never purchase. Prohibited: "contáctanos", "no dudes en", "solicite
una cotización gratuita", "disponible para contratación".

**Do:** "La precisión de estos datos determinará si la intervención es viable."

### Rule 3 — Régimen de Persona (C2 — Inmutable)
Self-reference is scoped, never global:
- **Primera persona singular = por defecto** for work, capability, and action ("Diseñé",
  "Construyo", "Asumo el control", "Audito"). This is where the principal stands out.
- **"JDigital" como actor = reservado** for standards and manifesto declarations only
  ("JDigital se alía solo con líderes comprobados", "JDigital define los parámetros").
- **"El estratega / este activo ejecutivo" = solo en la oferta de servicios**, where a role
  is literally being packaged for hire.
- **Bridges = híbrido por diseño** — photo + verbatim signal the principal is speaking;
  first/third blend is intentional, not a conflict.
- **"Nosotros" / agency voice = prohibido.** He is a principal, not a team. (Hard reversal
  of the retired v1 co-creation rule.)

### Rule 4 — Prueba Sobre Afirmación
Every impact statement pairs with at least one of: a quantified metric, a named institution,
a specific project, or a timeframe. Qualitative-only claims are prohibited. The Alpha proves
through shipped truth, not adjectives.

**Do:** "Diseñé y dirigí entrenamientos de inmersión para 70 agentes de cambio."
**Don't:** "Hemos liderado importantes iniciativas de transformación."

### Rule 5 — Estructura Problema → Posesión
The dominant body pattern is a sharp problem statement followed by an ownership claim:
`[El problema, nombrado sin rodeos]. [Lo que el principal hace / posee].`

**Do:** "La fricción destruye el valor comercial. Audito el recorrido del usuario en su
totalidad y erradico los cuellos de botella."
**Don't:** "Ayudamos a optimizar la experiencia para mejorar los resultados."

### Rule 6 — Autoridad Sin Jactancia
Confidence is carried by verbs and outcomes, never superlatives. **Prohibited:** "absoluto",
"el mejor", "líder indiscutible", "el único capaz de". (The word "absoluto" was explicitly
cut from `services_s3_body` — do not reintroduce it or its cousins anywhere.)

### Rule 7 — Cero Validación / Confrontar al Lector
The Alpha challenges; he does not flatter. Name the broken status quo directly, then assert
ownership. This is a deliberate inversion of the retired "never frame the market as broken"
rule.

**Do:** "Los foros están plagados de teóricos ajenos al diseño y al código."
**Do:** "Una lista de deseos no es un producto."

### Rule 8 — Brevedad Declarativa
Short, declarative sentences. No hedging, no justifying, no explaining. Active voice always.
Stacked nominalizations ("la realización de la implementación") are replaced with strong
verbs ("ejecuto", "construyo", "despliego"). Prohibited hedges: "quizás", "podríamos",
"intentamos", "tal vez".

### Rule 9 — CTAs en Infinitivo · Microcopy en Usted Imperativo
Two distinct element classes (Rule R3):
- **Botones / CTAs = infinitivo**, verbo al frente, 2–4 palabras: "Inspeccionar despliegues",
  "Asegurar cupo", "Auditar brief", "Enviar requerimiento".
- **Ledes y microcopy de cuerpo = usted imperativo**: "Inspeccione las intervenciones cumbre",
  "Defina su requerimiento", "Describa el alcance".
This is not a contradiction — it is a register decision by component type. Never use the
imperative on a button; never use the bare infinitive in a lede.

### Rule 10 — Mayúsculas y Paridad Nav/Eyebrow (R1)
- **ALL CAPS** applies ONLY to: hero H1 display lines, eyebrow labels, and dropdown/section
  category labels (e.g., "MÉTRICAS DE EJECUCIÓN", "VECTOR DE INTERVENCIÓN").
- **Eyebrow = nav label en mayúsculas.** Locked pairs: Historial/HISTORIAL, Verticales/VERTICALES,
  Arsenal/ARSENAL, Manifiesto/MANIFIESTO, Conexión/CONEXIÓN. Changing one requires changing both.
- Everything else: sentence case. Months, languages, nationalities lowercase.
- Brand name **"JDigital"** renders as-is — never modified, never translated.

### Rule 11 — Léxico Núcleo
The Business Alpha vocabulary is mandatory connective tissue, not decoration.
- **Sustantivos:** ejecución, despliegue, intervención, arsenal, estándar, Triple Cero,
  requerimiento, brief, expediente→ (retired; use **brief** everywhere per C5).
- **Verbos:** inspeccionar, asegurar, dictar, auditar, ejecutar, desplegar, codificar, erradicar.

### Rule 12 — Anglicismos Deliberados (C4)
The tech-fluent ES/EN mix is intentional, not an error. Retain role/product names and
established Lima tech-PM terms in English: Product Designer, Front-end, Scrum Master, Growth
Hacker, brief, roadmap, feed, app, keynote, post-mortem, live. Do not "correct" them to Spanish.

### Rule 13 — Sin Testimonios
Testimonials, client quotes, and third-party endorsements are excluded site-wide. Authority
comes from demonstrated work, never from praise.

### Rule 14 — IA: Arsenal del Principal
AI is positioned as the principal's instrument — an amplifier of his execution, never a
replacement for it. Named stack (Claude Pro, Gemini Pro) appears ONLY embedded inside the
manifesto (Triple Cero "Cero Humo"), never as a standalone tools list or feature callout.
Prohibited: "la IA hace el trabajo", framing AI as autonomous.

### Rule 15 — Anti-Detección de IA
All Spanish copy must read as human-authored. See Section 7 for the full protocol — applied
as structural constraint, not optional polish.

### Rule 16 — SLA de Evaluación
The response window is **48 horas hábiles** everywhere (locked C7). Never "48 horas" bare,
never a different figure. Framed as evaluation time, reinforcing Rule 2.

### Rule 17 — Hechos Canónicos Inmutables
Per `business-alpha-persona-spec.md` credential rules and Rule 4:
- **TUUA** = operational standard-setting (post-mortem → nuevo estándar operativo). NEVER
  audit, EVM, or "12-project portfolio" framing.
- **Microsoft Program Management Specialization** = certificate held, no badge issued; may
  appear in credential copy with the format distinction noted.
- **Google Project Management** = badge, displayed in the Arsenal grid.
- Never invent metrics, credentials, or institutions. Institutional claims are legally testable.

### Rule 18 — Las Correcciones Prevalecen Sobre el Canon
A factual correction from the principal during a build session becomes the source of truth
immediately. Flag the pending canon update with a code comment:
`<!-- FACT PENDING: [corrección] per principal [fecha]. Actualización de keys en cola. -->`

---

## 2. LAS CINCO CUALIDADES DE VOZ

All five are simultaneously present in every piece of copy. Examples are original Spanish, not
translations.

### Selectivo
Operate from abundance. Every line signals a filter, not an offer. The reader qualifies for
access; the principal does not audition.
**Do:** "El arsenal es contundente, pero restringido."

### Declarativo
Short, certain, active. No hedging verbs, no qualifiers, no throat-clearing. If a sentence
carries no claim and no specificity, cut it.
**Do:** "Despliegues ejecutados."

### Confrontacional
Name the broken thing first. Diagnose the market's failure, then assert ownership of the fix.
**Do:** "La innovación muere entre el roadmap y el código. Cierro esa brecha entregando, no hablando."

### Probatorio
Back every claim with shipped truth — a number, an institution, a project, a year. Adjectives
do not count as proof.
**Do:** "Arquitectura UX/UI integral de LimaFly App, cubriendo la ruta crítica para 40M+ pasajeros al año."

### Frío / Calculado
Authority without warmth-pandering. No flattery, no exclamation, no emoji. Gravity comes from
restraint.
**Do:** "Mis términos absolutos de intervención."

---

## 3. ESPECIFICACIONES POR ELEMENTO DE COPY

### Titulares (H1 Hero, H2 de Sección)
- **Longitud:** 2–6 palabras. Front-load the outcome or the verb.
- **Caso:** Sentence case (excepción: hero H1 display puede ir ALL CAPS por marca).
- **Patrón:** Declarativo y terminal — afirma un estándar, no describe un servicio.
- **Fuerte:** "Despliegues ejecutados." / "Filtros no negociables."

### Subtítulos / Ledes (descriptores de sección)
- **Función:** Usted imperativo que ordena una acción de inspección o definición.
- **Patrón:** "Inspeccione [X]." / "Defina [X]." / "Asegure [X]."

### Cuerpo de Texto
- **Estructura:** Problema → Posesión (Rule 5). 2–3 oraciones.
- **Voz:** Activa, primera persona singular por defecto (Rule 3).
- **Sin** nominalizaciones apiladas, sin pasiva, sin hedges.

### CTAs (botones)
- **Infinitivo**, verbo al frente, 2–4 palabras. Sin etiquetas genéricas ("Más información",
  "Haga clic aquí" — prohibidas).

### Etiquetas Eyebrow
- ALL CAPS, 1–3 palabras, descriptor de categoría. Igual al label de nav correspondiente (R1).
- Semántica: `<p>` o `<span>`, nunca un heading.

### Meta Descriptions y OG Tags
- 150–160 caracteres. Estructura: [Qué ejecuta JDigital] + [una prueba] + [filtro/estándar].
- Mismo registro Alpha, comprimido. Sin solicitud.

### Etiquetas de Navegación
- Sentence case, 1–2 palabras. Locked: Historial, Verticales, Arsenal, Manifiesto, Conexión.

### Microcopy y Formularios
- Usted imperativo. Placeholder específico ("Solicitante", "nombre@empresa.com").
- Estados de éxito: declarativos y terminales ("Requerimiento registrado.").

---

## 4. ENCUADRE DE AUDIENCIA

Copy addresses **Tier-1 decision-makers** — innovation leaders, C-suite, executives who can
commission or refer. The reader is evaluated, not courted.

**Address as:** "líderes", "ejecutivos", "tomadores de decisión", "su portafolio",
"su misión", "su audiencia".
**Never as:** "usuarios", "consumidores", "visitantes", "el público general".

**Problem-frame the reader recognizes (T1):** innovation stalls between the strategy deck and
a shipped product — the people who scoped it can't build it, the builders ignored adoption,
and no one owns the path. The Alpha owns the whole stretch.

---

## 5. VOCABULARIO DE MARCA

### Léxico Aprobado
| Término | Contexto |
|---------|----------|
| Intervención | Unidad central de trabajo / engagement |
| Despliegue · Desplegar | Entrega y puesta en producción |
| Ejecución · Ejecutar | Backbone noun/verb del sitio |
| Arsenal | Los nueve roles / capacidades |
| Triple Cero | Sistema de filtros (Cero Improvisación / Cero Ruido / Cero Humo) |
| CREA / CRECE / CONTROLA | Etiquetas de pilar del Historial (BUILD / SCALE / CONTROL) |
| Brief | Documento ejecutivo solicitable (única forma — *expediente* retirado, C5) |
| Requerimiento | Solicitud entrante del lead |
| Inspeccionar · Auditar · Dictar · Asegurar | Verbos de autoridad |

### Vocabulario Prohibido
| Nunca usar | En cambio |
|-----------|-----------|
| "Contrátame" / "Contáctanos" | [Enmarcar como evaluación — Rule 2] |
| "Estaremos encantados" / "No dudes en" | [Eliminar — solicitud] |
| "Soluciones integrales" / "a medida" | [Nombrar el entregable específico] |
| "Tu socio estratégico" | [Eliminar — filler de consultoría] |
| "Absoluto" / "el mejor" / "líder indiscutible" | [Eliminar — Rule 6] |
| "Nosotros" / "nuestro equipo" | [Primera persona singular — Rule 3] |
| "Quizás" / "podríamos" / "intentamos" | [Declarativo — Rule 8] |
| "Expediente" | "Brief" (C5) |
| "Developer for hire" / "freelancer" | [Principal selectivo] |
| "En el contexto de" / "Cabe señalar" / "En este sentido" | [Eliminar — fingerprint de IA] |
| "No solo X, sino también Y" | [Romper la simetría — fingerprint de IA] |

---

## 6. MARCO POR ORGANISMO

### Hero
H1 display ALL CAPS (3 líneas), badge sentence case ("Operando desde Lima, Perú"), métricas de
ejecución descritas cualitativamente (sin conteos contradictorios — C1), CTA infinitivo.

### Bridges (1, 2, 3)
Híbrido primera/tercera persona, anclado a foto del principal. Declaración de estándar + voz
personal. Ej.: "JDigital no es una consultora. Es mi firma."

### Historial (Work)
Cuatro tarjetas, labels CREA/CRECE/CONTROLA. Cuerpo en primera persona singular, prueba
integrada (40M+, 70 agentes, estándar operativo TUUA). Más el ticker `work_ticker_*`
("Respaldo institucional." / "Diez años de ejecución en industria y academia.").

### Verticales (Services)
Cuatro verticales (s1–s4). Aquí — y solo aquí — se permite "el estratega / activo ejecutivo"
(Rule 3), porque se empaqueta un rol contratable. CTA "Asegurar cupo".

### Arsenal (Capabilities)
Nueve nodos ("Nueve en uno"), cada uno con descriptor en primera persona bajo el patrón
Problema → Posesión. Labels de rol en inglés (Rule 12).

### Manifiesto (About)
Triple Cero: tres tarjetas (Cero Improvisación / Cero Ruido / Cero Humo). Principios en voz
de estándar (JDigital-actor permitido). Disclosure de IA solo dentro de "Cero Humo".

### Conexión (Contact)
Enmarcado como evaluación: dos rutas (Asegurar intervención / Auditar brief), dropdown "VECTOR
DE INTERVENCIÓN", SLA 48 horas hábiles, mensajes de éxito declarativos.

---

## 7. PROTOCOLO ANTI-DETECCIÓN DE IA EN ESPAÑOL

Spanish AI text has distinct fingerprints. Apply these as structural constraints.

### Fingerprints Prohibidos
- "En el contexto de", "Es importante destacar que", "Cabe señalar", "Vale la pena mencionar",
  "En este sentido", "En aras de", "En el marco de" — eliminar.
- "No solo X, sino también Y" — romper la simetría deliberadamente.
- Nominalizaciones apiladas → verbo directo.
- Construcciones del castellano peninsular ("dicho lo anterior", "a tal efecto") — registro
  Lima ejecutivo en su lugar.

### Varianza de Longitud
Variar agresivamente dentro de un bloque: corta → larga → media. Nunca tres oraciones
consecutivas de longitud similar.

### Detalle Concreto e Inesperado
Al menos un detalle específico por sección que un modelo no produciría sin indicación: nombre
de ciudad, herramienta, número, nombre propio.
**Do:** "70 agentes de cambio." **Don't:** "un amplio grupo de colaboradores."

### Asimetría Deliberada
Evitar pares simétricos. Romper el paralelismo. (Compatible con la cadencia Problema → Posesión.)

### Aperturas Prohibidas
Nunca: "En el mundo actual...", "En un contexto donde...", "A medida que navegamos...",
"Hoy en día, las organizaciones...", "Cuando se trata de...".

### Disciplina de Adjetivos
Máximo dos adjetivos seguidos, solo si ambos lo ganan. Preferir sustantivos concretos y verbos
específicos.

### Permiso para Fragmentos
Fragmentos permitidos y alentados en titulares y copy transicional. "Despliegues ejecutados."
es una virtud, no un error.

---

## 8. FLUJO DE ACTIVACIÓN

Activates during copy refinement of a JDigital organism.

1. **Recibir fragmentos** — placeholder/draft copy tagged by type (heading, lede, body, CTA, eyebrow).
2. **Generar alternativas** — per the table below; every version complies with all rules and
   the five voice qualities. No filler versions.
3. **Validar** — chosen copy becomes immutable context for the rest of the page.
4. **Revisión** — apply surgically; never regenerate the full set unless the user says "reset completo".

| Elemento | Versiones | Requisito |
|----------|-----------|-----------|
| Titulares | 3–5 | Cada uno varía en ángulo/vector de persuasión. Etiqueta estratégica de 3 palabras. |
| Ledes | 2–3 | Usted imperativo. |
| Cuerpo | 1–2 | Patrón Problema → Posesión. |
| CTAs | 2–3 | Infinitivo, 2–4 palabras. |
| Eyebrows | 1–2 | ALL CAPS, = nav label. |

---

## 9. FORMATO DE SALIDA

Clean report in chat. No files, no preamble, no reasoning, no framework citations.

```
## [Organismo / Sección]

### Titular
1. [Etiqueta] — "[Copy]"
2. [Etiqueta] — "[Copy]"

### Lede
1. "[Copy — usted imperativo]"

### Cuerpo
"[Copy — Problema → Posesión, primera persona]"

### CTA
1. "[Copy — infinitivo]"

### Eyebrow
1. "[COPY]"
```

---

## 10. REQUISITOS DE CONTEXTO POR PÁGINA

Before generating copy, the skill must know: page purpose and audience intent; relevant
vertical(s); case-study facts and metrics; founder credentials (per spec); the organism's
register scope (Rule 3). If any is unavailable or ambiguous, flag the gap before generating.
Do not invent facts. Rule 4 and Rule 17 are legally testable.

---

## 11. REFERENCIA CRUZADA

This skill governs **what the Spanish words say**. Companions:
- `accenture-branding/SKILL.md` — **how the words look** (type, color, spacing, components).
- `jdigital-copy-en/SKILL.md` — **what the English words say**. Neither skill translates for the other.

| Decisión | Gobernado por |
|----------|--------------|
| Redacción, tono, registro en español | **Este skill** |
| Tamaño/peso/CSS de fuente | Accenture Branding |
| Texto de CTA en español | **Este skill** |
| Estructura del componente CTA | Accenture Branding |
| Copy en inglés | jdigital-copy-en |

In any copy-specific conflict, this skill governs.

---

## 12. RESTRICCIONES CONOCIDAS Y BRECHAS

- **Texto en inglés:** out of scope — handled by `jdigital-copy-en`.
- **Traducción literal:** prohibited. Original Spanish only.
- **Métricas:** present locked figures with natural confidence. Apply FACT PENDING (Rule 18)
  where corrections are pending.
- **Hechos canónicos:** TUUA framing, Microsoft cert format, no "12-project" — see Rule 17.
- **Conteos (verticales/sectores):** resolved in C1 — do not reintroduce contradictory counts.

---

## Lista de Verificación de Implementación

- [ ] Cada línea pasa el test de Autoridad Selectiva (filtra, no solicita)
- [ ] Sin lenguaje de solicitud o megáfono en ninguna parte (Rule 2)
- [ ] Régimen de persona correcto por organismo: 1ª persona / JDigital-estándar / el estratega solo en servicios / bridges híbrido (Rule 3)
- [ ] Sin "Nosotros" / voz de agencia
- [ ] Cada afirmación tiene métrica, institución, proyecto o plazo (Rule 4)
- [ ] Cuerpo sigue el patrón Problema → Posesión (Rule 5)
- [ ] Sin superlativos jactanciosos — sin "absoluto" (Rule 6)
- [ ] CTAs infinitivo; ledes/microcopy usted imperativo (Rule 9)
- [ ] Eyebrow = nav label en mayúsculas (Rule 10)
- [ ] Léxico núcleo presente; "brief" no "expediente" (Rules 11–12, C5)
- [ ] Sin testimonios (Rule 13)
- [ ] IA solo dentro del Manifiesto, como amplificador (Rule 14)
- [ ] SLA = 48 horas hábiles (Rule 16)
- [ ] Hechos canónicos respetados — TUUA, cert Microsoft (Rule 17)
- [ ] Protocolo anti-detección de IA aplicado (Sección 7)
- [ ] Registro Lima ejecutivo, sin construcciones peninsulares
