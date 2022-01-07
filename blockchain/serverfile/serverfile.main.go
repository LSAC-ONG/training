package serverfile

import (
	"encoding/json"
	"fmt"
	"lsacBlockchain/models"
	"lsacBlockchain/service"
	"net/http"
)

var BlocksChains models.BlockchainContainer

func SetUpServer() {
	http.HandleFunc("/get", ShowBlocks)
	http.HandleFunc("/mine", SetBlock)
	http.HandleFunc("/createWallet", CreateWallet)
	http.HandleFunc("/wallet", ViewWallet)
	http.HandleFunc("/transaction", CreateTransaction)

	http.ListenAndServe(":8080", nil)
}

func ShowBlocks(w http.ResponseWriter, req *http.Request) {
	fmt.Print(len(BlocksChains.Blocks))
	w.Header().Set("Content-Type", "application/json")

	if len(BlocksChains.Blocks) == 0 {
		BlocksChains = service.InitGenesisBlock(BlocksChains)
	}

	response, err := json.Marshal(BlocksChains)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte("HTTP 500"))
	}
	w.Write(response)

	fmt.Print(BlocksChains)
}

func SetBlock(w http.ResponseWriter, req *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var viewSetBlock models.BlockData
	viewBlock := json.NewDecoder(req.Body)
	viewBlock.Decode(&viewSetBlock)
	///if verify != nil {
	///	return
	//}
	defer req.Body.Close()

	if service.ValidateWallet(viewSetBlock.Wallet, BlocksChains) {
		for i := 0; ; i++ {
			iteratorBlock := i
			hashBlock, actualBlock := service.NetworkBlock(BlocksChains.Blocks, viewSetBlock, iteratorBlock, viewSetBlock.Wallet)
			fmt.Println(service.ValidateBlock(hashBlock, 1, "0"))
			if service.ValidateBlock(hashBlock, 1, "0") {
				BlocksChains.Blocks = append(BlocksChains.Blocks, actualBlock)
				data := BlocksChains.Wallets[viewSetBlock.Wallet]
				getCoins := BlocksChains.Wallets[viewSetBlock.Wallet].Coins
				data.Coins = getCoins + 10
				BlocksChains.Wallets[viewSetBlock.Wallet] = data
				break
			} else {
				fmt.Println(hashBlock)
			}
		}
	} else {
		fmt.Print("bad wallet")
	}

}

func CreateWallet(w http.ResponseWriter, req *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var viewSetBlock models.BlockData
	var walroute models.WalletRoute
	viewBlock := json.NewDecoder(req.Body)
	viewBlock.Decode(&walroute)

	viewSetBlock.Wallet = service.GeneratePubKey(service.GeneratePrivateKey(walroute.Wallet))
	_, err := BlocksChains.Wallets[viewSetBlock.Wallet]
	if !err {
		viewSetBlock.Coins = 0
		BlocksChains.Wallets[viewSetBlock.Wallet] = viewSetBlock
		retWallet := models.RetWallet{}
		retWallet.WalPrivateKey = service.GeneratePrivateKey(walroute.Wallet)
		retWallet.WalPubKey = service.GeneratePubKey(service.GeneratePrivateKey(walroute.Wallet))
		retWallet.Money = 0
		json.NewEncoder(w).Encode(retWallet)
	} else {
		RetWallError := models.RetWalletError{}
		RetWallError.Error = "Wallet already created"
		json.NewEncoder(w).Encode(RetWallError)
	}

}

func ViewWallet(w http.ResponseWriter, req *http.Request) {

}

func CreateTransaction(w http.ResponseWriter, req *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var viewSetBlock models.TransactionRequest

	viewBlock := json.NewDecoder(req.Body)
	viewBlock.Decode(&viewSetBlock)

	getWallet := service.GeneratePubKey(viewSetBlock.PrivateKey)

	_, err := BlocksChains.Wallets[getWallet]
	if err {

		data := BlocksChains.Wallets[getWallet]
		data.Coins = data.Coins - viewSetBlock.Money
		if data.Coins < 0 {

			RetWallError := models.RetWalletError{}
			RetWallError.Error = "You don't have enough funds"
			json.NewEncoder(w).Encode(RetWallError)
		} else if data.Coins >= 0 {

			var tx1 models.InitTrans
			tx1.Coins = viewSetBlock.Money
			tx1.Wallet = getWallet

			var tx2 models.DestTrans
			tx2.Wallet = viewSetBlock.DestinationWallet

			var tx models.Transaction
			tx.Id = 1
			tx.WalletSource = tx1
			tx.WalletDest = tx2
			_, err := BlocksChains.Wallets[tx2.Wallet]
			if err {

				data1 := BlocksChains.Wallets[tx2.Wallet]
				data1.Coins += viewSetBlock.Money
				BlocksChains.Wallets[tx2.Wallet] = data1
				BlocksChains.Wallets[getWallet] = data
				putData := BlocksChains.Blocks[0].Transactions
				BlocksChains.Blocks[0].Transactions = append(putData, tx)
			}

		}

	} else {
		RetWallError := models.RetWalletError{}
		RetWallError.Error = "No Wallet created"
		json.NewEncoder(w).Encode(RetWallError)
	}
}
