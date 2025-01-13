import { ArrowUp, ExternalLink } from "lucide-react"
import { Icons } from "./icons"
import { Separator } from "./ui/separator"

export function Footer() {
  const scrollToPageTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className='dark flex w-full items-center justify-center bg-background py-10 text-foreground'>
      <div className='container relative flex w-full flex-col items-center justify-center'>
        {/* Arrow Up Button */}
        <div className='absolute -top-14 right-0 hover:animate-bounce'>
          <button
            onClick={scrollToPageTop}
            className='flex h-8 w-8 items-center justify-center rounded-full bg-primary hover:bg-primary-focus'
          >
            <ArrowUp className='h-3 w-3' />
          </button>
        </div>

        <section className='flex w-full flex-col items-center justify-between gap-8 md:flex-row'>
          <Icons.DealerIcon />
          <div className='flex items-center space-x-9'>
            <span className='font-light uppercase'>Siga-nos:</span>

            <nav className='flex items-center gap-x-2'>
              <a className='flex h-8 w-8 cursor-pointer items-center justify-center rounded-full'>
                <Icons.InstagramV2 className='h-full w-full' />
              </a>
              <a className='flex h-8 w-8 cursor-pointer items-center justify-center rounded-full'>
                <Icons.Linkedin className='h-full w-full' />
              </a>
              <a className='flex h-8 w-8 cursor-pointer items-center justify-center rounded-full'>
                <Icons.YouTube className='h-full w-full' />
              </a>
            </nav>
          </div>
        </section>

        <Separator className='my-11 opacity-60' />

        <section className='w-full space-y-4 text-left'>
          <div className='flex w-full items-center gap-4'>
            <h1 className='font-bold'>Razão Social:</h1>
            <span>AUTO FORCE PLATAFORMA DE MARKETING DIGITAL LTDA</span>
          </div>
          <div className='flex items-center gap-4'>
            <h1 className='font-bold'>CNPJ:</h1>
            <span>22.588.947/0001-06</span>
          </div>
          <div className='flex w-full flex-col items-center justify-start gap-4 md:flex-row xl:text-nowrap'>
            <h1 className='w-full font-bold md:w-fit'>Endereço Matriz:</h1>
            <span className='block'>
              Av. Prudente de Morais, 3966, Lagoa Nova. Natal/RN – CEP 59056-200
            </span>
            <div className='flex w-full items-center gap-2'>
              <a className='flex cursor-pointer items-center underline underline-offset-4'>
                Ver mapa
              </a>
              <ExternalLink className='h-3 w-3' />
            </div>
          </div>
        </section>

        <Separator className='my-11 opacity-60' />

        <section className='flex w-full flex-col items-center justify-between gap-4 md:flex-row'>
          <Icons.AutorforceLogo />
          <div className='text-center text-xs md:text-right'>
            <span>
              © Copyright 2021 - AutoForce - Todos os direitos reservados
            </span>
            <br />
            <span>Confira nossa </span>
            <a className='cursor-pointer underline underline-offset-2'>
              Política de privacidade.
            </a>
          </div>
        </section>
      </div>
    </footer>
  )
}
