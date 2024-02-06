import { PaymentMethodCreateParams } from 'stripe';

export class CreateChargeDto {
  card: PaymentMethodCreateParams.Card1;
  amount: number;
}
