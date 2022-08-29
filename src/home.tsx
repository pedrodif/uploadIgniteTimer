import { createContext, useContext } from 'react'

const CyclesContext = createContext({
  activeCycle: 1,
})

function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  return <h1>NewCycle form: {activeCycle}</h1>
}

function Countdown() {
  const { activeCycle } = useContext(CyclesContext)
  return <h1>Countdown: {activeCycle}</h1>
}

export function Home() {
  return (
    <div>
      <NewCycleForm />
      <Countdown />
    </div>
  )
}
