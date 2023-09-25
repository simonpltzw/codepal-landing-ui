"use client"

import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"

import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export function CommandSearchDialog() {
    return (
        <Dialog>
            <DialogTrigger>
            <Button
                variant="ghost"
                size="icon"
                >
                
                <Icons.search/>
                <span className="sr-only">Open the command search dialog</span>
            </Button>
            </DialogTrigger>
            <DialogContent className="p-0">
                <Command>
                    <CommandInput placeholder="Type a command or search..." />
                    <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandItem disabled className="p-7">Nothing to see here yet.</CommandItem>
                        {/* <CommandGroup heading="Suggestions">
                            <CommandItem>Calendar</CommandItem>
                            <CommandItem>Search Emoji</CommandItem>
                            <CommandItem>Calculator</CommandItem>
                        </CommandGroup>
                        <CommandSeparator />
                        <CommandGroup heading="Settings">
                            <CommandItem>Profile</CommandItem>
                            <CommandItem>Billing</CommandItem>
                            <CommandItem>Settings</CommandItem>
                        </CommandGroup> */}
                    </CommandList>
                </Command>
            </DialogContent>
        </Dialog>
    )
}