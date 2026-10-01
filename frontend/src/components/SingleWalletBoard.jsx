import logger from "../utils/logger"

const SingleWalletBoard = ({ wallet }) => {
    // logger.info(wallet)

    console.log(wallet)


    if (wallet) {

        const currentAmountInWallet = wallet.initialAmount - wallet.transactions.reduce((accumulator, currentTransaction) => {
            if (currentTransaction.type === "INCOME") return accumulator - currentTransaction.amount
            return accumulator + currentTransaction.amount
        }, 0) || null

        return (
            <div>
                {wallet && <>
                    <h3>{wallet.name}</h3>
                    <p>Original balance: {wallet.initialAmount}</p>
                    <p>Current balance: {currentAmountInWallet}</p>
                    <p>currency: {wallet.currency}</p>
                </>
                }
            </div>
        )
    }

    return (
        <div>

        </div>
    )
}

export default SingleWalletBoard