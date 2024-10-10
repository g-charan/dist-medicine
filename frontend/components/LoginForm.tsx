"use client";

import Link from "next/link";
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";

const LoginForm = () => {
  return (
    <div className="flex flex-col justify-center w-full">
      <h1 className="pb-10 self-center">Login</h1>
      <div className="flex justify-center">
        <div className="flex flex-col gap-3">
          <CustomInput
            placeholder={"Email"}
            mainClassName={"w-full justify-center"}
            className={"w-[23rem]"}
            type={"text"}
          />
          <CustomInput
            placeholder={"Password"}
            mainClassName={"w-full justify-center"}
            className={"w-[23rem]"}
            type={"password"}
          />
          <a
            className="cursor-pointer self-end"
            onClick={() => alert("clicked")}
          >
            Forgot Password
          </a>
          <Link href={"/pages/hospital/dashboard"}>
            <CustomButton className="p-2 rounded-full w-full">
              Login
            </CustomButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
