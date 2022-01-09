package models

type BlockchainContainer struct {
	Blocks  []Block
	Wallets map[string]BlockData
}
