import {useState} from "react";
import {Button} from "@/components/ui/button"
import {AppType} from "../../Server";
import {hc} from 'hono/client'

const client = hc<AppType>('/')

const App = () => {

    const [data, setData] = useState('')

    const fetchTest = async () => {
        const res = await client.api.$get()
        const data = await res.text()
        console.info(data)
        setData(data)
    }

    return (
        <>
            <main className='flex flex-col items-center justify-center gap-2.5 m-5'>
                <h1 className="text-5xl">Ai Chat Anime</h1>
                <h2>Bun🍥 + Hono🔥 + React⚛️</h2>
                <section className="flex flex-col items-center justify-center gap-2">
                    <Button onClick={() => fetchTest()} className="text-2xl py-2">Click</Button>
                    <div>
                        <p>{data}</p>
                    </div>
                </section>
            </main>
        </>
    )
}

export default App
