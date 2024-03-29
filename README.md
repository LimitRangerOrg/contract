# LimitRanger Smart Contract

 [LimitRanger Homepage](https://limitranger.xyz)
 
 [LimitRanger Dapp](https://app.limitranger.xyz)

## Contract addresses
Always make sure you interact with the real LimitRanger smart contract.

The LimitRanger contract addresses for the different networks are:

| Network | Address |
| --- | --- |
| Arbitrum One | [0xd5c5bd7d311e1739a84079466ab098f83ebcab77](https://arbiscan.io/address/0xd5c5bd7d311e1739a84079466ab098f83ebcab77) |
| Polygon | [0xBF380e10c6a2771BaDF128cd9a294a3a79CD9823](https://polygonscan.com/address/0xBF380e10c6a2771BaDF128cd9a294a3a79CD9823) |
| Goerli Testnet | [0xbe4d22d73d5705c98d260563ca7f937c41b0c82a](https://goerli.etherscan.io/address/0xbe4d22d73d5705c98d260563ca7f937c41b0c82a) |
| Arbitrum Rinkeby | [0x400c325bcac8c1c89974093b15bc800231d872e2](https://testnet.arbiscan.io/address/0x400c325bcac8c1c89974093b15bc800231d872e2) |

## General concept
LimitRanger allows the automation of Range Orders on Uniswap.

A range order is an approximation of a limit order ([Range order description by Uniswap](https://docs.uniswap.org/protocol/concepts/V3-overview/range-orders)). It works by providing one asset into a Uniswap V3 liquidity pool and specifying a range (above the current price) at which the liquidity is provided. Once the price of the traded pair reaches the upper end of the range one’s position is 100% converted to the other asset of the pool. At this point one could close the liquidity position but one has to do it manually (in contrast to limit orders on traditional exchanges which get executed once the desired price is reached).

This is where LimitRanger comes in: Our smart contract creates a liquidity position for you and allows anyone to close it once the upper end of the range is reached - with the assets of course being returned to your wallet. We run a program which looks for such positions and automatically closes them. As long as the target price is not reached no one can interfere with your position but you (with the wallet that opened the position). You can cancel your order (getting paid out any assets currently in the position) or transfer the NFT representing the Uniswap position to your wallet at any time.

An additional advantage is that while your Uniswap position is in range it accrues fees which are also paid out to you once the position is closed. You also don’t have to pay the swap fee on Uniswap. LimitRanger however takes a cut of the traded volume which is also used to pay for the transaction fees when our program closes positions for you. The contract can be configured to paz out a percentage of the fee to the wallet which successfully triggered the closing of the position. This is to incentivize other players to monitor and close eligble positions. 

**WARNING:** When using low liquidity pools a flash loan attack could be used to drive the price above the sell target and close a user's position. This would be problematic if the intent of the position was primarily to accrue fees (for a user looking to having his position closed short price spikes are beneficial). In a future release the protocol might implement a user option for flash loan protection using time weighted average prices. 

The LimitRanger contract is immutable and not upgradeable.

The contract was audited by an independent security expert and the report can be viewed [here](AuditReport.pdf).

You can check the [Auditor's Github](https://github.com/OpenCoreCH) and the [Auditor's References](https://github.com/OpenCoreCH/smart-contract-audits#readme).


Admin functionality is limited to:
* Disabling opening of new orders
* Setting the (minimum) protocol fee for new positions (already created positions are unaffected)
* Setting the reward percentage of the total fee for the wallet sucessfully closing a position
* Setting a new address for the protocol fee receiver
* Setting a new address for the protocol operator

## Minting a new position

To mint a new position the user calls the mintNewPosition function of the LimitRanger smart contract. 
The contract checks if the desired selling range is above the current price (using Uniswap ticks) and then opens a new liquidity provider position in the matching Uniswap V3 liquidity pool by calling 'mint' on Uniswap's NonfungiblePositionManager contract. Uniswap creates an NFT for the liquidity position which is kept in the LimitRanger smart contract which stores the corresponding data for the LimitRanger position in its local storage (mappings: positionInfos, ownedTokens and ownedTokensIndex). The id of the Uniswap liquidity position NFT is also used as the identifier of a position in the LimitRanger contract.
The tick corresponding to the upper price of the range is stored as sellTarget in the positionInfo. Depending on if token0 or token1 is being sold this can be the lower or the upper tick of the price range.

The mintNewPosition function takes the MintParams struct as parameter which has the following variables:

| Name | Type | Comment |
| --- | --- | --- |
| token0 | address | The address of the contract of token0 |
| token1 | address | The address of the contract of token1 |
| token0Amount | uint256 | Amount of token0 to be sold (this or token1Amount needs to be 0) |
| token1Amount | uint256 | Amount of token1 to be sold (this or token0Amount needs to be 0) |
| lowerTick | int24 | Lower tick of the Uniswap V3 liquidity position which is to be created |
| upperTick | int24 | Upper tick of the Uniswap V3 liquidity position which is to be created |
| poolFee | uint24 | Pool fee to be used for the Uniswap V3 liquidity position which is to be created  |
| deadline | uint256 | Deadline after which the opening of the position will fail |
| protocolFee | uint16 | Protocol fee for this position. Needs to be equal or greater than the current minimumPoolFee set in the LimitRanger contract. |
| unwrapToNative | bool | If one of the tokens is a native token (e.g. ether) and this is set to true the token will be unwrapped when the position is closed or cancelled. |

## Closing a position

A position can be "closed" in 3 different ways by calling one of the following functions of the LimitRanger contract.

* stopPosition
* cancelPosition
* retrieveNFT

### stopPosition
StopPosition can be called by anyone.
The actual implementation is done in the internal function _payOutPosition which in this case is called with stoppedByProtocol=true to indicate that the protocol fee is to be deducted from the payout. 
However it will only succeed if the current price is above the sell target otherwise the transaction is reverted. To check the price the the contract of the Uniswap pool is called to get its current tick. 
If the tick is above (or below depending on token0 or token1 is sold) the sell target tick the NonfungiblePositionManager contract of uniswap is called with

* DecreaseLiquidity: to remove all liquidity from the position
* collect: to transfer all funds of the position to the limitRanger smart contract

Afterwards the protocol fee is calculated for both tokens and the corresponding amounts are paid out to the positionOwner and the protocolFeeReceiver addresses.
In the end the internal _removePosition function is called to remove the position info from the LimitRanger smart contract and transfer the Uniswap liuqidity position NFT to the position owner.

### cancelPosition
CancelPosition can only be called by the owner of the position.
The function calls _payOutPosition just like stopPosition does but with stoppedByProtocol=false so no fees are deducted from the payout. 

### retrieveNFT
RetrieveNFT can only be called by the owner of the position.
This function only calls the internal _removePosition code which removes the position info and transfers the Uniswap liuqidity position NFT to the owner of the position.
No fees are to be paid in this case.

## Howto compile:

Uses hardhat for compiling and testing.
https://hardhat.org/getting-started/

```shell
npx hardhat compile
npx hardhat test

npx hardhat accounts
npx hardhat clean
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```

