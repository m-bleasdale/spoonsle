"use client"

import * as React from "react"
import { Check, Search } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Pub } from "@/types/pub"

export function GameInput({pubs, onGuess} : {pubs: Pub[], onGuess : any}) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

    const options = pubs.map(pub => ({
        value: `${pub.name}, ${pub.area}, ${pub.city}`,
        label: `${pub.name}, ${pub.area}, ${pub.city}`
    }));

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-80 md:w-110 h-14 justify-between hover:cursor-pointer text-md"
        >
          {value
            ? options.find((options) => options.value === value)?.label
            : "Take a guess..."}
          <Search className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 md:w-110 p-0">
        <Command>
          <CommandInput placeholder="Take a guess..." className="h-9 text-md" />
          <CommandList>
            <CommandEmpty>No pubs found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={(currentValue) => {
                    onGuess(currentValue);
                    setOpen(false)
                  }}
                  className="text-lg"
                >
                  {option.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === option.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
