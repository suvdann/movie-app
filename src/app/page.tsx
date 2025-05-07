

"use client"
import { Search } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
const[search, setSearch]=useState("")
const SearchHandler=(event)=>{
  setSearch(event.target.value)
}

interface Contact{
  name : string;
  Phonenumber:number;
  nickname?:string;
}
const contacts: Contact[] = [
  { name: "Alden" ,Phonenumber:6888888},
  { name: "Alex", Phonenumber:9999999 },
  { name: "AubreyWeddingPal", Phonenumber:6888888 },
  { name: "Aunt", Phonenumber:6888888 },
  { name: " Aunt", Phonenumber:6888888 },
  { name: "AwkwardNoodle", Phonenumber:6888888 },


  { name: "Betsy Le", Phonenumber:6888888 },
  { name: " Bridget",Phonenumber:6888888},
  { name: " Bush J&S Landlady", Phonenumber:6888888 },
  
];

  return (
    <div className="flex items-center  justify-center h-screen justify-between">
          <div className="border w-[300px] h-[400px] mt-[30px] rounded-[15px] gap-[20px] p-3">



<h1 className=" font-bold text-[30px]">Contact</h1>
<div className="   flex items-center justify-center rounded-[10px] bg-gray-50">
<Search />
<input  className=" p-1 w-[400px] " type="text" placeholder="search" /> 

</div>


<div className=" mt-[20px] ">
{contacts.map((contact, index) => (
          <p key={index} className=" border-[0.1px] border-gray-300 ">
            {contact.name}
          </p>
        ))}
</div>
      
        

</div>
    </div>

  );
}
























{/* 
className="max-w-[400px] mx-auto bg-white border rounded-lg shadow-md overflow-hidden font-sans">
      <div className="relative p-4 border-b">
        <h1 className="text-2xl font-bold">Contacts</h1>
        <button className="absolute right-4 top-4 text-blue-600 text-3xl">+</button>
      </div>

      <input
        type="text"
        placeholder="Search"
        className="w-full p-2 border-b outline-none"
      />

      <ul>
        {contacts.map((contact, index) => (
          <li key={index} className="p-4 border-b hover:bg-gray-100">
            {contact.name}
          </li>
    </div> */}