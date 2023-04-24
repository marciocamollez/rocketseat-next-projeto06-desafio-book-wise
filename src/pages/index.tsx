import { signOut, useSession } from 'next-auth/react';

export default function Home() {
  const { data } = useSession();
  return (
    <>
      <h1>Oi</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button onClick={() => signOut()}>deslogar</button>
    </>
  );
}
