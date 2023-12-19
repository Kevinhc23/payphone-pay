export interface PayPhoneProps {
  amount: number;
  amountWithoutTax?: number;
  amountWithTax?: number;
  tax?: number;
  service?: number;
  tip?: number;
  currency: string;
  clientTransactionId?: string;
  storeId?: string;
  reference?: string;
  phoneNumber: string;
  email: string;
  documentId: string;
  countryCode: string;
  oneTime?: boolean;
  expireIn?: number;
}
