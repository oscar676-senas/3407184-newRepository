/*
 * script.js — Ficha de Presentación de Dominio
 *
 * Semana 1: ¿Qué es programar? Mi primer JavaScript
 * Bootcamp JavaScript ES2023
 *
 * ============================================
 * POLÍTICA ANTICOPIA
 * ============================================
 * Cada aprendiz trabaja sobre un DOMINIO ÚNICO asignado por el instructor.
 * Adapta TODOS los TODOs a tu dominio específico.
 * Copiar la implementación de otro compañero resulta en calificación de cero.
 *
 * INSTRUCCIONES:
 * 1. Confirma con tu instructor cuál es tu dominio asignado
 * 2. Reemplaza cada [PLACEHOLDER] con la información de TU dominio
 * 3. Completa cada TODO adaptado a tu contexto
 * 4. Ejecuta con: node starter/script.js
 *
 * NOTA SOBRE LOS EJEMPLOS:
 * Los comentarios de ayuda usan "Planetario" como dominio de ejemplo
 * porque NO es un dominio asignable. No copies esos valores —
 * crea los tuyos basados en tu dominio asignado.
 */

// ============================================
// ENCABEZADO — identifica el dominio y la entidad
// ============================================

// TODO: Cambia el título con el nombre de tu dominio y un identificador
// Ejemplo (Planetario): '    PLANETARIO MUNICIPAL - FICHA #001    '
console.log('=========================================');
console.log('PYMEs, NIT: 901.234.567-8 ');
console.log('=========================================');
console.log('');

// ============================================
// INFORMACIÓN GENERAL
// ============================================

// Datos básicos que identifican la entidad principal del dominio
console.log('Verificada como disponible');
console.log('Refleja claramente el nombre y propósito de la empresa (Ecopyme.nex), ya que nuestra empresa intenta hacer eco en las pequeñas y medianas empresas generando confianza para nuestros usuarios ayudando a que su producción no genere un problema para el medio ambiente y el "...nex", proveniente de nexo que evoca conexión.');

// TODO: Reemplaza con el nombre de tu entidad principal (string — con comillas)
// Ejemplos con dominios no asignables:
//   Planetario  → nombre de la exhibición: 'Sistema Solar en 3D'
//   Acuario     → nombre de la especie:    'Tiburón Ballena'
//   Museo       → título de la obra:       'La Gioconda (réplica)'
//   Zoológico   → nombre del animal:       'León Africano'
console.log('Nombre:          Ecopyme.nex');

// TODO: Reemplaza con un código o identificador único (string o number)
// Ejemplos: 'PLN-042', 'ACU-117', 'MUS-007', 452
console.log('ID_TEMA:          ECO-CIRC-2026-CO');

// TODO: Reemplaza con la categoría o tipo de la entidad (string)
// Ejemplos: 'Astronomía - Nivel básico', 'Pez cartilaginoso', 'Arte renacentista'
console.log('Categoría:       Economía Circular y Sostenibilidad Empresarial en Colombia');

// TODO: Indica el estado actual de la entidad (string)
// Ejemplos: 'Disponible', 'En stock', 'Activo', 'Ocupado'
console.log('Estado:          En operación desde el 2026');

console.log('');

// ============================================
// DETALLES — datos numéricos y booleanos
// ============================================

// Propiedades específicas con valores numéricos y booleanos
console.log('DETALLES');
console.log('--------------------');

// TODO: Reemplaza con un dato numérico relevante para tu dominio (number — sin comillas)
// Ejemplos: precio → 15000, stock → 48, páginas → 320, capacidad → 30
console.log('Clientes actuales:    16');

// TODO: Reemplaza el 0 por una expresión aritmética que se calcule automáticamente
// No uses variables — escribe directamente el cálculo con números literales
// Ejemplos:
//   Precio con 20% descuento:  15000 * 0.8
//   Total (cantidad × precio): 3 * 15000
//   Capacidad restante:        30 - 12
console.log ('En Ecopymes.nex tenemos variadores de frecuencia (VFD), dispositivos que controlan la velocidad de los motores eléctricos. Pueden reducir el consumo de energía de una fábrica hasta en un 50%');
console.log('Por ser su primera compra recibirá el siguiente descuento individual por cada VFD comprado: ');
console.log('precio actual de un VFD: 1413187    ', ((1413187 * 86) / 100) .toFixed(2)); // TODO: reemplaza 0 con tu cálculo
//el .toFixed está muy interesante ya que muestra un número con dos decimales, que es algo muy común en los precios
//decuento del 14 %
console.log('Cada VFD que compres tendrá un 14% de descuento!!');

// TODO: Valor boolean que representa un estado de la entidad (true o false — sin comillas)
// Ejemplos: disponible → true, enStock → false, esNuevo → true
console.log('Disponible :',  true);
console.log('Nuestra empresa acepta nuevos proyectos y clientes');

// TODO: Otro valor boolean diferente al anterior (true o false — sin comillas)
console.log('Certificación:',  false);
console.log('Aún está en trámite');

console.log('');

// ============================================
// RESUMEN DEL DOMINIO
// ============================================

// Visión general del dominio como sistema, no de una sola entidad
console.log('RESUMEN DEL DOMINIO');
console.log('Ecopymes.nex Soluciones es una PYME colombiana que ayuda a otras PYMEs a adoptar prácticas sostenibles mediante tecnología, asesoría y capacitación. Nuestro enfoque: economía circular, reducción de huella ambiental y digitalización verde.');
// TODO: Escribe el nombre de tu dominio asignado (string)
// Ejemplos: 'Planetario', 'Acuario', 'Museo', 'Zoológico'
console.log('Dominio:          PYMEs');

// TODO: ¿Cómo se llama la entidad principal de tu dominio? (string)
// Ejemplos: 'exhibición', 'especie', 'obra', 'animal', 'evento'
console.log('Entidad:           Ventas');

// TODO: ¿Cuántos registros tiene tu dominio en total? (number — sin comillas)
// Puede ser un número inventado pero coherente con el dominio
console.log('Total registros:  20');

console.log('');

// ============================================
// CIERRE
// ============================================

// Mensaje final del script
console.log('=========================================');

// TODO: Escribe un mensaje de cierre relacionado con tu dominio (string)
// Ejemplo (Planetario): '  ¡Explora el universo con JavaScript!'
console.log('Vivimos en un mundo y universo que parecen eternos ante los ojos de nuestras vidas, pero somos nosotros lo que representa la vida en el concepto del tiempo, no alumbramos como las estrellas pero sentimos lo que no viven ellas, somos parte de un ciclo que estamos destruyendo, pensamos en un instante por que eso somos para la realidad, pero en un instante no podemos destruir todo lo que representa nuestro existir, cuidar el planeta es cuidarte a ti. Ecopymes.nex te necesita');

console.log('=========================================');
