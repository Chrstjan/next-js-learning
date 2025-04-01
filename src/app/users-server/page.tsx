import { resolve } from "path";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export default async function UsersServer() {
  //   await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) {
    throw new Error("Error fetching users");
  }

  const data = await res.json();

  return (
    <>
      {data && data.length > 0 ? (
        <ul>
          {data?.map((item: User) => {
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
