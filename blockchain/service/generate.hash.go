package service

import (
	"crypto/sha512"
	"encoding/hex"
	"fmt"
	"lsacBlockchain/models"
)

func GenerateHash(blk models.Block, iteratorBlock int) string {

	dataToPut := blk.Timestamp + fmt.Sprint(blk.Index) + blk.PrevBlock + string(iteratorBlock)
	hash := sha512.New()

	hash.Write([]byte(dataToPut))
	ret := hash.Sum(nil)
	return hex.EncodeToString(ret)
}

func GenHashOfAString(val string) string {
	dataToPut := val
	hash := sha512.New()

	hash.Write([]byte(dataToPut))
	ret := hash.Sum(nil)
	return hex.EncodeToString(ret)
}
