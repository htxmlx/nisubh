import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Section from "@/components/common/section";

export default function Component() {
    return (
        <Section>
            <main className="flex-1">
                <section className="w-full py-6 md:py-12 lg:py-16">
                    <div className="container px-4 flex flex-col items-center justify-center gap-4 text-center md:gap-10 md:px-6">
                        <div className="space-y-3">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                Productivity at your fingertips
                            </h1>
                            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                The all-in-one app for getting things done.
                                Manage tasks, organize your day, and collaborate
                                with your team. Available on all your devices.
                            </p>
                        </div>
                        <div className="mx-auto max-w-sm space-y-4">
                            <form className="flex flex-col gap-2 sm:flex-row sm:gap-4">
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="max-w-lg flex-1"
                                />
                                <Button type="submit">Get Started</Button>
                            </form>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                Sign up to get notified when we launch.
                                <Link
                                    href="#"
                                    className="underline underline-offset-2"
                                    prefetch={false}
                                >
                                    Terms &amp; Conditions
                                </Link>
                            </p>
                        </div>
                    </div>
                </section>
                <section className="w-full py-10 lg:py-16 border-t">
                    <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
                        <div className="space-y-3">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Features
                            </h2>
                            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Here are some of the key features that make our
                                app the perfect companion for your day.
                            </p>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-start gap-10 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
                            <div className="grid gap-1">
                                <h3 className="text-xl font-bold">
                                    Intuitive Interface
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    The app&apos;s clean and user-friendly
                                    design makes it easy to navigate and use.
                                </p>
                            </div>
                            <div className="grid gap-1">
                                <h3 className="text-xl font-bold">
                                    Task Management
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Organize your tasks with to-do lists,
                                    deadlines, and priorities.
                                </p>
                            </div>
                            <div className="grid gap-1">
                                <h3 className="text-xl font-bold">
                                    Collaboration
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Share tasks and projects with your team and
                                    track progress together.
                                </p>
                            </div>
                            <div className="grid gap-1">
                                <h3 className="text-xl font-bold">
                                    Mobile Access
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Manage your tasks on the go with the mobile
                                    app, available on iOS and Android.
                                </p>
                            </div>
                            <div className="grid gap-1">
                                <h3 className="text-xl font-bold">
                                    Productivity Tools
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Access built-in tools like timers, pomodoro,
                                    and note-taking to boost your productivity.
                                </p>
                            </div>
                            <div className="grid gap-1">
                                <h3 className="text-xl font-bold">
                                    Customization
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Personalize your experience with themes,
                                    color schemes, and layout options.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Section>
    );
}
