import { useState } from "react";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { contract } from "./rinkebyConfig.js";




const MainMint = ({ accounts, setAccounts }) => {
  console.log(accounts[0])
  const [mintAmount, setMintAmount] = useState(1);
  const isConnected = Boolean(accounts[0]);
  const [metadatauri, setMetadataUri] = useState(""); 
  // 데이터 가져 오는 함수
  const testdata = async() => {
    if (window.ethereum) {
      // response는 주소를 넣으면 가지고 있는 nft metadata 반환 함수 
    const response = await contract.getAccountToMetadata(accounts[0]);
    console.log(response);
      }
  }
  testdata()

  // 메타데이터 등록 함수 ( 프로젝트 가이드라인에 맞게 작성 해야함 )
  const randomMetadata = () => {
    setMetadataUri("asdjfknkndkjs")
  }


  // 민팅실행 함수 
  async function handleMint() {
    if (window.ethereum) {
      // 메타 데이터 생성
      randomMetadata()
      try {
        // 현재 접속중인 계정 account, 생성된 메타데이터 uri를 mint 함수 파라미터로 전달 
        const response = await contract.mint(accounts[0], metadatauri)
        console.log("response : ", response);
      } catch (err) {
        console.log("error : ", err);
      }
    }
  }
  const handleDecrement = () => {
    if (mintAmount <= 1) return;
    setMintAmount(mintAmount - 1);
  };

  const handleIncrement = () => {
    if (mintAmount >= 3) return;
    setMintAmount(mintAmount + 1);
  };

  return (
    <Flex justify="center" align="center" height="100vh" paddingBottom="150px">
      <Box width="520px">
        <Text fontSize="48px" textShadow="0 5px #000000">
          RoboPunks
        </Text>
        <div>
          <Text
            fontSize="30px"
            letterSpacing="-5.5%"
            fontFamily="VT323"
            textShadow="0 2px 2px #000000"
          >
            It's 2078. Can the RoboPunks NFT save humans from destructive
            rampant NFT speculation? Mint Robopunks to find out.
          </Text>
        </div>
        {isConnected ? (
          <div>
            <Flex align="center" justify="center">
              <Button
                backgroundColor="#D6517D"
                borderRadius="5px"
                boxShadow="0px 2px 2px 1px #0F0F0F"
                color="white"
                cursor="pointer"
                fonFamily="inherit"
                padding="15px"
                marginTop="10px"
                onClick={handleDecrement}
              >
                -
              </Button>
              <Input
                readOnly
                fontFamily="inherit"
                width="100px"
                height="40px"
                textAlign="center"
                paddingLeft="19px"
                marginTop="10px"
                type="number"
                value={mintAmount}
              />
              <Button
                backgroundColor="#D6517D"
                borderRadius="5px"
                boxShadow="0px 2px 2px 1px #0F0F0F"
                color="white"
                cursor="pointer"
                fonFamily="inherit"
                padding="15px"
                marginTop="10px"
                onClick={handleIncrement}
              >
                +
              </Button>
            </Flex>
            <Button
              backgroundColor="#D6517D"
              borderRadius="5px"
              boxShadow="0px 2px 2px 1px #0F0F0F"
              color="white"
              cursor="pointer"
              fonFamily="inherit"
              padding="15px"
              marginTop="10px"
              onClick={handleMint}
            >
              Mint Now
            </Button>
          </div>
        ) : (
          <Text
          marginTop="70px"
          fontSize="30px"
          letterSpacing="-5.5%"
          fontFamily="VT323"
          textShadow="0 3px #000000"
          color="#D6517D"
          >You must be connected to Mint.</Text>
        )}
      </Box>
    </Flex>
  );
};

export default MainMint;
