import Link from "next/link"

import {
    Alert,
    AlertDescription,
    AlertTitle,
  } from "@/components/ui/alert"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { StringCompareApiProject } from "@/components/projects-stringcompare-api"
import { LandingCodepalUiProject } from "@/components/projects-landing-codepal-ui"
import { FFischbachEventsProject } from "@/components/projects-ffischbach-events"
import { FischbachEventsRustProject } from "@/components/projects-ffischbach-events-rust"

export default function IndexPage() {
    return (
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">

            <div className="grid grid-cols-1 sm:grid-cols-2 md:p-10 gap-10">
                <div className="flex">
                    <div className="my-auto">
                        <h1 className="text-3xl font-extrabold md:text-4xl mb-5">
                            Willkommen auf <span className="text-primary">{siteConfig.domain}</span>
                        </h1>

                        <h4 className="text-lg font-bold mb-3">Private Projekte und kreative Lösungen.</h4>
                        <p>
                            Hier werden private Projekte in den Bereichen Technologie, Design und Innovation verwirklicht. Die Plattform dient als Entwicklungsraum für Experimente, Prototypen und spannende neue Ansätze, die aus Leidenschaft für Fortschritt und Kreativität entstehen.
                        </p>

                        <Link
                            target="_blank"
                            rel="noreferrer"
                            href={siteConfig.links.github}
                            className={cn(buttonVariants({ variant: "default" }), "mt-4")}
                            >
                            <Icons.gitHub/>
                            <p className="ms-2">GitHub</p>
                        </Link>

                        <Link
                            href={ "mailto:" + siteConfig.mail }
                            className={cn(buttonVariants({ variant: "outline", size: "icon" }), "mt-4", "ml-2")}
                            >
                            <Icons.mail/>
                        </Link>
                    </div>
                </div>

                <div className="flex my-5 sm:my-0 mx-auto">
                    <div className="my-auto">
                        <Image src="undraw_product_tour_re_8bai.svg" height={0} width={0} style={{width: 500, height: "auto"}} alt="Product Tour"/>
                    </div>
                </div>
            </div>

            <hr/>

            <h2 className="text-2xl font-extrabold md:text-3xl my-10">Projekte</h2>

            <div className="flex flex-col gap-10">
                <FFischbachEventsProject/>
                <FischbachEventsRustProject/>
                <LandingCodepalUiProject/>
                <StringCompareApiProject/>

                <Alert>
                    <Icons.rocket className="h-4 w-4" />
                    <AlertTitle>Mehr ist auf dem Weg!</AlertTitle>
                    <AlertDescription>
                        Neue innovative Projekte werden bald veröffentlicht.
                    </AlertDescription>
                </Alert>
            </div>

            {/* For drawer see https://github.com/emilkowalski/vaul */}
        </section>
    )
}
