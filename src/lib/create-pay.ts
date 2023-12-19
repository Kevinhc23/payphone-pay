import { PayPhoneProps } from '../../types/index';
import 'dotenv/config';

/**
 * Clase para crear un pago con PayPhone
 * @class PayPhonePayment
 */
class PayPhonePayment {
  private readonly payPhoneProps: PayPhoneProps;
  private urlApp = 'https://pay.payphonetodoesposible.com/api/sale';
  private urlLink = ' https://pay.payphonetodoesposible.com/api/Links';
  private token = process.env.TOKEN_PAYPHONE;

  /**
   * Constructor de la clase
   * @param payPhoneProps {PayPhoneProps} Objeto con los datos para crear el pago
   */
  constructor(payPhoneProps: PayPhoneProps) {
    this.payPhoneProps = payPhoneProps;
  }

  /**
   * Metodo para crear un pago enviando un cobro a la app de PayPhone
   * @returns {Promise<Object>} Retorna un objeto con el estado de la petición y los datos de la misma
   */
  public async createPaymentWithApp(): Promise<Object> {
    try {
      if (!this.token) throw new Error('No se ha encontrado el token');

      const response = await fetch(this.urlApp, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.token}`,
        },
        body: JSON.stringify(this.payPhoneProps),
      });

      if (!response.ok) {
        const data = await response.json();
        return {
          status: response.status,
          message: 'Error al crear el pago',
          data,
        };
      }

      const data = await response.json();
      return {
        status: response.status,
        message: 'Pago creado correctamente',
        data,
      };
    } catch (error) {
      return {
        status: 500,
        message: 'Error al crear el pago',
        data: error,
      };
    }
  }

  /**
   * Metodo para crear un pago con link de pago
   * @returns {Promise<Object>} Retorna un objeto con el estado de la petición y los datos de la misma
   */
  public async createPaymentWithLink(): Promise<Object> {
    try {
      if (!this.token) throw new Error('No se ha encontrado el token');

      const response = await fetch(this.urlLink, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.token}`,
        },
        body: JSON.stringify(this.payPhoneProps),
      });

      if (!response.ok) {
        const data = await response.json();
        return {
          status: response.status,
          message: 'Error al crear el pago',
          data,
        };
      }

      const data = await response.json();
      return {
        status: response.status,
        message: 'Pago creado correctamente',
        data,
      };
    } catch (error) {
      return {
        status: 500,
        message: 'Error al crear el pago',
        data: error,
      };
    }
  }
}

export default PayPhonePayment;
