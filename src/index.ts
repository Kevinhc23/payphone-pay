import PayPhonePayment from './lib/create-pay';
import { TransactionId } from './common/create-id';
import { PayPhoneProps } from '../types/index';

/**
 * Función para crear un pago con PayPhone enviando un cobro a la app
 * @param payPhoneProps
 * @returns Respuesta de PayPhone
 */
async function createPaymentWithApp(
  payPhoneProps: PayPhoneProps
): Promise<string> {
  const transactionId = new TransactionId();
  const payPhone = new PayPhonePayment({
    ...payPhoneProps,
    clientTransactionId: transactionId.createUUID(),
  });

  const response = await payPhone
    .createPaymentWithApp()
    .then((res) => JSON.stringify(res))
    .catch((err) => err);

  return response;
}

/**
 * Función para crear un pago con PayPhone enviando un link de pago
 * @param payPhoneProps
 * @returns Respuesta de PayPhone
 */
async function createPaymentWithLink(
  payPhoneProps: PayPhoneProps
): Promise<string> {
  const transactionId = new TransactionId();
  const payPhone = new PayPhonePayment({
    ...payPhoneProps,
    clientTransactionId: transactionId.createUUID(),
    storeId: process.env.STORE_ID_PAYPHONE, // Store ID de tu cuenta de PayPhone
  });

  const response = await payPhone
    .createPaymentWithLink()
    .then((res) => JSON.stringify(res))
    .catch((err) => err);

  return response;
}

export { createPaymentWithApp, createPaymentWithLink };
