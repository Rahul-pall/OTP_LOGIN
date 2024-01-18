import React, { useState } from "react";
import Otpnumber from "./Otpnumber";
import Home from "./Home";

const PhoneOtp = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const handlePhoneNumber = (e) => {
    e.preventDefault();

    //phone validation
    const regex = /[^0-9]/g;
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert("invalid phone number");
      return;
    }

    setShowOtp(true);
    //call API
    //show Otp Field
  };
  const onSubmitOtp = (otp) => {
    console.log("you have login successfully", otp);
    setConfirm(true);
  };
  return (
    <>
      <div className="h-[100vh] flex justify-center items-center w-[100%]">
        {!showOtp ? (
          <form
            className="border p-8 shadow-xl shadow-[rgba(255,255,255,0.2)] rounded-lg
       bg-[rgba(0,0,0,0.7)]"
            onSubmit={handlePhoneNumber}
          >
            <h1 className="text-3xl text-white pb-8">
              Enter Phone number to Login
            </h1>
            <input
              className="border-2 p-1.5"
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="enter phone number"
            />
            <button type="submit" className="border-2 p-1.5 px-8 text-white">
              Submit
            </button>
          </form>
        ) : (
          <div>
            {confirm ? (
              <Home />
            ) : (
              <div
                className="border-2 p-8 shadow-2xl shadow-[rgba(255,255,255,0.2)] rounded-lg
            bg-[rgba(0,0,0,0.7)]"
              >
                <p className="text-white text-2xl">Enter OTP sent to your +91 {phoneNumber}</p>
                <Otpnumber length={4} onSubmitOtp={onSubmitOtp} />
              </div>
            )}
          </div>
        )}
        {/* {
              confirm && <Home/>
        } */}
      </div>
    </>
  );
};

export default PhoneOtp;
