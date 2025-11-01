import { create } from "zustand";


const emailAccess= (set)=>({
  email:"",
  setEmail: (newEmail) => set(() => ({ email: newEmail }))
})

const  useEmailStore=create(emailAccess)
export default useEmailStore