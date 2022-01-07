package models

type Transaction struct {
	Id           int
	WalletSource InitTrans
	WalletDest   DestTrans
}

type InitTrans struct {
	Coins  int
	Wallet string
}

type DestTrans struct {
	Wallet string
}
