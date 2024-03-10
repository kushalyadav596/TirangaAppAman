import React, { useState } from 'react'

function LoginForm() {
    const [PhoneNo, setPhoneNo] = useState('');
    const [NoEntered, setNoEntered] = useState(false)
    const [ButtonText, setButtonText] = useState('Log in')
    const [ClassName, setClassName] = useState('')
    const [OTP, setOTP] = useState('')
    
    const changeValue = (e)=>{
        

        if (e.target.value.length < 10) {
            setClassName("");
            
        } else {
            setClassName("active")
        }
        if (e.target.value.length <= 10) {
            setPhoneNo(e.target.value);
            
        } else {
        }
    }

    const ChangeOtp = (e)=>{
        setOTP(e.target.value)
       if (e.target.value.length > 0) {
        setClassName("active");
       } else {
        setClassName("");

       }
    }

    const submitForm = (e)=>{
        if (NoEntered) {
            setNoEntered(false);
            setPhoneNo('');
            setButtonText('Log in');
        } else {
            setNoEntered(true);
            setButtonText('Enter OTP');
            setClassName('')

        }
    }
  return (
    <>
      
        <div className="form">
            <div className="form-group">
            {!NoEntered ? (
                        <>
                            <label htmlFor="phoneNo">
                                <i className="fa-solid fa-mobile-button"></i> Phone Number
                            </label>
                            <div className="p-div">
                                <p>+91</p>{' '}
                                <input
                                    onChange={changeValue}
                                    type="tel"
                                    id="phoneNo"
                                    value={PhoneNo}
                                    placeholder="Please enter the phone number"
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            <label htmlFor="otp">
                                <i className="fa-solid fa-lock"></i> Enter OTP
                            </label>
                        <div className="p-div">
                            <input
                                type="text"
                                id="otp"
                                onChange={ChangeOtp}
                                placeholder="Enter OTP"
                                // Add onChange handler for OTP input if needed
                            />
                            </div>
                        </>
                    )}
            </div>
            <div className="btn-group">
                <button className={ClassName} onClick={submitForm}>{ButtonText}</button>
            </div>
        </div>

    </>
  )
}

export default LoginForm