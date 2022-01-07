package service

import "lsacBlockchain/models"

func ValidateWallet(wallet string, blockchain models.BlockchainContainer) bool {
	_, err := blockchain.Wallets[wallet]
	if err {
		return true
	} else {
		return false
	}
}
