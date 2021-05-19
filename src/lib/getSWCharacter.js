function SWException(params) {}
export default async function swQuery(characterId) {
  const response = await fetch(`https://swapi.dev/api/people/${characterId}/`)
  if (!response.ok) {
    // throw new Error({
    //   message: 'error fetching character',
    //   status: response.status,
    //   text: response.statusText,
    // })
    // throw new Error(`
    //   message: 'error fetching character',
    //   status: ${response.status},
    //   text: ${response.statusText},
    // `)
    throw {
      message: 'error fetching character',
      status: response.status,
      text: response.statusText,
    }
    // return 'OOPS'
  }
  return response.json()
}
