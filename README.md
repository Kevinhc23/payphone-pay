# Paquete Para Crear Pagos Con PayPhone En Tu App.

[![npm version](https://badge.fury.io/js/payphone-payments.svg)](https://www.npmjs.com/package/payphone-pay)
[![npm](https://img.shields.io/npm/dt/payphone-payments.svg)](https://www.npmjs.com/package/payphone-pay)
[![npm](https://img.shields.io/npm/dm/payphone-payments.svg)](https://www.npmjs.com/package/payphone-pay)
[![npm](https://img.shields.io/npm/l/payphone-payments.svg)](https://www.npmjs.com/package/payphone-pay)
[![GitHub stars](https://img.shields.io/github/stars/Kevinhc23/payphone-payments.svg?style=social&label=Star)](https://github.com/Kevinhc23/payphone-pay.git)

<div style="display: flex; justify-content: center; align-items: center; height: 80px; ">
  <img src="./src/assets/logopayphonenew.svg" alt="PayPhone" style="max-width: 200px; height: auto;">
</div>

## Introducción

PayPhone es una plataforma de pagos móviles que permite a los usuarios realizar pagos de manera segura y conveniente. PayPhone permite a los usuarios realizar pagos en línea y en tiendas físicas, así como transferir dinero entre usuarios. PayPhone también permite a los usuarios realizar pagos a comerciantes en línea y en tiendas físicas, así como transferir dinero entre usuarios.

## Requisitos

- Para poder utilizar la API de PayPhone, es necesario que cuentes con una cuenta de desarrollador en PayPhone. Si aún no tienes una, puedes crearla en [PayPhone Developer](https://appdeveloper.payphonetodoesposible.com/).

- Token de acceso a la API de PayPhone. Para obtener el token de acceso, debes crear una aplicación en el portal de desarrolladores de PayPhone. Para más información, consulta la documentación de PayPhone en [PayPhone Developer](https://appdeveloper.payphonetodoesposible.com/).

- Store ID. Para obtener el Store ID, debes crear una aplicación en el portal de desarrolladores de PayPhone. Para más información, consulta la documentación de PayPhone en [PayPhone Developer](https://appdeveloper.payphonetodoesposible.com/).

- Crear un archivo .env en la raíz del proyecto con las siguientes variables de entorno:

  - TOKEN_PAYPHONE
  - STORE_ID_PAYPHONE

## Instalación

Para instalar el paquete, ejecuta el siguiente comando:

```bash
npm install payphone-pay
```

## Uso

Para utilizar el paquete, debes importar la clase PayPhonePayments y crear una instancia de la clase. Para crear la instancia, debes pasar como parámetros:

```typescript
import { createPaymentWithLink, createPaymentWithApp } from 'payphone-payments';

const Props: PayPhoneProps = {
  amount: 100, // Monto a pagar (sin impuestos) en centavos.
  currency: 'USD', // Moneda en la que se realizará el pago.
  email: 'kevinhernandezcrespo97@gmail.com', // Correo electrónico del cliente.
  phoneNumber: '0959192123', // Número de teléfono del cliente.
  amountWithoutTax: 100, // Monto a pagar (sin impuestos) en centavos.
  tax: 0, // Impuestos en centavos.
  documentId: '0958751234', // Número de identificación del cliente.
  countryCode: '593', // Código de país del cliente.
};

// Para crear un pago con link, debes llamar a la función createPaymentWithLink y pasar como parámetro el objeto Props.
const createPaymentWithLink = createPaymentWithLink(Props);

// Para crear un pago con la aplicación de PayPhone, debes llamar a la función createPaymentWithApp y pasar como parámetro el objeto Props.
const createPaymentWithApp = createPaymentWithApp(Props);
```

## Documentación

Para más información, consulta la documentación de PayPhone en [PayPhone Developer](https://appdeveloper.payphonetodoesposible.com/).

## Licencia

[MIT](https://choosealicense.com/licenses/mit/)

## Autor

[Kevin Hernández Crespo](https://github.com/Kevinhc23)

## Contribuir

Si deseas contribuir con el proyecto, puedes hacerlo en [GitHub](https://github.com/Kevinhc23/payphone-payments).

## Soporte

Si tienes algún problema con el paquete, puedes crear un [Issue](https://github.com/Kevinhc23/payphone-payments/issues).

## Donaciones

Si deseas apoyarme, puedes hacerlo en [PayPal](https://paypal.me/Kevinhc23?country.x=EC&locale.x=es_XC).
