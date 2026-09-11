"use client"

import { supabase } from "@/lib/supabaseClient";

export default async function getNewToken() {

    const newToken = generateToken(15);
    
    const { error } = await supabase
        .from('Identification')
        .insert({ token: newToken });

    if (error) console.error(error);
    else {
        sessionStorage.setItem("token",newToken);
    };
    return ;
}

/// get from https://www.tokengenerator.dev/languages/typescript
function generateToken(length: number, options?: {uppercase?: boolean; lowercase?: boolean; numbers?: boolean;}): string {

    const {
        uppercase = true,
        lowercase = true,
        numbers = true,
    } = options || {};

    let charset = '';
    if (uppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (lowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (numbers) charset += '0123456789';

    if (charset.length === 0) {
        throw new Error('At least one character set must be selected.');
    }

    const buffer = new Uint8Array(length);
    window.crypto.getRandomValues(buffer);

    let token = '';
    for (let i = 0; i < length; i++) {
        token += charset[buffer[i] % charset.length];
    }

    return token;
}
