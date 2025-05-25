export interface GiftCard {
  amount: number;
  description: string;
  popular: boolean;
}

export interface Instruction {
  step: number;
  title: string;
  description: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
  colorClass: string;
}
