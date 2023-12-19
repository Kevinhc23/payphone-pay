import { createPaymentWithApp, createPaymentWithLink } from '../src/index';
import { PayPhoneProps } from '../src/types/index';

const mockPayPhoneProps: PayPhoneProps = {
  amount: 100, // Monto a pagar (sin impuestos) en centavos.
  currency: 'USD', // Moneda en la que se realizará el pago.
  email: 'kevinhhc23@gmail.com', // Correo electrónico del cliente.
  phoneNumber: '0951234567', // Número de teléfono del cliente.
  amountWithoutTax: 100, // Monto a pagar (sin impuestos) en centavos.
  tax: 0, // Impuestos en centavos.
  documentId: '0958751234', // Número de identificación del cliente.
  countryCode: '593', // Código de país del cliente.
};

describe('createPaymentWithApp', () => {
  it('should return a string', async () => {
    const result = await createPaymentWithApp(mockPayPhoneProps);
    expect(typeof result).toBe('string');
  });
});

describe('createPaymentWithLink', () => {
  it('should return a string', async () => {
    const result = await createPaymentWithLink(mockPayPhoneProps);
    expect(typeof result).toBe('string');
  });
});
