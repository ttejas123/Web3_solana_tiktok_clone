import React, { useState, useEffect } from 'react';
import Signup from './Signup'
// import {WalletMultiButton} from "@solana/wallet-adapter-react-ui"
// import facebookLogo from '../assets/facebook.png'
import { useWallet } from  '@solana/wallet-adapter-react'              
import { SOLANA_HOST } from '../utils/const'
import { getProgramInstance } from '../utils/utils'
import { TOKEN_PROGRAM_ID } from '@solana/spl-token'
import Mainview from './mainview';

import useTiktok from '../hooks/useTiktok'
import useAccount from '../hooks/useAccount'

const anchor = require('@project-serum/anchor')
const utf8 = anchor.utils.bytes.utf8
const { BN, web3 } = anchor
const { SystemProgram } = web3

const defaultAccounts = {
    tokenProgram: TOKEN_PROGRAM_ID,
    clock: anchor.web3.SYSVAR_CLOCK_PUBKEY,
    systemProgram: SystemProgram.programId,
}


function Alloutes() {
 
  const [account, setAccount] = useState(false);
  const [userDetail, setUserDetail] = useState();
  const [tiktoks, setTikToks] = useState([]);
  const [newVideoShow ,setNewVideoShow] = useState(false);
  const [description ,setDescription] = useState('');
  const [videoUrl ,setVideoUrl] = useState('');

  const wallet = useWallet()
  const connection = new anchor.web3.Connection(SOLANA_HOST)
  const program = getProgramInstance(connection, wallet)
  const { getTiktoks, LikeVideo, createComment, getComments, newVideo } = useTiktok(
    setTikToks,
    userDetail,
    videoUrl,
    description,
    setDescription,
    setVideoUrl,
    setNewVideoShow
  );

  useEffect(() => {
    if (wallet.connected) {
      checkAccount()
      getTiktoks()
    }
  }, [wallet.connected])

  useEffect(() => {
    const intervalId = setInterval(() => {
      getTiktoks();
      // console.log(tiktoks);
    }, 3000)

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId)
  })

  const checkAccount = async () => {
    let [user_pda] = await anchor.web3.PublicKey.findProgramAddress(
      [utf8.encode('user'), wallet.publicKey.toBuffer()],
      program.programId,
    )

    try {
      const userInfo = await program.account.userAccount.fetch(user_pda)
      console.log(userInfo)
      setUserDetail(userInfo)
      setAccount(true)
    } catch (e) {
      setAccount(false)
    }
  }
  
  const { signup } = useAccount()
  return (
        <div>
            {account ? (
              <>
                <Mainview description={description} setDescription={setDescription} videoUrl={videoUrl} setVideoUrl={setVideoUrl} newVideo={newVideo} tiktoks={tiktoks} />
              </>
            ): (
                <Signup signup={signup} wallet={wallet.publicKey.toBase58} setAccount={setAccount} account={account} />
            )}
        </div>
  );
}

export default Alloutes;

// 