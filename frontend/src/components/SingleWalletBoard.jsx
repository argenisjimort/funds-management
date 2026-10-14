import logger from "../utils/logger"
import { calculateCurrentAmountInWallet } from "../utils/wallet"

const SingleWalletBoard = ({ wallet }) => {
    // logger.info(wallet)

    console.log(wallet)

    if (wallet) {

        const currentAmountInWallet = calculateCurrentAmountInWallet(wallet)

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