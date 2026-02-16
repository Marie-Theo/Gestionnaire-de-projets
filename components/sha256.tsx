import SHA256 from "@/node_modules/crypto-js/sha256";

export default function sha256(message: string) {
    return SHA256(message).toString();
}