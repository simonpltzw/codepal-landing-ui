import {
    Card,
    CardContent
  } from "@/components/ui/card"  

import { Icons } from "@/components/icons"
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { buttonVariants } from "./ui/button";
import { Badge } from "./ui/badge";

export function FFischbachEventsProject() {
    return (
        <Card>
            <CardContent className="grid grid-cols-1 sm:grid-cols-5 p-0" style={{minHeight: 250}}>
                <div className="bg-rose-950 text-white col-span-1 sm:col-span-2 h-full p-10 rounded-tl-lg rounded-tr-lg rounded-br-none sm:rounded-tl-none sm:rounded-br-lg flex justify-center items-center order-1 sm:order-2">
                    <div className="flex items-center">
                        <Icons.next className="w-20"/>
                        <Icons.x className="mx-4"/>
                        <Icons.dotnet className="h-20 w-20" style={{margin: -10}}/>
                    </div>
                </div>
                <div className="col-span-1 sm:col-span-3 h-full p-10 flex flex-col gap-4 order-2 sm:order-1">
                    <h2 className="text-2xl font-bold">Event-Management Freiwillige Feuerwehr Fischbach</h2>
                    <div>
                        <Badge className="bg-blue-500">in progress</Badge>
                    </div>
                    <p>Diese Anwendung besteht aus drei Komponenten: Einem Formular, eingebettet auf der offiziellen Website der Feuerwehr, einer geschützten Website zur Verwaltung von Event-Teilnehmern und einer WebAPI als Datenqelle.</p>
                    <p>Das Formular ist reines HTML, die Website hingegen React in Verbindung mit next.js und die WebAPI eine dotnet 8 Anwendung.</p>
                    <div className="flex flex-wrap gap-3">
                        <Link
                            target="_blank"
                            rel="noreferrer"
                            href={siteConfig.links.project_ffischbach_events_website}
                            className={buttonVariants({ variant: "default" })}
                            >
                            <Icons.externalLink/>
                            <p className="ms-2">Zur Website</p>
                        </Link>

                        <Link
                            target="_blank"
                            rel="noreferrer"
                            href={siteConfig.links.project_ffischbach_events_api}
                            className={buttonVariants({ variant: "default" })}
                            >
                            <Icons.externalLink/>
                            <p className="ms-2">Zur WebAPI</p>
                        </Link>

                        <Link
                            target="_blank"
                            rel="noreferrer"
                            href={siteConfig.links.github_project_ffischbach_events}
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