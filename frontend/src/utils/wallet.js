export const calculateCurrentAmountInWallet = (wallet) => {
    return wallet.initialAmountInCents - wallet.transactions.reduce((accumulator, currentTransaction) => {
        //if its an income, we whould actually substract from the accumulator
        if (currentTransaction.type === "INCOME" || currentTransaction.type === "TRANSFER_IN") return accumulator - currentTransaction.amountInCents
        return accumulator + currentTransaction.amountInCents // if not an income, it adds the transaction to the accumulator
    }, 0)
}
