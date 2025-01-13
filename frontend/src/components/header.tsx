import { useOneCompany } from "@/hooks/use-company"
import { Icons } from "./icons"
import { Button, buttonVariants } from "./ui/button"
import { Separator } from "./ui/separator"
import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { DialogDescription } from "@radix-ui/react-dialog"
import { formatPhoneNumber } from "@/lib/format-phone-number"

export function Header() {
  const { company, isLoading } = useOneCompany("1")

  return (
    <header className='flex w-full items-center justify-center bg-card py-6 text-card-foreground drop-shadow-md'>
      <div className='container flex w-full items-center justify-center xl:justify-between'>
        <div className='flex items-center gap-x-6'>
          <Icons.DealerIcon className='h-8 w-40' />
          <Separator orientation='vertical' className='h-8' />
          <Icons.BMW className='h-12 w-12' />
        </div>

        <div className='hidden space-x-7 xl:block'>
          <Dialog>
            <DialogTrigger asChild disabled={isLoading || !company}>
              <Button className='uppercase'>
                <Icons.Phone className='h-3 w-3' />
                Ligue agora
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  Ligue para{" "}
                  <a
                    className='text-primary underline underline-offset-4'
                    href={`tel:${company!.phone}`}
                  >
                    {formatPhoneNumber(company!.phone)}
                  </a>
                </DialogTitle>
                <DialogDescription>
                  E fale com um de nossos atendentes agora mesmo!
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <a
            href={
              !isLoading || company
                ? `https://wa.me/+55${company?.whatsapp}`
                : "#"
            }
            target='_blank'
            className={cn(
              buttonVariants({ variant: "whatsApp" }),
              "text-sm font-bold uppercase",
            )}
          >
            <Icons.WhatsApp className='h-3 w-3' />
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}
