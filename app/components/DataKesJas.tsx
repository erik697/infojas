"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function DataKesjas({nrpG}:{nrpG:string}) {
  const [open, setOpen] = useState(false);


  const [loading,setLoading] = useState(true)
    const [staft, setStaft] = useState([])
  // Want to use async/await? Add the `async` keyword to your outer function/method.
async function getStaft() {
  try {
    const response = await axios.get(`https://script.google.com/macros/s/AKfycbzJrsjEjgd4S-RPATlhmFWF-b8l3pneqTlgJIUZi6L7vALfxGOiI8u-nnG4131jQkPh/exec?action=detail&nrps=${nrpG}`);
    const data = response.data.data[0]
    console.log("stafff us",data)
    setStaft(response.data.data)
    setLoading(false)
  }catch (e){
    console.log(e)
  }
}

useEffect(()=>{
    getStaft()
},[])

  const history = [
    { triwulan: "Triwulan I", jarak: "3000 m" },
    { triwulan: "Triwulan II", jarak: "3100 m" },
    { triwulan: "Triwulan III", jarak: "3150 m" },
  ];

  return (
    <>
    {loading ?
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="w-10 h-10 border-4 border-slate-300 border-t-slate-900 rounded-full animate-spin"></div>
    </div>
    :
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">  

    {staft && staft.map((item:any, key:number)=>(  
        <div key={key} className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-6">
        
        {/* Header */}
        <div className="mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            Data Kesegaran Jasmani
            </h1>
            <p className="text-gray-500">
            Nama: <span className="font-semibold">{item.nama}</span>
            {/* NRP: <span className="font-semibold">199912122024051003</span> */}
            </p>
            <p className="text-gray-500">
            {/* Nama: <span className="font-semibold">Pratu Andi Saputra</span> */}
            NRP: <span className="font-semibold">{item.nrp}</span>
            </p>
            <p className="text-gray-500">
            {/* Nama: <span className="font-semibold">Pratu Andi Saputra</span> */}
            Satuan: <span className="font-semibold">Infolahtadam IX/Udayana</span>
            </p>
        </div>

        {/* year */}
        <div className="text-center text-4xl md:text-6xl font-semibold my-3">
            2026
        </div>

        {/* Data Utama */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">

            <Card title="Lari" value={item.lari+" m"} color="blue" />
            <Card title="Pull Up" value={item.pull_up+"x"} color="green" />
            <Card title="Push Up" value={item.push_up+"x"} color="red" />
            <Card title="Sit Up" value={item.sit_up+"x"} color="yellow" />
            <Card title="Settle Run" value={item.settle_run+"m"} color="purple" />
            <Card title="Renang Militer" value={item.renang_militer+"m"} color="indigo" />

        </div>

        {/* Button Expand */}
        <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition"
        >
            Histori Lari Triwulan Sebelumnya
            <svg
            className={`w-5 h-5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
            />
            </svg>
        </button>

        {/* History Section */}
        {open && (
            <div className="mt-4 overflow-x-auto">
            <table className="w-full border rounded-lg overflow-hidden text-sm md:text-base">
                <thead className="bg-gray-200">
                <tr>
                    <th className="p-3 text-left">Triwulan</th>
                    <th className="p-3 text-left">Jarak Lari</th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y">
                {history.map((item, index) => (
                    <tr key={index}>
                    <td className="p-3">{item.triwulan}</td>
                    <td className="p-3 font-semibold">{item.jarak}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        )}
        </div>
        ))}
    </div>
    }
    </>
  );
}

/* Reusable Card Component */
function Card({ title, value, color }: any) {
    
  return (
    <div className={`bg-${color}-50 p-4 rounded-xl text-center`}>
      <p className="text-gray-500 text-sm">{title}</p>
      <h2 className={`text-2xl font-bold text-${color}-600`}>
        {value}
      </h2>
    </div>
  );
}