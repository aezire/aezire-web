import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Brain, ChartNoAxesCombined, CodeXml, Globe, ShieldUser, TabletSmartphone, } from 'lucide-react'
import { ReactNode } from 'react'

export default function Features() {
    return (
        <section id="services" className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Empower Your Business with Our Services</h2>
                    <p className="mt-4">A range of services tailored to your business needs.</p>
                </div>
                <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16">
                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <CodeXml className="size-10" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-3 font-bold text-xl">Software Development</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm">Custom software development services, creating scalable, efficient solutions for your needs, leveraging the latest technologies to drive business growth</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Brain className="size-10" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-3 font-bold text-xl">AI/ML Solutions</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm">Artificial Intelligence and Machine Learning solutions that harness data to drive innovation, helping businesses stay ahead in a competitive landscape.</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <ChartNoAxesCombined className="size-10" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-3 font-bold text-xl">Analytics & Data Science</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm">Our analytics services turn complex data into actionable insights, helping businesses make informed decisions and optimize operations.</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <ShieldUser className="size-10" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-3 font-bold text-xl">Project Management</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm">Our End-to-End Project Delivery ensures successful delivery of projects on time and within budget, using industrial standards and methodologies.</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Globe className="size-10" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-3 font-bold text-xl">Web Development</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm">Our web development services ensure your site is not only visually appealing but also optimized for performance, scalability, and user engagement.</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <TabletSmartphone className="size-10" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-3 font-bold text-xl">App Development</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm">Intuitive apps that connect you with customers on the go. We develop cross-platform apps for iOS and Android, for a consistent experience.</p>
                        </CardContent>
                    </Card>
                    
                </div>
            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
        <div aria-hidden className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div aria-hidden className="bg-radial to-background absolute inset-0 from-transparent to-75%" />
        <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">{children}</div>
    </div>
)
