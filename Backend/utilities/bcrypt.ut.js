import bcrypt from 'bcrypt';

export async function HashingPassword(password){
    const hash =await bcrypt.hash(password,10);
    console.log(hash)
    return hash
}

export function VerifyingPassword(password,encytPassword){
    return bcrypt.compare(password,encytPassword)
}