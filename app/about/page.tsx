import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"  

import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import Link from "next/link"

export default function AboutPage() {
    return (
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
            <h1 className="text-3xl font-extrabold md:text-4xl">
                About CodePal Dashboard
            </h1>

            <p className="text-lg">This App serves as a Launchpad for different projects on the <Link href="codepal.online" className="underline">codepal.online</Link> domain.</p>

            <p>The Website is running on <span className="font-bold" translate="no">React</span> using the <span className="font-bold">shadcn-ui</span> framework and <span className="font-bold">Lucide</span> Icons.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle><div className="flex gap-3" translate="no"><Icons.react/> React</div></CardTitle>
                        <CardDescription>User interface library</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Link
                            target="_blank"
                            rel="noreferrer"
                            href={siteConfig.links.react}
                            className={buttonVariants({ variant: "default" })}
                            >
                            <Icons.externalLink/>
                            <p className="ms-2">Website</p>
                        </Link>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle><div className="flex gap-3" translate="no"><Icons.shadcn/> shadcn-ui</div></CardTitle>
                        <CardDescription>UI component library</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-3">
                        <Link
                            target="_blank"
                            rel="noreferrer"
                            href={siteConfig.links.shadcn}
                            className={buttonVariants({ variant: "default" })}
                            >
                            <Icons.externalLink/>
                            <p className="ms-2">Website</p>
                        </Link>

                        <Link
                            target="_blank"
                            rel="noreferrer"
                            href={siteConfig.links.github_shadcn}
                            className={buttonVariants({ variant: "outline" })}
                            >
                            <Icons.gitHub/>
                            <p className="ms-2">GitHub</p>
                        </Link>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle><div className="flex gap-3" translate="no"><Icons.lucide/> Lucide</div></CardTitle>
                        <CardDescription>Icon library</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-3">
                        <Link
                            target="_blank"
                            rel="noreferrer"
                            href={siteConfig.links.lucide}
                            className={buttonVariants({ variant: "default" })}
                            >
                            <Icons.externalLink/>
                            <p className="ms-2">Website</p>
                        </Link>

                        <Link
                            target="_blank"
                            rel="noreferrer"
                            href={siteConfig.links.github_lucide}
                            className={buttonVariants({ variant: "outline" })}
                            >
                            <Icons.gitHub/>
                            <p className="ms-2">GitHub</p>
                        </Link>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle><div className="flex gap-3" translate="no"><Icons.undraw/> unDraw</div></CardTitle>
                        <CardDescription>Open source illustration library</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Link
                            target="_blank"
                            rel="noreferrer"
                            href={siteConfig.links.unDraw}
                            className={buttonVariants({ variant: "default" })}
                            >
                            <Icons.externalLink/>
                            <p className="ms-2">Website</p>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}