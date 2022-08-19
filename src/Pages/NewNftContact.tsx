import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import axios from 'axios';
import './index.scss';
import useFunctions, { post_request, get_request } from '../useFunctions';
const NewNftContact = () => {
  const [name, setName] = useState();
  const [shortName, setShortName] = useState();

  const [walletDataShow, setWalletDataShow] = useState(false);
  const [walletData, setWalletData] = useState('');

  const newNFTContact = async () => {

    const data = await post_request('new_nft_contact', {
      type: 'nft',
      url: 'https://thentic.tech/api/nfts/contract',
      name,
      short_name: shortName,
      webhook_url: 'https://localhost:3000/',
      redirect_url: ''
    });
    setWalletData(data.transaction_url);
    setWalletDataShow(true);
    window.open(data.transaction_url);
    // const res = await axios.get(data.transaction_url)
    // console.log("res: \n \n")
    // console.log(res)
    // return await result.json();
  }
  return <Layout className="home" >
    <section className='exchange-section normal-bg'>
      <div className='mb4 mo-mt0-desk-mt4'>
        <div className='row '>
          {/* style={{ background: "url('/assets/images/sign/create.png')", backgroundSize: 'cover' }}  */}
          <div className='col-sm-12 col-md-12 col-lg-12 overflow-h res-p1 justify' >
            <img className='' src="/assets/images/sign/create.png" alt="" />
            <div className='po-ab dis-f fd-c p1'>
              <div className=''>
                <h1 className='bold white-color'>
                  Please Make New NFT contact with one-click.
                </h1>
              </div>
              {
                walletDataShow ?
                  <div className='mt2'>
                    <div className='justify-s'>
                      {/* <iframe src={`${walletData}`} style={{ border: 'grey 2px solid', borderRadius: '20px', width: '100%', height: '600px' }} /> */}
                    </div>
                  </div> :
                  <>
                    <div className='mt2'>
                      <div className='justify-s'>
                        <input onChange={(e: any) => setName(e.target.value)} className='sign-input w7 mauto' style={{ fontSize: '16px' }} type="input" placeholder='New Contact Name' defaultValue={name} />
                      </div>
                    </div>
                    <div className='mt2'>
                      <div className='justify-s'>
                        <input onChange={(e: any) => setShortName(e.target.value)} className='sign-input w7 mauto' style={{ fontSize: '16px' }} type="input" placeholder='New Contact short Name' defaultValue={shortName} />
                      </div>
                    </div>

                    <div className='mt2'>
                      <div className='justify-s'>
                        <button onClick={() => newNFTContact()} className='mauto btn primary-bg w7'>Create New NFT Contract</button>
                      </div>
                    </div>
                  </>
              }


            </div>
          </div>

        </div>
      </div>
    </section>

  </Layout>;
};

export default NewNftContact;