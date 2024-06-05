"use client";

import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";
const CrispChat = () => {

    useEffect(() => {
        Crisp.configure(process.env.NEXT_PUBLIC_CRISP_CHAT_ID!);
    }, []);

    return null;
}

export default CrispChat;