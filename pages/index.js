import React,{useEffect,useState} from "react";
import {useAccount} from "wagmi"

import {Header,HeroSection,Footer,Pools, PoolsModel, 
  WithdrawModal,Withdraw,Partners, Statistics,
  Token,
  Notification,
  Ask,
  ICOSale,
  Contact,
  Loader} from "../Components/index"
import { CONTRACT_DATA,deposit,withdraw,claimReward,addTokenMetaMask } from "../Context";
const index = () => {
  const {address} = useAccount()
  const [loader,setLoader] = useState(false)
  const [contactUs,setContactUs] = useState(false)
  const [poolID,setPoolID] = useState()
  const [withdrawPoolID,setWithdrawPoolID] = useState()
  const [poolDetails,setPoolDetails] = useState()
  const [selectedPool,setSelectedPool] = useState()
  const [selectedToken,setSelectedToken] = useState()

  const LOAD_DATA = async()=>{
    if(address){
      setLoader(true)
      const data = await CONTRACT_DATA(address)
      setPoolDetails(data)

      setLoader(false)
    }
  }

  useEffect(()=>{
    LOAD_DATA()
  },[address])

  return(
    <>
      <Header/>
      <HeroSection addTokenMetaMask={addTokenMetaMask}/>

      <Statistics poolDetails={poolDetails}/>
      <Pools setPoolID={setPoolID} poolDetails={poolDetails} setSelectedPool={setSelectedPool} setSelectedToken={setSelectedToken}/>
      <Token poolDetails={poolDetails}/>

      <Withdraw setWithdrawPoolID = {setWithdrawPoolID} poolDetails={poolDetails}/>

      <Notification poolDetails = {poolDetails}/>
      <Partners/>
      <Ask setContactUs={setContactUs}/>
      <Footer/>

      <PoolsModel deposit={deposit} poolID={poolID} address={address} selectedPool={selectedPool} selectedToken={selectedToken} setLoader={setLoader}/>

      <WithdrawModal withdraw={withdraw} withdrawPoolID={withdrawPoolID} address={address} setLoader={setLoader} claimReward={claimReward}/>

      <ICOSale setLoader={setLoader}/>

      {
        contactUs && <Contact/>
      }
      
      {
        loader && <Loader/>
      }
    </>
  )
};

export default index;
