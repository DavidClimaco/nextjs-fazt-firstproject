import Navbar from "@/components/Navbar";

async function getUser(id: string) {
  const res = await fetch(`https://reqres.in/api/users/${id}`, {
    headers: { "x-api-key": "reqres-free-v1" }, //Header obligatorios por la API
  });
  const data = await res.json();
  return data.data;
}

export default async function UserPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const res = await params;
  const user = await getUser(res.id);

  return (
    <>
      <div className="bg-slate-800 p-10 rounded-md">
        <Navbar />
        <img src={user.avatar} alt="Avatar user" className="m-auto my-4"/>
        <h3 className="text-3xl font-bold text-center">{user.id} {user.first_name} {user.last_name}</h3>
        <p>email: {user.email}</p>
      </div>
    </>
  );
}
