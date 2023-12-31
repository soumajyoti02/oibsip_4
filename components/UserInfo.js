"use client"
import React, { useState } from 'react'
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const UserInfo = () => {
    const { data: session } = useSession();
    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-violet-200 to-pink-200">
            <div className=" p-8 rounded-lg shadow-2xl">
                <h1 className="text-2xl font-bold mb-4">Welcome, {session?.user?.name}!</h1>
                <p className="mb-4">Your Secure Account Space</p>
                <div className="border-t border-gray-300 pt-4">
                    <h2 className="text-lg font-semibold mb-2">Account Overview:</h2>
                    <p>Username: {session?.user?.name}</p>
                    <p>Email: {session?.user?.email}</p>

                </div>
                <button
                    onClick={() => signOut()}
                    className="bg-red-500 text-white font-bold px-6 py-2 mt-3"
                >
                    Log Out
                </button>
            </div>
        </div>
    )
}

export default UserInfo
