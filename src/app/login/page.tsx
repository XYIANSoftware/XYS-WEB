'use client'; // This marks the entire file as a Client Component
import { XYLabelModel } from '@/common';
import { XYPassword } from '@/common/Inputs/XYPassword';
import { MenuModel } from '@/common/Menu/MenuModel';
import { PrimeReactProvider } from 'primereact/api';
import { Password } from 'primereact/password';
import { useState } from 'react';

export default function Login() {
    const labelModel: XYLabelModel = {
        text: 'PassWord',
    };
    const [temp, setTemp] = useState('');

    return (
        <PrimeReactProvider>
            <main>
                <MenuModel />
                <h1 className='text-center pt-8'>XYS Client Portal</h1>
                <div className='card flex justify-content-center flex-column align-items-center'>
                    {/* <XYPassword toggleMask feedback /> */}
                    <div>
                        <Password
                            placeholder='Password'
                            toggleMask
                            feedback
                            value={temp}
                            onChange={(e) => setTemp(e.target.value)}
                            pt={{
                                root: {
                                    style: {
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    },
                                },
                                input: {
                                    style: {
                                        height: '2rem',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '.4rem',
                                    },
                                },
                                showIcon: {
                                    style: {
                                        alignSelf: 'center', // Center the show icon
                                        fontSize: '1.2rem', // Adjust icon size if needed
                                    },
                                },
                                hideIcon: {
                                    style: {
                                        alignSelf: 'center', // Center the hide icon
                                        fontSize: '1.2rem', // Adjust icon size if needed
                                    },
                                },
                            }}
                        />
                    </div>
                    <div>
                        {/* <div className='login-container'>
                            <div className='login-form'>
                                <XYPassword
                                    toggleMask
                                    feedback
                                    labelModel={labelModel}
                                />
                            </div>
                        </div> */}
                    </div>
                </div>
            </main>
        </PrimeReactProvider>
    );
}
