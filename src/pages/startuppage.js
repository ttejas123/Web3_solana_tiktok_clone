import React, { useState, useEffect } from 'react';
import Signup from './Signup'
// import {WalletMultiButton} from "@solana/wallet-adapter-react-ui"
// import facebookLogo from '../assets/facebook.png'
import { useWallet } from  '@solana/wallet-adapter-react'              
import { SOLANA_HOST } from '../utils/const'
import { getProgramInstance } from '../utils/utils'
import { TOKEN_PROGRAM_ID } from '@solana/spl-token'
import Mainview from './mainview';

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
  const wallet = useWallet()
  const connection = new anchor.web3.Connection(SOLANA_HOST)
  const [userDetail, setUserDetail] = useState()
  const program = getProgramInstance(connection, wallet)

  useEffect(() => {
    if (wallet.connected) {
      checkAccount()
    //   getTiktoks()
    }
  }, [wallet.connected])

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
                <Mainview />
            ): (
                <Signup signup={signup} wallet={wallet.publicKey.toBase58} setAccount={setAccount} account={account} />
            )}
        </div>
  );
}

export default Alloutes;

// 