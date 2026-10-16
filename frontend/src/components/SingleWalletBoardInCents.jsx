import logger from "../utils/logger"
import CentsFormater from "./CentsFormater"
import { calculateCurrentAmountInWallet } from "../utils/wallet"

const SingleWalletBoardCents = ({ wallet }) => {
    // logger.info(wallet)

    // console.log(wallet)


    if (wallet) {

        const currentAmountInWallet = calculateCurrentAmountInWallet(wallet)

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