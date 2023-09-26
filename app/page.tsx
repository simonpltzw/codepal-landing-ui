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

export default function IndexPage() {
    return (
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">

            <div className="grid grid-cols-1 sm:grid-cols-2 md:p-10 gap-10">
                <div className="flex">
                    <div className="my-auto">
                        <h1 className="text-3xl font-extrabold md:text-4xl mb-5">
                            Welcome to CodePal
                        </h1>

                        <h4 className="text-lg font-bold mb-3">Step into a realm of creativity and innovation!</h4>
                        <p>
                            {/* Explore my portfolio of groundbreaking projects, where ideas take shape. Navigate through a range of creative solutions and embark on a path of exploration. */}
                            Explore my portfolio showcasing a collection of inspiring projects that bring ideas to life. From behind-the-scenes magic to digital delights, get ready to embark on a visual journey through the power of code.
                        </p>

                        <Link
                            target="_blank"
                            rel="noreferrer"
                            href={siteConfig.links.github}
                            className={cn(buttonVariants({ variant: "default" }), "mt-4")}
                            >
                            <Icons.gitHub/>
                            <p className="ms-2">Visit me on GitHub</p>
                        </Link>
                    </div>
                </div>

                <div className="flex my-5 sm:my-0 mx-auto">
                    <div className="my-auto">
                        <Image src="undraw_product_tour_re_8bai.svg" height={0} width={0} style={{width: 500, height: "auto"}} alt="Product Tour"/>
                    </div>
                </div>
            </div>

            <h2 className="text-2xl font-extrabold md:text-3xl">Projects</h2>


            {/* <Alert>
                <Icons.rocket className="h-4 w-4" />
                <AlertTitle>Please be patient</AlertTitle>
                <AlertDescription>
                    New inspiring projects will be arriving soon.
                </AlertDescription>
            </Alert> */}

            <div className="flex flex-col gap-10">
                <LandingCodepalUiProject/>
                <StringCompareApiProject/>
            </div>

            {/* For drawer see https://github.com/emilkowalski/vaul */}
        </section>
    )
}
