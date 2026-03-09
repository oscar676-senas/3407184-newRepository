# 🏛️ Proyecto Semana 1: Ficha de Presentación de Dominio

> **🎯 ÚNICO ENTREGABLE**: Este proyecto es el **único entregable obligatorio** para aprobar la Semana 1.

---

## 📋 Tu Dominio Asignado

**Dominio**: [El instructor te asignará tu dominio al inicio del trimestre]

> ⚠️ **POLÍTICA ANTICOPIA**: Cada aprendiz tiene un **dominio único**. Tu código debe reflejar tu dominio específico. Una implementación copiada o no adaptada resulta en calificación de cero.

---

## 🎯 Objetivo

Construir un script JavaScript que se ejecute en Node.js y muestre en la consola una **ficha de presentación** de una entidad de tu dominio asignado, aplicando todo lo aprendido esta semana: `console.log()`, tipos primitivos (string, number, boolean) y comentarios.

No necesitas variables todavía (esas llegan la semana próxima). Solo `console.log()`, tipos de datos, expresiones y comentarios bien estructurados.

---

## 📋 Descripción

Vas a construir un "carnet digital de consola" para tu dominio asignado. El script debe mostrar información organizada sobre **una entidad principal de tu dominio**: exhibición, especie marina, obra de arte, animal, evento astronómico, etc.

Adapta cada sección al contexto de tu dominio. Si no sabes cuál es tu dominio, pregunta a tu instructor.

---

## ✅ Requisitos

### Requisitos de contenido (adaptados a tu dominio)

El script debe mostrar **como mínimo**:

1. Nombre de la **entidad principal** de tu dominio (string)
2. Identificador o código único (string o number)
3. Descripción o categoría (string)
4. Al menos **un dato numérico** relevante al dominio (number)
5. Al menos **dos valores boolean** que representen estados de la entidad
6. Una **expresión aritmética** calculada (ej: precio con descuento, total, capacidad restante)
7. Una sección de **resumen del dominio**

### Requisitos técnicos

- [ ] El archivo se llama `script.js` y corre con `node script.js`
- [ ] Usa `console.log()` para toda la salida
- [ ] Incluye como mínimo **3 comentarios** que expliquen secciones del código
- [ ] La salida está organizada con separadores visuales (líneas de `-` o `=`)
- [ ] Los comentarios están escritos en **español**
- [ ] No hay errores al ejecutar con `node`

---

## 💡 Ejemplo de salida esperada

> **Nota**: El ejemplo usa "Planetario" porque **NO es un dominio asignable**. Adapta la estructura a tu dominio asignado.

```
=========================================
    PLANETARIO MUNICIPAL - FICHA #001
=========================================

INFORMACIÓN GENERAL
--------------------
Nombre:          Sistema Solar en 3D
Código:          EXH-001
Categoría:       Astronomía - Nivel básico
Estado:          Activo

DETALLES
--------------------
Capacidad:       45 personas
Duración (min):  50
Precio:          12000
Con descuento:   9600
Disponible:      true
Accesible:       true

RESUMEN DEL DOMINIO
--------------------
Dominio:         Planetario
Entidad:         Exhibición
Total registros: 12

=========================================
  Ficha generada con JavaScript ES2023
=========================================
```

---

## 💡 Ejemplos de Adaptación por Dominio

| Si tu dominio es... | Tu entidad principal es... | Datos numéricos relevantes            |
| ------------------- | -------------------------- | ------------------------------------- |
| Planetario          | Exhibición                 | capacidad, duración, asistentes       |
| Acuario             | Especie marina             | ejemplares, tamaño, temperatura       |
| Museo               | Obra o artefacto           | valor estimado, año de creación, sala |
| Zoológico           | Animal o especie           | ejemplares, peso, edad                |
| Observatorio        | Evento astronómico         | duración, distancia, magnitud         |
| Archivo Histórico   | Documento                  | páginas, año, categoría               |

---

## 📁 Estructura del Proyecto

```
3-proyecto/
├── README.md         ← Este archivo
└── starter/
    └── script.js     ← Tu punto de partida
```

---

## 🛠️ Cómo Empezar

1. **Confirma tu dominio** con el instructor
2. Abre `starter/script.js`
3. Lee los comentarios y TODOs
4. Adapta cada TODO al contexto de **tu** dominio asignado
5. Ejecuta para verificar: `node starter/script.js`
6. Ajusta el formato hasta que la salida sea legible y organizada

---

## 🏃 Cómo Ejecutar

```bash
cd bootcamp/week-01/3-proyecto
node starter/script.js
```

---

## 📊 Criterios de Evaluación

| Criterio                                 | Puntos      |
| ---------------------------------------- | ----------- |
| El script corre sin errores              | 20 pts      |
| Muestra los 7 datos requeridos           | 25 pts      |
| Al menos 3 comentarios en español        | 15 pts      |
| Salida organizada y legible              | 15 pts      |
| Usa string, number Y boolean             | 15 pts      |
| Adaptación coherente al dominio asignado | 10 pts      |
| **Total**                                | **100 pts** |

> Mínimo para aprobar: **70 puntos**

---

## ❓ Preguntas Frecuentes

**P: ¿Qué dominio debo usar?**
R: El que te asigne tu instructor. Si no lo sabes, pregúntale antes de empezar.

**P: ¿Puedo ver el código de un compañero?**
R: No. Cada dominio es único — tu implementación debe ser original y coherente con tu dominio.

**P: ¿Puedo usar variables?**
R: No todavía. Esta semana solo `console.log()`, valores literales y comentarios. Las variables llegan en la Semana 2.

**P: ¿Qué pasa si mi dominio no aparece en la tabla de ejemplos?**
R: Si tu dominio es distinto, aplica la misma lógica: elige una entidad principal con nombre, código, descripción, datos numéricos y estados booleanos.

