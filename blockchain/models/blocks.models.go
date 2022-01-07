package models

type Block struct {
	Timestamp    string
	Index        int
	PrevBlock    string
	Difficulty   int
	Mined        BlockData
	Transactions []Transaction
	Hash         string
}
