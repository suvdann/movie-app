"use client";
import { Search } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  //inputd utga oruulah
  const [search, setSearch] = useState("");
  const SearchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  console.log(search);

  interface Contact {
    name: string;
    Phonenumber: number;
    nickname?: string;
  }
  const contacts: Contact[] = [
    { name: "Alden", Phonenumber: 6888888 },
    { name: "Alex", Phonenumber: 9999999 },
    { name: "AubreyWeddingPal", Phonenumber: 6888888 },
    { name: "Aunt", Phonenumber: 6888888 },
    { name: " Aunt", Phonenumber: 6888888 },
    { name: "AwkwardNoodle", Phonenumber: 6888888 },

    { name: "Betsy Le", Phonenumber: 6888888 },
    { name: " Bridget", Phonenumber: 6888888 },
    { name: " Bush J&S Landlady", Phonenumber: 6888888 },
  ];
  //search hiih heseg
  const filterBySearch = contacts.filter((el) => {
    if (
      el.name?.toLocaleLowerCase().includes(search) ||
      el.nickname?.toLocaleLowerCase().includes(search)
    ) {
      return el;
    }
  });
  return (
    <div className="flex items-center  justify-center h-screen justify-between">
      <div className="border w-[300px] h-[400px] mt-[30px] rounded-[15px] gap-[20px] p-3">
        <h1 className=" font-bold text-[30px]">Contact</h1>
        <div className="   flex items-center justify-center rounded-[10px] gap-2 p-2 bg-gray-50">
          <Search />
          <input
            onChange={SearchHandler}
            className="outline-none  "
            type="text"
            placeholder="search"
          />
        </div>

        <div className=" mt-[20px] ">
          {/* {contacts.map((contact, index) => (
          <p key={index} className=" border-[0.1px] border-gray-300 ">
            {contact.name}
          </p>
        ))} */}

          {filterBySearch?.map((el, index) => {
            return (
              <p
                key={index}
                className=" border-b-1 border-gray-300 last:borer:none "
              >
                {el.name}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
