import { UserContext } from '@/09-useContext/context/UserContext'
import { users } from '@/09-useContext/data/user-mock-data'
import { Button } from '@/components/ui/button'
import React, { useContext } from 'react'

export const ProfilePage = () => {
  const {user, logout} = useContext(UserContext)
  return (
    <div className="flex flex-col items-center justify-center min-h.screen">
      <h1 className="text-4xl">Perfil del usuario</h1>
      <hr />
      <pre className="my-4 overflow-auto">{JSON.stringify(user, null, 2)}</pre>

      <Button variant="destructive" onClick={logout}>
        Salir
      </Button>
    </div>
  );
}
