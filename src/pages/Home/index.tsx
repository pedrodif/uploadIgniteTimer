// Packages
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

// Components
import { HandPalm, Play } from 'phosphor-react'
import { NewCycleForm } from './components/NewCycleForm'
import { Countdown } from './components/Countdown'

// Styles
import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './styles'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a Tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'O ciclo precisa ser de no mínimo 5 minutos')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos'),
})

// Criando uma tipagem a partir do validation schema, que seria equivalente ao uso da interface comentada acima:
type INewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const newCycleForm = useForm<INewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { register, handleSubmit, watch, formState, reset } = newCycleForm

  // Configurando o timer

  // Maneira de verificar os erros no console a partir de uma função interna do react-hook-form, que foi resgatada (devolvida) através da desestruturação -> console.log(formState.errors)

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <StopCountdownButton onClick={handleInterruptCycle} type="button">
            <HandPalm size={24} />
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}
