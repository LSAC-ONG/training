package models

type RetWalletError struct {
	Error string
}

type TransactionRequest struct {
	PrivateKey        string
	DestinationWallet string
	Money             int
}
