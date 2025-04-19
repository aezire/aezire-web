import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ChartNoAxesGantt } from 'lucide-react'

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-16 md:py-16">
            <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-4xl font-medium lg:text-5xl">Loved by small businesses</h2>
                    <p>Empowering Growth with Tailored, Affordable Tech Solutions for Every Business</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
                    <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2">
                        <CardHeader>
                            <ChartNoAxesGantt className="mt-5" />
                        </CardHeader>
                        <CardContent>
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-3">
                                <p className="text-xl font-medium">“Working with the Aezire team on the <span className="text-accent-foreground font-bold">Rent Collection app</span> was a great experience. They quickly understood our needs and delivered a custom solution at an affordable price. The process was smooth, with excellent communication throughout. The app has made <span className="text-accent-foreground font-bold">managing payments</span> so much easier, and the value we received far exceeded expectations. I am very pleased with both the product and the professional, <span className="text-accent-foreground font-bold">budget-friendly</span> service from Aezire.”</p>

                                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                    <Avatar className="size-12">
                                        <AvatarImage src="https://tailus.io/images/reviews/shekinah.webp" alt="Shekinah Tshiokufila" height="400" width="400" loading="lazy" />
                                        <AvatarFallback>MT</AvatarFallback>
                                    </Avatar>

                                    <div>
                                        <cite className="text-sm font-medium">Mark Thompson</cite>
                                        <span className="text-muted-foreground block text-sm">Property Manager, Greenfield LLC</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card className="md:col-span-2">
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p className="text-xl font-medium">"The Aezire team built us an <span className="text-accent-foreground font-bold">Online Ordering system</span>, and it has been a game-changer! The process is so much smoother for both us and our customers."</p>

                                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                    <Avatar className="size-12">
                                        <AvatarImage src="https://tailus.io/images/reviews/jonathan.webp" alt="Jonathan Yombo" height="400" width="400" loading="lazy" />
                                        <AvatarFallback>JA</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <cite className="text-sm font-medium">Juan Ange</cite>
                                        <span className="text-muted-foreground block text-sm">Owner, Ange&apos;s Pizza</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p>"My new online app has made <span className="text-accent-foreground font-bold">managing appointments</span> so much easier. Our clients love <span className="text-accent-foreground font-bold">booking online</span>"</p>

                                <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                                    <Avatar className="size-12">
                                        <AvatarImage src="https://tailus.io/images/reviews/yucel.webp" alt="Yucel Faruksahan" height="400" width="400" loading="lazy" />
                                        <AvatarFallback>JM</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <cite className="text-sm font-medium">Jake Miller</cite>
                                        <span className="text-muted-foreground block text-sm">Owner, Fade Zone Barber Shop</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card className="card variant-mixed">
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p>"Our new <span className="text-accent-foreground font-bold">Law Firm Website</span> is exactly what we needed — <span className="text-accent-foreground font-bold">professional</span> and easy to navigate. We&apos;re very happy with the results!"</p>

                                <div className="grid grid-cols-[auto_1fr] gap-3">
                                    <Avatar className="size-12">
                                        <AvatarImage src="https://tailus.io/images/reviews/rodrigo.webp" alt="Rodrigo Aguilar" height="400" width="400" loading="lazy" />
                                        <AvatarFallback>IR</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="text-sm font-medium">Ivaana Roni</p>
                                        <span className="text-muted-foreground block text-sm">Managing Partner, Roni Law PLLC</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
