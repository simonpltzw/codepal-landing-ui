import {
    Card,
    CardContent
  } from "@/components/ui/card"  

import { Icons } from "@/components/icons"
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { buttonVariants } from "./ui/button";
import { Badge } from "./ui/badge";

export function StringCompareApiProject() {
    return (
        <Card>
            <CardContent className="grid grid-cols-1 sm:grid-cols-5 p-0" style={{minHeight: 250}}>
                <div className="bg-purple-950 text-white col-span-1 sm:col-span-2 h-full p-10 rounded-tl-lg rounded-tr-lg rounded-br-none sm:rounded-tl-none sm:rounded-br-lg flex justify-center items-center order-1 sm:order-2">
                    <div className="flex items-center">
                        <Icons.swagger className="h-10 w-10"/>
                        <Icons.x className="mx-4"/>
                        <Icons.dotnet className="h-20 w-20" style={{margin: -10}}/>
                    </div>
                </div>
                <div className="col-span-1 sm:col-span-3 h-full p-10 flex flex-col gap-4 order-2 sm:order-1">
                    <h2 className="text-2xl font-bold">StringCompare API</h2>
                    <div>
                        <Badge variant="secondary">inactive</Badge>
                    </div>
                    <p>Diese WebAPI stellt Endpunkte bereit, mit denen sich Texte vergleichen lassen.</p>
                    <p>
                        Grund für die Entwicklung war die Abhängigkeit zu kostenfreien Online-Strinngvergleichs-Tools. Mit einem eigenen Tool kann sichergestellt werden, dass sensible Daten nicht bei Drittanbietern landen.
                        <br/>
                        Die API verwendet als Framework Microsoft.AspNetCore auf der dotnet 6 Runtime.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        {/* <Link
                            target="_blank"
                            rel="noreferrer"
                            href={siteConfig.links.project_stringcompare_api}
                            className={buttonVariants({ variant: "default" })}
                            >
                            <Icons.externalLink/>
                            <p className="ms-2">Go to project</p>
                        </Link> */}

                        <Link
                            target="_blank"
                            rel="noreferrer"
                            href={siteConfig.links.github_project_stringcompare_api}
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