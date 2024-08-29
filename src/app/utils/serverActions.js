'use server'

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const login = async(formData) => {
const{username, password} = Object.fromEntries(formData);



 
    if(username == "aman" && password == 'aman'){
        const cookiesStore = cookies()
       cookiesStore.set('fname', 'aman');
        return redirect('/items');
    } else{
        return redirect('/login')
    }   
}

export const logout = async() => {
    const cookiesStore = cookies()
    cookiesStore.delete('fname');
    return redirect('/login')

}
