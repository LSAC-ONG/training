package service

import (
	"lsacBlockchain/models"
	"time"
)

/*first block in the network*/
func InitGenesisBlock(blockchain models.BlockchainContainer) models.BlockchainContainer {
	var FirstBlock models.Block

	blockchain.Wallets = make(map[string]models.BlockData)
	t := time.Now()
	FirstBlock.Timestamp = t.String()
	FirstBlock.Index = 0
	FirstBlock.PrevBlock = ""
	FirstBlock.Hash = GenerateHash(FirstBlock, 0)
	blockchain.Blocks = append(blockchain.Blocks, FirstBlock)
	FirstBlock.Transactions = make([]models.Transaction, 0)
	return blockchain
}
