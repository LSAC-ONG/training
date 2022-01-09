package models

type WalletRoute struct {
	Wallet string
}

type RetWallet struct {
	WalPubKey     string
	WalPrivateKey string
	Money         int
}
