'use client';

import { useState } from "react";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { useRouter } from "next/navigation";

export default function LoginPage() {

    const [code, setCode] = useState("");
    const [error, setError] = useState(false);
    const router = useRouter();

    const onValidateCode = () => {
        const isValid = code === "123456";
        setError(!isValid);

        if (isValid) {
            router.push("/dashboard/home");
        } else {
            setTimeout(() => {
                setError(false);
            }, 4000);
        }
        setCode("");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen space-y-10">
            <span
                className={clsx("font-semibold italic", error ? "text-red-500 text-3xl" : "text-blue-700 text-2xl")}
            >
                {error ? "Código inválido - Intentelo de nuevo" : "Ingrese el código de verificación"}
            </span>
            <div>
                <InputOTP
                    maxLength={6}
                    value={code}
                    onChange={(value) => {
                        setCode(value);
                    }}
                >
                    <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                    </InputOTPGroup>
                </InputOTP>
            </div>
            <div>
                <Button
                    onClick={onValidateCode}
                    disabled={code.length !== 6}
                >
                    Validar código
                </Button>
            </div>
        </div>
    );
}