import React, { useState } from 'react';
import backIcon from '../../assets/icon/back.svg';
import pinIcon from '../../assets/icon/Group.svg';
import PinInput from 'react-pin-input';
import successIcon from '../../assets/icon/success.png';
import loginBg from '../../assets/images/bg1.png';
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Utils
import BackButton from "../../components/utils/BackButton";
import AuthButton from '../../components/utils/AuthButtons';

// Importing images instead
import FacebookIcon from "../../assets/images/facebook.png";
import GoogleIcon from "../../assets/images/google.png";
import AppleIcon from "../../assets/images/apple.png";
import CustomButton from "../../components/utils/CustomButton";

const SignIn = () => {
    const startRedirectTimeout = () => {
        setTimeout(() => {
            window.location.href = '/';
        }, 2000);
    };
        
        

    const [stage, setStage] = useState(1);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    
    const handleNext = () => {
        if (stage < 3) {
        setStage(stage + 1);
        }
    };
    
    const handlePrevious = () => {
        if (stage > 1) {
            setStage(stage - 1);
        }
    };
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value,
        });
    };
    
    const handleModalClose = () => {
        window.location.reload();
        };
        
    
    const renderForm = () => {
        switch (stage) {
        case 1:
        return (
            <motion.div
                initial={{ x: 50 }}
                animate={{ x: 0 }}
                transition={{ type: 'tween', duration: 0.2 }}
                className='w-screen h-screen flex flex-col bg-loading4Pattern bg-center bg-cover bg-no-repeat'>

                <div className="w-full h-full bg-linearGradient">
                    <BackButton />

                    <motion.div
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: 'tween', duration: 1 }}
                        className="absolute bottom-0 flex flex-col gap-3 w-full p-5">
                        <p className="text-white  text-4xl text-center font-bold">Let&apos;s get you in</p>



                        <div className="flex flex-row items-center gap-4 text-white w-full">
                            <hr className="w-full" />
                            <p>or</p>
                            <hr className="w-full" />
                        </div>

                        <CustomButton text={'SIGN IN WITH PASSWORD'} />

                        <p className="text-sm text-white text-center font-extrabold">
                            Don&apos;t have an account? <a href="/signup" className="text-purple">Sign Up</a></p>
                    </motion.div>

                </div>

            </motion.div >
        );
        case 2:
        return (
            <div className='h-full'>
                <button onClick={handlePrevious} className='flex items-center gap-5'>
                    <img src={backIcon} width={'12px'} alt="" />
                    <span className='text-white leading-4'>Create new PIN</span>
                </button>
                <div className='h-4/5 flex items-center flex-col justify-center'>
                    <div className='flex items-center justify-center'>
                        <img width='220px' src={pinIcon} alt="icon" />
                    </div>
                    <p className='text-center pt-10 text-white'>Add your PIN number to make your account more secure.</p>
                    <div className='flex items-center justify-center'>
                        <PinInput 
                            length={4} 
                            initialValue=""
                            secret
                            secretDelay={300} 
                            onChange={(value, index) => {}} 
                            type="numeric" 
                            inputMode="number"
                            style={{padding: '10px'}}  
                            inputStyle={{borderColor: 'white', background: 'white', margin: '10px', color: 'black'}}
                            inputFocusStyle={{borderColor: 'blue'}}
                            onComplete={(value, index) => {}}
                            autoSelect={true}
                            regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                        />
                    </div>

                    <br /><br />

                    <button className='btn btn-primary' onClick={handleNext}>CONTINUE</button>
                </div>
            </div>
        );
        default:
        return (
            <div className='h-full relative'>
                <div className='form-con'>
                    <div className='flex items-center flex-col justify-center bg-neutral-800 py-14 rounded-lg px-12'>
                       <img src={successIcon} alt="icon" />
                       <h2 className='pt-5 text-3xl font-bold text-white'>Congratulations!</h2>
                       <p className='text-center font-light text-gray-400 text-sm py-3'>Your account ready to use. You will be redirected to the home page</p>

                       <br />

                       <button className='btn btn-primary' style={{maxWidth: '200px', borderRadius: '8px'}} onClick={handleNext}>Explore Now</button>
                    </div>
                    <div className='absolute bottom-4 left-0 flex justify-center w-full gap-4'>
                        <button className='btn btn-secondary'>skip</button>
                        <button className='btn btn-primary'>continue!</button>
                    </div>
                </div>
            </div>
        );
    }
    };

    return (
    <section className='main-body p-0 bg-black' style={{padding: '0'}}>
        {renderForm()}
    </section>
    );
}

export default SignIn;