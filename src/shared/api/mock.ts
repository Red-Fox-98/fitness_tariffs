import { FitnessTariff, FitnessTariffDescription, FitnessTariffSale } from "src/shared/api/types";

export const fitnessTariffsMock: FitnessTariff[] = [
  {
    name: "1 неделя",
    price: 699,
    lengthInDays: 0,
    isPopular: true,
    isEndless: false,
    isDiscount: false,
    nonDiscountId: null,
    id: "fba30699-87c1-4989-98a0-7c2a09994cb2",
    ownerId: "00000000-0000-0000-0000-000000000000",
    statusId: null,
    creationDateTime: "2024-10-21T18:01:08.4600126+03:00",
    deleted: false
  },
  {
    name: "1 месяц",
    price: 999,
    lengthInDays: 0,
    isPopular: true,
    isEndless: false,
    isDiscount: false,
    nonDiscountId: null,
    id: "f82b45de-afc8-44bb-ae21-221b28755386",
    ownerId: "00000000-0000-0000-0000-000000000000",
    statusId: null,
    creationDateTime: "2024-10-21T18:01:08.4600169+03:00",
    deleted: false
  },
  {
    name: "3 месяца",
    price: 2990,
    lengthInDays: 0,
    isPopular: true,
    isEndless: false,
    isDiscount: false,
    nonDiscountId: null,
    id: "255bca01-1ef0-4836-a4ae-91f94098a324",
    ownerId: "00000000-0000-0000-0000-000000000000",
    statusId: null,
    creationDateTime: "2024-10-21T18:01:08.4600178+03:00",
    deleted: false
  },
  {
    name: "навсегда",
    price: 5990,
    lengthInDays: 0,
    isPopular: true,
    isEndless: false,
    isDiscount: false,
    nonDiscountId: null,
    id: "07ee19ba-2ba8-47ba-8b84-6535835b61eb",
    ownerId: "00000000-0000-0000-0000-000000000000",
    statusId: null,
    creationDateTime: "2024-10-21T18:01:08.4600185+03:00",
    deleted: false
  },
  {
    name: "1 неделя",
    price: 999,
    lengthInDays: 0,
    isPopular: false,
    isEndless: false,
    isDiscount: false,
    nonDiscountId: null,
    id: "9d1d39cd-4270-4164-b36a-fdedd65c352c",
    ownerId: "00000000-0000-0000-0000-000000000000",
    statusId: null,
    creationDateTime: "2024-10-21T18:01:08.4600193+03:00",
    deleted: false
  },
  {
    name: "1 месяц",
    price: 1690,
    lengthInDays: 0,
    isPopular: false,
    isEndless: false,
    isDiscount: false,
    nonDiscountId: null,
    id: "84969bfd-96b5-4aba-a4b9-861aa86fc79a",
    ownerId: "00000000-0000-0000-0000-000000000000",
    statusId: null,
    creationDateTime: "2024-10-21T18:01:08.4600201+03:00",
    deleted: false
  },
  {
    name: "3 месяца",
    price: 5990,
    lengthInDays: 0,
    isPopular: false,
    isEndless: false,
    isDiscount: false,
    nonDiscountId: null,
    id: "933336e4-712b-4c66-b127-035426d7ee21",
    ownerId: "00000000-0000-0000-0000-000000000000",
    statusId: null,
    creationDateTime: "2024-10-21T18:01:08.460021+03:00",
    deleted: false
  },
  {
    name: "навсегда",
    price: 18990,
    lengthInDays: 0,
    isPopular: false,
    isEndless: false,
    isDiscount: false,
    nonDiscountId: null,
    id: "1f4c5626-f853-4832-bb7e-3cb4ff5effef",
    ownerId: "00000000-0000-0000-0000-000000000000",
    statusId: null,
    creationDateTime: "2024-10-21T18:01:08.4600217+03:00",
    deleted: false
  },
  {
    name: "1 неделя",
    price: 599,
    lengthInDays: 0,
    isPopular: false,
    isEndless: false,
    isDiscount: true,
    nonDiscountId: null,
    id: "7e29699f-948d-498f-9062-e78c848cae4e",
    ownerId: "00000000-0000-0000-0000-000000000000",
    statusId: null,
    creationDateTime: "2024-10-21T18:01:08.4600225+03:00",
    deleted: false
  },
  {
    name: "1 месяц",
    price: 799,
    lengthInDays: 0,
    isPopular: false,
    isEndless: false,
    isDiscount: true,
    nonDiscountId: null,
    id: "416ac8a3-1da2-4fd6-ad8a-600e3590b0ce",
    ownerId: "00000000-0000-0000-0000-000000000000",
    statusId: null,
    creationDateTime: "2024-10-21T18:01:08.4600234+03:00",
    deleted: false
  },
  {
    name: "3 месяца",
    price: 1690,
    lengthInDays: 0,
    isPopular: false,
    isEndless: false,
    isDiscount: true,
    nonDiscountId: null,
    id: "9bdf9a8a-e9b5-4c1c-9fdc-ae141a2d726d",
    ownerId: "00000000-0000-0000-0000-000000000000",
    statusId: null,
    creationDateTime: "2024-10-21T18:01:08.4600242+03:00",
    deleted: false
  }
];

export const fitnessTariffDescriptionMock: FitnessTariffDescription[] = [
  {
    name: "1 неделя",
    description: "Чтобы просто начать 👍🏻"
  },
  {
    name: "1 месяц",
    description: "Привести тело впорядок 💪🏻"
  },
  {
    name: "3 месяца",
    description: "Изменить образ жизни 🔥"
  },
  {
    name: "навсегда",
    description: "Всегда быть в форме и поддерживать своё здоровье ⭐"
  }
];

export const fitnessTariffSaleMock: FitnessTariffSale[] = [
  {
    name: "1 неделя",
    isPopular: true,
    isDiscount: false,
    sale: 30
  },
  {
    name: "1 месяц",
    isPopular: true,
    isDiscount: false,
    sale: 40
  },
  {
    name: "3 месяца",
    isPopular: true,
    isDiscount: false,
    sale: 50
  },
  {
    name: "навсегда",
    isPopular: true,
    isDiscount: false,
    sale: 70
  },
  {
    name: "1 неделя",
    isPopular: false,
    isDiscount: true,
    sale: 40
  },
  {
    name: "1 месяц",
    isPopular: false,
    isDiscount: true,
    sale: 50
  },
  {
    name: "3 месяца",
    isPopular: false,
    isDiscount: true,
    sale: 60
  }
];
