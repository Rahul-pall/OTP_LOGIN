import React, { useEffect, useRef, useState } from "react";

const Otpnumber = ({ length = 4, onSubmitOtp = () => {} }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));

  const inputref = useRef([]);
  console.log(inputref);

  useEffect(() => {
    inputref.current[0].focus();
  }, []);

  const handleOnchange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    //Allow only 1 otp
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    //submit triger
    const combineOtp = newOtp.join("");
    if (combineOtp.length === length) onSubmitOtp(combineOtp);

    //move to the next input if current filled is fill

    // if(value && index<length-1 && inputref.current[otp.indexOf("")]){
    if (value && index < length - 1 && inputref.current[index + 1]) {
      inputref.current[index + 1].focus();
      // inputref.current[otp.indexOf("")].focus();
    }
  };
  const handleClick = (index) => {
    //by the help of this code your cursor alway put in last
    inputref.current[index].setSelectionRange(1, 1);

    //if any col of otp you not fill then it automatically send to this field
    if (index > 0 && !otp[index - 1]) {
      inputref.current[otp.indexOf("")].focus();
    }
  };
  const handleKeyDown = (index, e) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputref.current[index - 1]
    ) {
      //move to the previous input when click backspace
      inputref.current[index - 1].focus();
    }
  };
  return (
    <div className="flex justify-center items-center gap-11 mt-8">
      {otp.map((value, index) => {
        return (
          <input
            className="text-[2em] w-[50px] h-[50px] border-2 border-gray-400 text-center outline-blue-600"
            key={index}
            type="text"
            value={value}
            ref={(input) => (inputref.current[index] = input)}
            onChange={(e) => handleOnchange(index, e)}
            onClick={() => handleClick(index)}
            onKeyDown={(e) => handleKeyDown(index, e)}
          />
        );
      })}
    </div>
  );
};

export default Otpnumber;
