import { ethers } from "ethers";
//abi 가져오기
import roboPunksNFT from "./RoboPunksNFT.json";

// 컨트랙트 주소
const roboPunksNFTAddress = "0xDb87ed8707F3513E5487765E06cB0FB5A3B655AC";
// 8 ~ 9 라인 그냥 이렇게 쓰는거 어떻게 동작하는지 모름
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

// 컨트랙트안에 있는 함수를 사용 하기 위해 export로 내보냄 민팅 contract 안에 있는 함수를 써야 하는 곳에 import해서 쓰면됨
export const contract = new ethers.Contract(
  roboPunksNFTAddress,
  roboPunksNFT.abi,
  signer
);

