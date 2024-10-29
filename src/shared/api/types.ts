export interface FitnessTariff {
  name: string;
  price: number;
  lengthInDays: number;
  isPopular: boolean;
  isEndless: boolean;
  isDiscount: boolean;
  nonDiscountId: null;
  id: string;
  ownerId: string;
  statusId: null;
  creationDateTime: string;
  deleted: boolean;
}

export interface FitnessTariffDescription {
  name: string;
  description: string;
}
