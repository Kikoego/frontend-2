"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";
// import { Session } from "inspector";

const Provider = ({ children, session }) => {
    return (
        <SessionProvider session={session}>
            {children}
        </SessionProvider>
    )
}

export {Provider}