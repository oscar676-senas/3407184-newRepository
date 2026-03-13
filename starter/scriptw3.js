// ============================================
// PROYECTO SEMANA 03: Calculadora de Dominio
// ============================================
// Adapta este archivo a tu dominio asignado.
//
// Ejemplos con dominios no asignables:
// - Planetario    → calcular ingresos por función, capacidad disponible
// - Acuario       → calcular costo de alimentación, volumen total de tanques
// - Museo         → calcular valor de exhibición, costo de entrada
// - Zoológico     → calcular gasto diario por especie, total de visitantes
// - Observatorio  → calcular duración total de eventos, aforo restante
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

// TODO: Define las constantes base de tu dominio
// Ejemplos con dominios no asignables:
//   Planetario:   TICKET_PRICE = 12_000, MAX_CAPACITY = 45
//   Acuario:      DAILY_FEEDING_KG = 150, ENTRY_PRICE = 35_000
//   Museo:        ADULT_TICKET = 20_000, GUIDED_TOUR = 15_000
//   Zoológico:    FOOD_COST_PER_DAY = 500_000, MAX_VISITORS = 800
//   Observatorio: SESSION_DURATION = 90, TICKET_PRICE = 18_000

 const instalationPrice = 150_000; // TODO: Reemplazar con tus constantes

// ============================================
// SECCIÓN 2: Operaciones aritméticas
// ============================================
console.log("=== Operaciones básicas ===");

// TODO: Calcula totales, subtotales o valores clave de tu dominio
// Usa: +, -, , /, %, *
// Etiqueta cada resultado con console.log()

// Ejemplo con dominio Planetario (NO copiar):
// precio de la instalacion
 const instalationDone = 38; // instalaciones realizadas
 const delayDescounts = 5; // descuentos por retraso
 const discountPrice = 25_000; // precio por descuento
 const discountTotal = delayDescounts * discountPrice;
 console.log("pérdidas totales por descuento", discountTotal);
 const totalRevenue = (instalationPrice * instalationDone) - discountTotal; // ganancias totales
 console.log("Ingresos totales:", totalRevenue);
 const availableToInstallProducts = 76 - instalationDone; // instalaciones disponibles
 console.log("productos disponibles por instalar:", availableToInstallProducts);

console.log("");

// ============================================
// SECCIÓN 3: Asignación compuesta
// ============================================
console.log("=== Asignación compuesta ===");

// TODO: Usa +=, -=, *=, /= para actualizar valores acumulados
// Muestra el valor antes y después de cada operación

// Ejemplo (NO copiar):
 let marketingExpenses = 0;
 marketingExpenses += 3_950_000; // gastos en marketing
 console.log("Gastos en la primera semana de marketing:", marketingExpenses);
 marketingExpenses += 4_450_000;
 console.log("Tras la segunda semana de marketing:", marketingExpenses);
 let approximedProfitsPreviousMonths = 60_890_600; // ganancias aproximadas por mes antes del marketing
 let monthlyProfitsAfterMarketing = 87_095_760; // ganancias aproximadas
 let profitsAfterMarketing = monthlyProfitsAfterMarketing -  approximedProfitsPreviousMonths; // ganancias después del marketing
 console.log("Aumento de ganancias mensuales después del marketing",  profitsAfterMarketing);
 profitsAfterMarketing -= marketingExpenses;
 console.log("ganancias con el descuento del marketing incluido", profitsAfterMarketing)
 let estimatedAnnualProfits = monthlyProfitsAfterMarketing; // ganancias anuales estimadas
 estimatedAnnualProfits *= 12;
 console.log("Estimación de ganancias anuales", estimatedAnnualProfits);

console.log("");

// ============================================
// SECCIÓN 4: Comparación estricta
// ============================================
console.log("=== Validaciones con === ===");

// TODO: Valida condiciones usando === y operadores de orden
// NUNCA uses == (penalización en la rúbrica)

// Ejemplo (NO copiar):
 const installationDelayHours = 0; // retraso de instalación por hora
 const discountPerHour = 70_000; // descuento por hora
 const onTimeInstalation = installationDelayHours === 4; // instalación a tiempo
 console.log("¿Instalación hecha en el tiempo indicado?", onTimeInstalation);
 const discountAppleid = installationDelayHours >= 5; // se aplica el descuento
 console.log("¿se aplica el descuento?", discountAppleid);

console.log("");

// ============================================
// SECCIÓN 5: Operadores lógicos
// ============================================
console.log("=== Condiciones lógicas ===");

// TODO: Combina condiciones con &&, ||, !
// Al menos una condición con && y una con ||

// Ejemplo (NO copiar):
 const thisFirstPurchase = false; // es su primera compra
 const ProductsPerPurchase = 7; // productos por compra
 const discount = thisFirstPurchase && ProductsPerPurchase >= 5; // descuento
 console.log("Se aplica el descuento?", discount); 
 const freeInstallation = thisFirstPurchase || ProductsPerPurchase >= 5; // instalación gratis
 console.log("instalación gratis?", freeInstallation);

console.log("");

// ============================================
// SECCIÓN 6: Resumen final
// ============================================
console.log("=== Resumen ===");

// TODO: Muestra un resumen con los valores más importantes
// calculados en las secciones anteriores
console.log("Esta semana apliqué operaciones básicas con las cuales aprendí a calcular de una forma más estructurada las ganancias y pérdidas al invertir en un producto real desde cero.");
console.log("También revisé la asignación de valores dentro de las operaciones, donde utilizamos variables a las que les asignábamos distintos valores. Además, comparé de manera estricta valores numéricos para obtener resultados correctos.");
console.log("Finalmente, comprendí mejor la función de los operadores lógicos *&&* y *||*, y cómo se utilizan para evaluar múltiples condiciones dentro de una misma expresión.");

console.log("");