import {
    Card,
    CardContent
  } from "@/components/ui/card"  

import { Icons } from "@/components/icons"
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { buttonVariants } from "./ui/button";
import { Badge } from "./ui/badge";

export function TodoProject() {
    return (
        <Card className="py-0">
            <CardContent className="grid grid-cols-1 md:grid-cols-5 p-0" style={{minHeight: 250}}>
                <div className="bg-teal-950 text-white col-span-1 md:col-span-2 h-full p-10 rounded-tl-lg rounded-tr-lg rounded-br-none md:rounded-tl-none md:rounded-br-lg flex justify-center items-center order-1 md:order-2">
                    <div className="flex items-center">
                        <Icons.shadcn className="w-10"/>
                        <Icons.x className="mx-4"/>
                        <Icons.auth0 className="w-10"/>
                    </div>
                </div>
                <div className="col-span-1 md:col-span-3 h-full p-6 md:p-10 flex flex-col gap-4 order-2 md:order-1">
                    <h2 className="text-2xl font-bold">Todo App</h2>
                    <div>
                    <Badge className="bg-blue-600">in progress</Badge>
                    </div>
                    <p>Todo Anwendung mit handverlesenen Features, wie zum Beispiel kollaborativen Projekten und Routinen.</p>
                    <p>
                        Projektidee: Entwicklung einer größeren Anwendung mit shadcn/ui und next.js, sowie erstmalige Verwendung von Auth0 als Identity Provider.
                    </p>
                    <div className="flex flex-wrap gap-3 flex-col md:flex-row">
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
                            href={siteConfig.links.github_project_todo_ui}
                            className={buttonVariants({ variant: "outline" })}
                            >
                            <Icons.gitHub/>
                            <p className="ms-2">GitHub UI</p>
                        </Link>

                        <Link
                            target="_blank"
                            rel="noreferrer"
                            href={siteConfig.links.github_project_todo_api}
                            className={buttonVariants({ variant: "outline" })}
                            >
                            <Icons.gitHub/>
                            <p className="ms-2">GitHub API</p>
                        </Link>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}