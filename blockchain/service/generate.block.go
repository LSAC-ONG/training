package service

import (
	"lsacBlockchain/models"
	"time"
)

/*first block in the network*/
func NetworkBlock(blockchain []models.Block, addData models.BlockData, iteratorBlock int, miner string) (string, models.Block) {
	var FirstBlock models.Block

	t := time.Now()
	FirstBlock.Timestamp = t.String()
	FirstBlock.Index = len(blockchain)
	FirstBlock.PrevBlock = blockchain[len(blockchain)-1].Hash
	FirstBlock.Hash = GenerateHash(blockchain[len(blockchain)-1], iteratorBlock)
	FirstBlock.Mined = addData
	FirstBlock.Mined.Coins = 10
	FirstBlock.Transactions = make([]models.Transaction, 0)
	//	blockchain = append(blockchain, FirstBlock)

	return FirstBlock.Hash, FirstBlock
}
