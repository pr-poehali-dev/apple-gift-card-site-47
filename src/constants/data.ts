import { GiftCard, Instruction, Feature } from "@/types";

export const giftCards: GiftCard[] = [
  {
    amount: 1000,
    description: "Идеально для покупки приложений и музыки",
    popular: false,
  },
  {
    amount: 2500,
    description: "Отличный выбор для игр и подписок",
    popular: true,
  },
  {
    amount: 5000,
    description: "Максимум возможностей App Store",
    popular: false,
  },
];

export const instructions: Instruction[] = [
  {
    step: 1,
    title: "Выберите номинал",
    description:
      "Подберите подходящий номинал Gift карты из доступных вариантов",
  },
  {
    step: 2,
    title: "Оформите заказ",
    description: "Укажите email для получения кода активации карты",
  },
  {
    step: 3,
    title: "Получите код",
    description: "Код придет на указанный email в течение нескольких минут",
  },
  {
    step: 4,
    title: "Активируйте",
    description: "Введите код в App Store, iTunes или Apple Music",
  },
];

export const features: Feature[] = [
  {
    icon: "Shield",
    title: "Безопасность",
    description: "Официальные коды активации от Apple",
    colorClass: "bg-green-100 text-green-600",
  },
  {
    icon: "Zap",
    title: "Мгновенно",
    description: "Получение кода в течение 5 минут",
    colorClass: "bg-blue-100 text-blue-600",
  },
  {
    icon: "Globe",
    title: "Универсальность",
    description: "Работает во всех сервисах Apple",
    colorClass: "bg-purple-100 text-purple-600",
  },
];
