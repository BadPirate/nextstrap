import { useSession } from 'next-auth/react'

function useUserId() {
  return useSession().data!.user!.id
}

export default useUserId
