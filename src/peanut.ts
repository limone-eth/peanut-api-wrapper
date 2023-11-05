import {Signer} from "ethers";
import peanut from "@squirrel-labs/peanut-sdk";


const CHAINID = 1442 // polygon zkevm

export const getPeanutLink = async (signer: Signer, tokenAddress: string, tokenId: number) => {
    // create link
    peanut.toggleVerbose()
    const {link, txHash} = await peanut.createLink({
        structSigner: {
            signer
        },
        linkDetails: {
            chainId: CHAINID,
            tokenAddress,
            tokenAmount: 1,
            // Values for tokenType are defined in SDK documentation:
            // https://docs.peanut.to/integrations/building-with-the-sdk/sdk-reference/common-types#epeanutlinktype
            tokenType: 3,    // 3 is for ERC1155 tokens
            tokenId
        }
    });
    console.log(txHash);

    return link;
}

export const claimPeanutLinkGasless = async (link: string, address: string, APIKey: string) => {
    const response = await peanut.claimLinkGasless({
        link,
        recipientAddress: address,
        APIKey,
    })
    return response
}

