import { Cpu, Zap } from 'lucide-react'

export default function ContentSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">Technology to Fit Your Business Growth</h2>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div className="relative space-y-4">
                        <p className="text-muted-foreground">
                        No Matter Your Size - Startup or Enterprise - We Empower Your Business to Thrive in a Rapidly Evolving Digital World. Our adaptive approach ensures your business stays ahead by embracing the latest tools, methodologies, and innovations for forward-thinking, scalable solutions. 
                        </p>
                        

                        <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Zap className="size-4" />
                                    <h3 className="text-sm font-medium">For Every Business Size</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">From Startups to Enterprises, Our Flexible Tech Solutions Scale with Your Business</p>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Cpu className="size-4" />
                                    <h3 className="text-sm font-medium">Evolving with Trends</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">Adopting the latest tools and innovations to keep your business ahead.</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative mt-6 sm:mt-0">
                        <div className="bg-linear-to-b aspect-67/34 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                            <img src="aezire-web/images/content1.png" className="hidden rounded-[15px] dark:block" alt="payments illustration dark" width={1206} height={612} />
                            <img src="aezire-web/images/content1.png" className="rounded-[15px] shadow dark:hidden" alt="payments illustration light" width={1206} height={612} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
