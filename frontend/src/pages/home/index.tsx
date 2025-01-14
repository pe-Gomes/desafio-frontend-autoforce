import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { CarDetails } from "./components/car-details"
import { CarVideo } from "./components/car-video"
import { Skeleton } from "@/components/ui/skeleton"
import { useVehicle } from "@/hooks/use-vehicle"
import { useEffect } from "react"
import { toast } from "@/hooks/use-toast"

export function Home() {
  const { vehicle, isLoading, isError } = useVehicle("1")

  if (isError) {
    toast({
      title: "Erro",
      description: "Houve um problema ao carregar, tente novamente.",
      variant: "destructive",
    })
  }

  useEffect(() => {
    if (vehicle) {
      document.title = `${vehicle.name} | Dealer BMW`
    }
  }, [vehicle])

  return (
    <div className='container flex w-full flex-col items-center justify-center pt-6'>
      <div className='flex w-full flex-col items-start justify-center py-4'>
        {/* Breadcrumb Mock */}
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href='#'>Ofertas</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem className='underline'>Novo Série 4</BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {isLoading && <Skeleton className='mt-4 h-6 w-10' />}
        <h1 className='mt-4 text-2xl font-bold'>{vehicle?.name}</h1>
      </div>
      <section className='flex w-full flex-col items-center'>
        <div className='w-full space-y-4 py-4'>
          <h2 className='text-muted-medium'>
            Descubra o {vehicle?.name} <br /> Cliente On-line tem Condições
            Especiais e aqui na Dealer BMW!
          </h2>

          {/* Price */}
          <div className='flex items-center gap-x-2'>
            <Separator orientation='vertical' className='h-8 w-1 bg-muted' />

            {isLoading || !vehicle ? (
              <Skeleton className='h-8 w-40' />
            ) : (
              <h3 className='text-3xl'>
                A partir de{" "}
                <b>
                  {Intl.NumberFormat("pt-BR", {
                    currency: "BRL",
                    style: "currency",
                    maximumFractionDigits: 0,
                  }).format(vehicle.price)}
                </b>
              </h3>
            )}
          </div>

          <section className='space-y-8'>
            <CarDetails />
          </section>
        </div>

        <Separator />
      </section>

      <section className='container grid grid-cols-1 gap-4 bg-background pt-8 md:grid-cols-2'>
        <h1 className='text-3xl font-bold md:w-3/5'>
          A vida é melhor quando compartilhada.
          <br />
          {vehicle?.name}
        </h1>
        <h2 className='text-base leading-relaxed'>
          A performance irradia de cada ângulo do design inovador do BMW Série 4
          Cabrio. Começando pela dianteira, que conta com para-choque clássico
          dos modelos BMW. Ao correr os olhos pelo design, nota-se imediatamente
          o teto inclinado e a linha do ombro marcante, que equilibra o centro
          de gravidade do carro. Voltando-se para as laterais, são os robustos
          arcos de 10 mm e as incomuns rodas de 21 polegadas que chamam a
          atenção. Ao chegar na traseira do BMW Série 4 Cabrio, a força do
          design continua surpreendendo. O para-choque com difusão clássica dos
          modelos BMW, as lâminas horizontais e teto com spoiler ganham um toque
          a mais de amplitude devido ao vidro traseiro levemente rebaixado.
        </h2>
      </section>

      <Separator className='mt-8 bg-muted' />

      <section className='w-full py-10'>
        <CarVideo />
      </section>

      <Separator className='w-full bg-muted' />

      <section className='py-10 text-sm'>
        <h1 className='font-bold'>Texto legal:</h1>
        <p>{vehicle?.legal_text} </p>
      </section>
    </div>
  )
}
