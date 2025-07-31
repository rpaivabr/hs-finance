export interface Transaction {
  id: string;
  name: string;
  code: string;
  value: number;
  dateLimit: Date;
  dateDone: Date | null;
  type: 'income' | 'expense' | 'balance';
}

export interface TransactionRequestDTO extends Omit<Transaction, 'id' | 'dateLimit' | 'dateDone'> {
  dateLimit: string;
  dateDone: string;
}

export interface TransactionResponseDTO extends Omit<Transaction, 'dateLimit' | 'dateDone'> {
  dateLimit: string;
  dateDone: string;
}

// export const mapTransactionToDTO = (transaction: Transaction): TransactionResponseDTO => ({
//   ...transaction,
//   dateLimit: transaction.dateLimit.toISOString(),
//   dateDone: transaction.dateDone.toISOString(),
// });

// export const mapDTOToTransaction = (dto: TransactionResponseDTO): Transaction => ({
//   ...dto,
//   dateLimit: new Date(dto.dateLimit),
//   dateDone: new Date(dto.dateDone),
// });