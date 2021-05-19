import React from 'react'
import { useQuery } from 'react-query'

import getSWCharacter from 'lib/getSWCharacter'

export default function SWComponent({ stepNumber }) {
  const { isLoading, isError, data, error } = useQuery(
    ['character', stepNumber],
    () => getSWCharacter(stepNumber),
  )
  console.log({ isLoading, isError, data, error })

  // React.useEffect(() => {
  //   getSWCharacter(stepNumber)
  // }, [stepNumber])

  if (isLoading) {
    return <div>Feel the force...</div>
  }

  if (isError) {
    return (
      <div>
        {error.message} {error.status}
      </div>
    )
  }

  console.log(data)
  return <div>{data.name}</div>
}
