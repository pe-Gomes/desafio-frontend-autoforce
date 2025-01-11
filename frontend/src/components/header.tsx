import { Icons } from "./icons"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"

export function Header() {
  return (
    <header className='flex w-full items-center justify-center bg-card py-6 text-card-foreground drop-shadow-md'>
      <div className='flex w-full items-center justify-center xl:max-w-4xl xl:justify-between 2xl:max-w-5xl'>
        <div className='flex items-center gap-x-6'>
          <Icons.DealerIcon className='h-8 w-40' />
          <Separator orientation='vertical' className='h-8' />
          <Icons.BMW className='h-12 w-12' />
        </div>

        <div className='hidden space-x-7 xl:block'>
          <Button className='uppercase'>
            <Icons.Phone className='h-3 w-3' />
            Ligue agora
          </Button>

          <Button variant='whatsApp' className='text-sm font-bold uppercase'>
            <Icons.WhatsApp className='h-3 w-3' />
            WhatsApp
          </Button>
        </div>
      </div>
    </header>
  )
}
