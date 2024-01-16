import { useState } from "react";
import BackButton from "../../components/utils/BackButton";
import CustomButton from "../../components/utils/CustomButton";
import NormalInput from "../utils/NormaInput";
import { FaTelegramPlane } from "react-icons/fa";
import PasswordInput from "../utils/PasswordInput";



const SignUp = () => {

    // I do not know how to use react-forms sorry
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()


    return (
        <div className="w-screen h-screen bg-black flex justify-content items-center p-5">
            <BackButton />

            <div className="w-full flex flex-col gap-4">
                <p className="text-white text-4xl text-center">Create your <br /> Account</p>

                <form className="flex flex-col w-full gap-3" onSubmit={() => { alert('hello') }}>
                    <NormalInput
                        type={'email'}
                        O placeholder={'Enter your Email'}
                        icon={<FaTelegramPlane />}
                        value={email}
                        onChanged={(e) => { setEmail(e.target.value) }}
                    />

                    <PasswordInput
                        placeholder={'Password'}
                        value={password}
                        required={true}
                        onChanged={(e) => { setPassword(e.target.value) }}
                    />
                    <PasswordInput
                        placeholder={'Confirm Password'}
                        value={confirmPassword}
                        onChanged={(e) => { setConfirmPassword(e.target.value) }}
                    />

                    <div className="flex flex-row gap-3 items-center">
                        <input type="checkbox" className="accent-purple h-4 w-4" />
                        <p className="text-sm text-white">Remember me</p>
                    </div>

                    <CustomButton type='submit' text={'Create Account'} />
                </form>



            </div>



        </div >
    )
}

export default SignUp;
