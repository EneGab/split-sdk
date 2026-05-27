/**
 * @stellar-split/sdk — public API
 */

export { StellarSplitClient } from "./client.js";
export type { StellarSplitClientConfig, TxResult } from "./client.js";

export { connectWallet, getPublicKey, signTransaction } from "./wallet.js";

export {
  formatAmount,
  parseAmount,
  isValidAddress,
  deadlineFromDays,
  isExpired,
  truncateAddress,
} from "./utils.js";

export { searchInvoices } from "./search.js";
export type { SearchQuery, SearchResult } from "./search.js";

export { calculateVesting } from "./vesting.js";

export type {
  Invoice,
  Payment,
  Recipient,
  InvoiceStatus,
  CreateInvoiceParams,
  PayParams,
  InvoiceGroup,
  VestingSchedule,
} from "./types.js";
