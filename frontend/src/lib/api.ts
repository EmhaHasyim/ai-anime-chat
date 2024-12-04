import {AppType} from '../../../server'
import {hc} from 'hono/client'

const client = hc<AppType>('http://localhost:5173')

const api = client.api

export default api