type Api = { apiKey: string, email: string}
export function setToken(api: Api) {
  return { type: 'SET_TOKEN', payload: api }
}