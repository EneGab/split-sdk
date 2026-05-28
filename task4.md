#23 Implement cloneInvoice() client method
Repo Avatar
Stellar-split/split-sdk
Label: complexity: high
Points: 200

Description
The contract supports cloning invoices but the SDK has no corresponding method. This issue adds cloneInvoice(sourceId, newDeadline) that calls the contract's clone_invoice function and returns the new invoice ID and transaction hash.

Technical Context
Involves src/client.ts. Build a contract.call("clone_invoice", ...) operation with sourceId as u64 and newDeadline as u64 ScVal. Run through _submitTx. Parse the returned invoice ID from returnValue the same way createInvoice() does.

Acceptance Criteria
 cloneInvoice(sourceId: string, newDeadline: number): Promise<{ invoiceId: string; txHash: string }> exported
 Requires creator auth (signing via wallet)
 Returns new invoice ID on success
 Throws InvoiceNotFoundError if source invoice doesn't exist
 Test clones an invoice and verifies new ID is different from source
 All existing tests pass
 TypeScript strict mode — zero any types