---

## 🔗 Navegación

⬅️ [Volver a Prácticas](../2-practicas/)
➡️ [Semana 2: Variables y Tipos de Datos](../../week-02/README.md)

---

# 📦 Semana 2: Variables y Tipos de Datos

## 🎯 Objetivos de Aprendizaje

Al finalizar esta semana, serás capaz de:

- ✅ Declarar variables con `const` y `let`, y elegir la correcta en cada caso
- ✅ Explicar por qué `var` está obsoleto y no debe usarse
- ✅ Conocer los cinco tipos primitivos: `string`, `number`, `boolean`, `null`, `undefined`
- ✅ Usar `typeof` para identificar el tipo de cualquier valor (incluida la trampa de `null`)
- ✅ Convertir tipos explícitamente con `Number()`, `String()` y `Boolean()`
- ✅ Aplicar reglas de nomenclatura: camelCase y nombres descriptivos
- ✅ Usar numeric separators `1_000_000` (ES2021)

---

## 📚 Requisitos Previos

- ✅ Semana 1 completada
- ✅ Node.js instalado y funcionando
- ✅ Saber ejecutar un script con `node archivo.js`
- ✅ Entender `console.log()` y tipos primitivos básicos

---

## 🗂️ Estructura de la Semana

```
week-02/
├── README.md                         # Este archivo
├── rubrica-evaluacion.md             # Criterios de evaluación
├── 0-assets/                         # Diagramas y recursos visuales
├── 1-teoria/                         # Material teórico
│   ├── 01-const-let.md
│   ├── 02-tipos-primitivos-completos.md
│   ├── 03-conversion-tipos.md
│   └── 04-nomenclatura.md
├── 2-practicas/                      # Ejercicios guiados
│   ├── ejercicio-01-const-let/
│   ├── ejercicio-02-tipos-completos/
│   ├── ejercicio-03-conversiones/
│   ├── ejercicio-04-nomenclatura/
│   └── ejercicio-05-numeric-separators/
├── 3-proyecto/                       # Proyecto semanal (único entregable)
│   ├── README.md
│   └── starter/
│       └── script.js
├── 4-recursos/                       # Material adicional
│   ├── ebooks-free/
│   ├── videografia/
│   └── webgrafia/
└── 5-glosario/                       # Términos clave
    └── README.md
```

---

## 📝 Contenidos

### 1️⃣ Teoría (2.5 horas)

| Tema                                                                    | Duración | Descripción                                          |
| ----------------------------------------------------------------------- | -------- | ---------------------------------------------------- |
| [const vs let](1-teoria/01-const-let.md)                                | 35 min   | Variables modernas y por qué evitar var              |
| [Tipos primitivos completos](1-teoria/02-tipos-primitivos-completos.md) | 35 min   | null, undefined y typeof para todos los tipos        |
| [Conversión de tipos](1-teoria/03-conversion-tipos.md)                  | 30 min   | Number(), String(), Boolean() y coerción             |
| [Nomenclatura](1-teoria/04-nomenclatura.md)                             | 20 min   | camelCase, nombres descriptivos y numeric separators |

### 2️⃣ Prácticas (3 horas)

| Ejercicio                                                          | Duración | Nivel  | Objetivo                                     |
| ------------------------------------------------------------------ | -------- | ------ | -------------------------------------------- |
| [const y let](2-practicas/ejercicio-01-const-let/)                 | 35 min   | Básico | Declarar variables y entender la mutabilidad |
| [null y undefined](2-practicas/ejercicio-02-tipos-completos/)      | 35 min   | Básico | Explorar todos los tipos primitivos          |
| [Conversiones](2-practicas/ejercicio-03-conversiones/)             | 40 min   | Básico | Convertir entre tipos explícitamente         |
| [Nomenclatura](2-practicas/ejercicio-04-nomenclatura/)             | 30 min   | Básico | Aplicar camelCase y nombres descriptivos     |
| [Numeric separators](2-practicas/ejercicio-05-numeric-separators/) | 20 min   | Básico | Usar `1_000_000` para legibilidad (ES2021)   |

### 3️⃣ Proyecto (2 horas)

**Ficha de Datos del Dominio**

Script de consola que declara variables con `const`/`let`, aplica `typeof`, realiza conversiones y muestra información organizada de una entidad del dominio asignado.

---

## ⏱️ Distribución del Tiempo (8 horas)

```
📖 Teoría:       2.5h  (31%)
💻 Prácticas:    3h    (37.5%)
🚀 Proyecto:     2h    (25%)
📚 Recursos:     0.5h  (6.5%)
```

### Cronograma Sugerido

| Día         | Actividad                                 | Tiempo |
| ----------- | ----------------------------------------- | ------ |
| **Día 1**   | Teoría 01-02 + ejercicios 1-2             | 2.5h   |
| **Día 2**   | Teoría 03-04 + ejercicios 3-4             | 2h     |
| **Día 3**   | Ejercicio 5 + inicio del proyecto         | 1.5h   |
| **Día 4-5** | **Proyecto: Ficha de Datos** (entregable) | 2h     |

---

## 📌 Entregables

### 📦 Proyecto (100%)

> El proyecto es el **único entregable obligatorio** de la semana.

- **Archivo**: `starter/script.js` adaptado a tu dominio asignado
- **Entrega**: Viernes de la semana correspondiente
- **Ejecución**: `node starter/script.js` sin errores
- **Evalúa**: uso de `const`/`let`, tipos, conversiones y nomenclatura

---

## 🔗 Navegación

⬅️ [Semana 1: ¿Qué es programar?](../week-01/README.md)
➡️ [Semana 3: Operadores y Expresiones](../week-03/README.md)