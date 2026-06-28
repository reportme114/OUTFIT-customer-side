import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Package, Heart, MapPin } from 'lucide-react'
import { useAuth } from '../context/AuthContext.jsx'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signOut
} from "firebase/auth";
import { db } from "../firebase/firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth } from "../firebase/firebase";
import Address from "../components/Address";
import Orders from "../components/Orders";
const TABS = [['orders','Orders',Package],['wishlist','Wishlist',Heart],['address','Addresses',MapPin]]

export default function Account() {
  const navigate = useNavigate();
const location = useLocation();
const { isLoggedIn, logout, loading: authLoading } = useAuth()
const [mode, setMode] = useState("login")
const [tab, setTab] = useState("orders")

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [fullName, setFullName] = useState("")
const [loading, setLoading] = useState(false)
useEffect(() => {
  if (!authLoading && isLoggedIn && location.state?.from) {
    navigate(location.state.from, { replace: true });
  }
}, [authLoading, isLoggedIn, location.state, navigate]);
const register = async (e) => {
  e.preventDefault();

  try {
    setLoading(true);

    const userCredential =
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
await setDoc(
  doc(db, "users", userCredential.user.uid),
  {
    uid: userCredential.user.uid,
    fullName: fullName,
    email: email,
    role: "customer",
    createdAt: serverTimestamp(),
  }
);

    await sendEmailVerification(userCredential.user);
await signOut(auth);
    alert("Account created. Verify your email before logging in.");
setFullName("");
setEmail("");
setPassword("");
setMode("login");
  } catch (err) {
    alert(err.message);
  }
finally{setLoading(false);}
  
};
const signIn = async (e) => {
  e.preventDefault();

  try {
    setLoading(true);

    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    if (!userCredential.user.emailVerified) {
      alert("Please verify your email before logging in.Check your Spam folder if you don't see the email in your inbox.");
      await signOut(auth);
      return;
    }

    // Don't navigate here.
    // AuthContext will update isLoggedIn automatically.

  } catch (err) {
    alert(err.message);
  } finally {
    setLoading(false);
  }
};
if (authLoading) return null;
  if (!isLoggedIn) return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="container section" style={{maxWidth:440}}>
      <div className="auth">
        <div className="auth__tabs"><button className={mode==='login'?'is-on':''} onClick={()=>setMode('login')}>Login</button><button className={mode==='register'?'is-on':''} onClick={()=>setMode('register')}>Register</button></div>
<form
  onSubmit={mode === "login" ? signIn : register}className="auth__form">{mode === "register" && (
  <div className="field">
    <label>Full name</label>
    <input
      className="input"
      type="text"
      value={fullName}
      onChange={(e) => setFullName(e.target.value)}
      required
    />
  </div>
)}
          <div className="field"><label>Email</label><input
    className="input"
    type="email"
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    required
/></div>
          <div className="field"><label>Password</label><input
    className="input"
    type="password"
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
    required
/></div>
          <button
  className="btn btn--block"
  disabled={loading}
>
  {loading
    ? "Please wait..."
    : mode === "login"
    ? "Sign In"
    : "Create Account"}
</button>
        </form>
      </div>
    </motion.div>
  )
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="container section account">
      <aside className="account__nav">{TABS.map(([k,l,Icon])=>(<button key={k} className={tab===k?'is-on':''} onClick={()=>setTab(k)}><Icon size={17}/> {l}</button>))}<button
  onClick={async () => {
    await signOut(auth);
    logout();
  }}
  className="account__logout"
>
  Sign out
</button></aside>
      <div className="account__panel">
       {tab === "address" && (
  <Address />
)}
{tab === "orders" && <Orders />}        
{tab==='wishlist' && <div><h2>Wishlist</h2><p style={{color:'var(--muted)',marginTop:8}}>Saved items appear on your <a href="/wishlist">wishlist page</a>.</p></div>}
      </div>
    </motion.div>
  )
}
