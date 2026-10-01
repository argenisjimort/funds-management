import logger from "../utils/logger"
import CentsFormater from "./CentsFormater"

const SingleWalletBoardCents = ({ wallet }) => {
    // logger.info(wallet)

    // console.log(wallet)


    if (wallet) {

        const currentAmountInWallet = wallet.initialAmountInCents - wallet.transactions.reduce((accumulator, currentTransaction) => {
            if (currentTransaction.type === "INCOME") return accumulator - currentTransaction.amountInCents
            return accumulator + currentTransaction.amountInCents
        }, 0) || null

        return (
            <div>
                {wallet && <>
                    <h3>{wallet.name}</h3>
                    {/* <p>Original balance: {wallet.initialAmount}</p> */}
                    <p>Current balance: <CentsFormater amountInCents={currentAmountInWallet} /> </p>
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

export default SingleWalletBoardCents