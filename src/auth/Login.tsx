import { CustomInputField, CustomButton } from "../components";
import queries from "../services/queries/auth";
import { useState } from "react";
const Login = () => {
  const [form, setForm] = useState({
    pwd: "testy123@",
    usr: "test@brandimic.com",
  });

  const { mutateAsync, isLoading } = queries.login();

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutateAsync(form);
  };
  return (
    <div className="py-10 px-10 bg-white">
      <img
        src="/images/app-logo.png"
        width="184.56px"
        height="32px"
        alt="app-logo"
      />
      <div className="flex flex-col  justify-center space-y-3 h-screen items-center">
        {/*  */}
        <div className="text-center space-y-1">
          <p className="font-[700]  text-[24px]">Sign in</p>
          <p className=" align-middle text-grey-light text-[14px] font-[400]">
            Don’t have an account yet?
            <span className="pl-1 font-[600] text-blue-base">Sign up here</span>
          </p>
        </div>
        {/*  */}

        <form onSubmit={submit} className="space-y-2 w-[310px] ">
          <div className="space-y-1">
            <p className=" font-[600] text-[14px] text-grey-dark">Username</p>
            <CustomInputField
              leftIcon="/images/users.svg"
              required
              value={form.usr}
              placeholder="your username"
              onChange={(value: string) => {
                setForm({ ...form, usr: value });
              }}
            />
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between font-[600] text-[14px]">
              <p className="text-grey-dark">Password</p>
              <p className=" text-blue-base">Forgot password?</p>
            </div>

            <CustomInputField
              required
              value={form.pwd}
              leftIcon="/images/lock.svg"
              type="password"
              placeholder="your password"
              onChange={(value: string) => {
                setForm({ ...form, pwd: value });
              }}
            />
          </div>
          <div className="flex space-x-3 pt-1">
            <input
              type="checkbox"
              className="rounded-md border border-[#E5E7EB]"
            />
            <p className="font-[500] text-[16px] text-grey-dark">Remember me</p>
          </div>

          <div className="pt-2.5">
            <CustomButton
              type="submit"
              isLoading={isLoading}
              title="Sign in"
              disabled={form.pwd === "" || form.usr === ""}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
