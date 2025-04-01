"use client";
import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export default function UsersClient() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");

      if (!res.ok) {
        throw new Error("Error fetching users");
      }

      const data = await res.json();
      setUsers(data);
      console.log(data);
    };
    getUsers();
  }, []);

  return (
    <>
      {users && users.length > 0 ? (
        <ul>
          {users?.map((item) => {
            return (
              <li key={item.id}>
                {item?.name} ({item.email})
              </li>
            );
          })}
        </ul>
      ) : null}
    </>
  );
}
