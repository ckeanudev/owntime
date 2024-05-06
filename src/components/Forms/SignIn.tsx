"use client";

import { app } from "@/lib/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import { FaArrowRight } from "react-icons/fa6";

type Inputs = {
  emailAddress: string;
  password: string;
};

const SignIn = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [errorCode, setErrorCode] = useState("");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmitFun: SubmitHandler<Inputs> = (e: any) => {
    setLoading(true);
    const auth = getAuth(app);
    const { emailAddress, password } = e;

    signInWithEmailAndPassword(auth, emailAddress, password)
      .then((res: any) => {
        console.log(res);

        if (res.user.uid) {
          router.push("/");
        }
      })
      .catch((error: any) => {
        setErrorCode(error.code);
        setLoading(false);
      });
  };

  return (
    <form className="w-[400px]" onSubmit={handleSubmit(onSubmitFun)}>
      <h1 className="text-xl font-bold mb-5">Sign In Your Account</h1>

      <div className="flex flex-col gap-2 mb-3">
        <Label htmlFor="emailAddress" className="text-base">
          Email Address
        </Label>
        <Input {...register("emailAddress", { required: true })} />
      </div>

      <div className="flex flex-col gap-2 mb-3">
        <Label htmlFor="password" className="text-base">
          Password
        </Label>
        <Input type="password" {...register("password", { required: true })} />
      </div>

      <Button
        type="submit"
        className="text-lg font-semibold w-full my-5"
        size="lg"
        disabled={loading}
      >
        {loading ? (
          <CgSpinnerTwoAlt size={24} className="animate-spin" />
        ) : (
          `Sign In`
        )}
      </Button>

      {!loading && (
        <div className="w-full flex justify-end">
          <Link
            href={`/sign-up`}
            className="group text-sm font-semibold flex gap-2 items-center"
          >
            Sign Up{" "}
            <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      )}

      {errorCode === `auth/invalid-credential` ? (
        <p className="text-red-500 font-medium mt-5">
          User not exist, check you email and password before signing in
        </p>
      ) : errorCode !== "" ? (
        <p className="text-red-500 font-medium mt-5">
          Oops, something went wrong!
        </p>
      ) : null}
    </form>
  );
};

export default SignIn;
