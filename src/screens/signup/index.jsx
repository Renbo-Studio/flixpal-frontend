import React, { useState } from 'react';
import backIcon from '../../assets/icon/back.svg';
import pinIcon from '../../assets/icon/Group.svg';
import PinInput from 'react-pin-input';
import successIcon from '../../assets/icon/success.png';

const SignUp = () => {
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
            <div className='h-full'>
                <button onClick={handlePrevious} className='flex items-center gap-5'>
                    <img src={backIcon} width={'12px'} alt="" />
                    <span className='text-white leading-4'>Fill your profile</span>
                </button>
                <div className='py-10 pt-20 [&>label]:text-white [&>label]:block [&>input]:p-2 [&>input]:w-full [&>input]:border-solid [&>input]:border-2 [&>input]:border-white [&>input]:mb-4 [&>select]:mb-4 [&>select]:p-2 [&>select]:w-full '>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="number" placeholder='+123 000 0000 000' id='phone'/>
                    <label htmlFor="birthdate">Birth Date</label>
                    <input type="date" name="birthdate" id="birthdate" />
                    <label htmlFor="gender">Gender</label>
                    <select name="gender" id="gender">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' placeholder='**********' />
                    <label htmlFor="rpassword">Repeat Password</label>
                    <input type="rpassword" id='rpassword' placeholder='**********' />
                    <br /><br /><br />

                    <button className='btn btn-primary' onClick={handleNext}>Sign Up</button>
                </div>
            </div>
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
    <section className='main-body bg-black'>
        {renderForm()}
    </section>
    );
}

export default SignUp;