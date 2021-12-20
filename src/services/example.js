import api from 'services/api'

export async function postRequest(payload) {
  try {
    const response = await api.post(`/post`, payload)

    return response.data
  } catch (error) {
    throw new Error(`postRequest/error=${error}`)
  }
}

export async function getRequest() {
  try {
    const response = await api.get(`/get`)

    return response.data
  } catch (error) {
    throw new Error(`getRequest/error=${error}`)
  }
}
