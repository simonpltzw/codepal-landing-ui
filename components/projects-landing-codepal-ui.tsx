import {
    Card,
    CardContent
  } from "@/components/ui/card"  

import { Icons } from "@/components/icons"
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { buttonVariants } from "./ui/button";
import { Badge } from "./ui/badge";

export function LandingCodepalUiProject() {
    return (
        <Card className="py-0">
            <CardContent className="grid grid-cols-1 md:grid-cols-5 p-0" style={{minHeight: 250}}>
                <div className="bg-sky-950 text-white col-span-1 md:col-span-2 h-full p-10 rounded-tl-lg rounded-tr-lg rounded-bl-none md:rounded-tr-none md:rounded-bl-lg flex justify-center items-center">
                    <div className="flex items-center">
                        <Icons.react className="h-10 w-10"/>
                        <Icons.x className="mx-4"/>
                        <Icons.shadcn className="h-10 w-10"/>
                    </div>
                </div>
                <div className="col-span-1 md:col-span-3 h-full p-6 md:p-10 flex flex-col gap-4">
                    <h2 className="text-2xl font-bold">Landing UI</h2>
                    <div>
                        <Badge className="bg-green-600">live</Badge>
                    </div>
                    <p>Die Seite auf der du dich momentan befindest.</p>
                    <p>Sie ist ein erster Versuch der Entwicklung von Websites mit React, sowie next.js und shadcn-ui. Ziel des Projekts war die Bereitstellung einer Landing Page, sowie das Erlernen der verschiedenen Frameworks.</p>
                    <div className="flex flex-wrap gap-3 flex-col md:flex-row">
                        <Link
                            target="_blank"
                            rel="noreferrer"
                            href={siteConfig.links.github_project_landing_ui}
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