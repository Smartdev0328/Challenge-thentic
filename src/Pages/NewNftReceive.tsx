import React from 'react';
import Layout from '../components/Layout';

import './index.scss';
import useFunctions,{post_request,get_request} from '../useFunctions';


const NewNftReceive = () => {
  
  const newWalletGenerator = ()=>{
    'https://thentic.tech/api/nfts/transfer'
  }
    return <Layout className="home" >
        <section className='exchange-section normal-bg'>
            <div className='mb4 mo-mt0-desk-mt4'>
                <div className='row '>
                    <div className='col-sm-12 col-md-12 col-lg-6 overflow-h res-p5 justify' style={{ background: "url('/assets/images/sign/create.png')", backgroundSize: 'cover' }} >
                        {/* <img className='po-ab' style={{ left: '0', right: '0', top: '0', bottom: '0' }} src="/assets/images/sign/create-bg.png" alt="" /> */}
                        <h1 className='bold white-color'>
                            Please Make New NFT contact with one-click.
                        </h1>
                    </div>
                    <div className='col-sm-12 col-md-12 col-lg-6'>
                        <div className='exchange-container mo-w10-desk-w9'>
                            <div className='tc'>
                                <h1>Create an Account</h1>
                                <p className='black-color bold'>
                                    Connected Wallet
                                </p>
                            </div>

                            <div className=' mt2 justify-s'>
                                <div className='w10'>
                                    <div className='grey-color' style={{ fontSize: '10pxs' }}>Email Address</div>
                                    <div>
                                        <input className='sign-input' style={{ fontSize: '16px' }} type="input" defaultValue={''} />
                                    </div>
                                </div>
                            </div>
                            <div className=' mt2 justify-s'>
                                <div className='w10'>
                                    <div className='grey-color' style={{ fontSize: '10pxs' }}>Password</div>
                                    <div>
                                        <input className='sign-input' style={{ fontSize: '16px' }} type="input" defaultValue={''} />
                                    </div>
                                </div>
                            </div>
                            <div className='mt2'>
                                <div className='justify-s'>
                                    <div className='grey-color'>Your password should be at least 8 characters, and include 1 upper case letter, 1 lower case letter and 1 number.</div>
                                </div>
                            </div>
                            <div className='mt2'>
                                <div className='justify-s'>
                                    <button className='btn primary-bg w10'>Create Account</button>
                                </div>
                            </div>
                            <div className='mt2' style={{ border: '1px solid #6A6A6A' }}></div>
                            <div className='mt2 justify'>
                                <button className='btn transparent-bg w10 grey-border active-hover'>
                                    <div className='justify w10'>
                                        <div className='flex1'></div>
                                        <div className='flex2 justify gap10'>
                                            <div className='flex1'>
                                                <img className='' src="/assets/images/sign/google.png" alt="google" />
                                            </div>
                                            <div className='flex5'>
                                                <span className='black-color'>Signup with Google </span>
                                            </div>
                                        </div>
                                        <div className='flex1'></div>
                                    </div>
                                </button>
                            </div>
                            <div className='mt2 justify'>
                                <button disabled={true} className='cu-dis btn black-bg w10 grey-border'>
                                    <div className='justify w10'>
                                        <div className='flex1'></div>
                                        <div className='flex2 justify gap10'>
                                            <div className='flex1'>
                                                <img className='' src="/assets/images/sign/apple.png" alt="apple" />
                                            </div>
                                            <div className='flex5'>
                                                <span className='white-color'>Signup with Apple </span>
                                            </div>
                                        </div>
                                        <div className='flex1'></div>
                                    </div>
                                </button>
                            </div>
                            <div className='mt2 justify'>
                                <button disabled={true} className='cu-dis btn transparent-bg w10 grey-border'>
                                    <div className='justify w10'>
                                        <div className='flex1'></div>
                                        <div className='flex2 justify gap10'>
                                            <div className='flex1'>
                                                <img className='' src="/assets/images/sign/binance.png" alt="binance" />
                                            </div>
                                            <div className='flex5'>
                                                <span className='black-color'>Signup with Binance </span>
                                            </div>
                                        </div>
                                        <div className='flex1'></div>
                                    </div>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

    </Layout>;
};

export default NewNftReceive;