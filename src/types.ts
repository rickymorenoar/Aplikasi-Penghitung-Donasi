export interface MoneyConfig {
  label: string;
  value: number;
  color: string;
}

export interface DonationHistory {
  id: string;
  date: string;
  total: number;
  details: { [key: number]: number };
}