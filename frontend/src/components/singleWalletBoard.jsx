const singleWalletBoard = (wallet) => {
    return (
        <div>
            balance: { wallet.initialAmount }
            currency: { wallet.currency }
        </div>
    )
}