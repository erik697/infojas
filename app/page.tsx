"use client"
import { useState } from "react";
import DataKesjas from "./components/DataKesJas";
import LoginPage from "./components/Login";

export default function Home() {
  const [nrp, setNrp] = useState("")
  const [isLogin, setIsLogin] = useState(false)
    const [nrpG, setNrpG] = useState("");
  return (
    <main>
      {isLogin ?
          <DataKesjas nrpG={nrpG} />
            :
          <LoginPage setIslogin={setIsLogin} setNrpG={setNrpG}/>
      }
    </main>
  );
}