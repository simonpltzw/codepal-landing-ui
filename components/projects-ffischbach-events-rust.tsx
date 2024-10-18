import {
    Card,
    CardContent
  } from "@/components/ui/card"  

import { Icons } from "@/components/icons"
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { buttonVariants } from "./ui/button";
import { Badge } from "./ui/badge";

export function FischbachEventsRustProject() {
    return (
        <Card>
            <CardContent className="grid grid-cols-1 sm:grid-cols-5 p-0" style={{minHeight: 250}}>
                <div className="bg-amber-900 text-white col-span-1 sm:col-span-2 h-full p-10 rounded-tl-lg rounded-tr-lg rounded-bl-none sm:rounded-tr-none sm:rounded-bl-lg flex justify-center items-center order-1 sm:order-2">
                    <div className="flex items-center">
                        <Icons.rust className="h-20 w-20"/>
                    </div>
                </div>
                <div className="col-span-1 sm:col-span-3 h-full p-10 flex flex-col gap-4 order-2 sm:order-1">
                    <h2 className="text-2xl font-bold">Event-Management API (Rust)</h2>
                    <div>
                        <Badge className="bg-blue-500">in progress</Badge>
                    </div>
                    <p>Implementierung der Event-Management API im Projekt der Freiwilligen Feuerwehr Fischbach in Rust.</p>
                    <p>Ziel des Projekts ist das Erlernen von Rust und das Erstellen einer Lösung mit der bestmöglichen Performance. Daher wird auf ein Framework gesetzt, das in den letzten Benchmark Tests den höchste Score erreichte.</p>
                    <div className="flex flex-wrap gap-3">
                        <Link
                            target="_blank"
                            rel="noreferrer"
                            href={siteConfig.links.github_project_ffischbach_events_rust}
                            className={buttonVariants({ variant: "outline" })}
                            >
                            <Icons.gitHub/>
                            <p className="ms-2">GitHub</p>
                        </Link>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}