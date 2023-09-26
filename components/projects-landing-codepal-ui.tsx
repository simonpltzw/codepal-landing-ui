import {
    Card,
    CardContent
  } from "@/components/ui/card"  

import { Icons } from "@/components/icons"
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { buttonVariants } from "./ui/button";

export function LandingCodepalUiProject() {
    return (
        <Card>
            <CardContent className="grid grid-cols-1 sm:grid-cols-5 p-0" style={{minHeight: 250}}>
                <div className="bg-sky-800 text-white col-span-1 sm:col-span-2 h-full p-10 rounded-tl-lg rounded-tr-lg rounded-bl-none sm:rounded-tr-none sm:rounded-bl-lg flex justify-center items-center">
                    <div className="flex items-center">
                        <Icons.react className="h-10 w-10"/>
                        <Icons.x className="mx-4"/>
                        <Icons.shadcn className="h-10 w-10"/>
                    </div>
                </div>
                <div className="col-span-1 sm:col-span-3 h-full p-10 flex flex-col gap-4">
                    <h2 className="text-2xl font-bold">Landing UI</h2>
                    <p>The landing page you are currently on.</p>
                    <p>The page is written in typescript using React and the shadcn-ui component library. It was initially started due to a lack of knowledge in the React library and the discovery of shadcn.</p>
                    <div className="flex flex-wrap gap-3">
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