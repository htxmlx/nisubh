import Section from "@/components/common/section";

export default function Offline() {
    return (
        <Section>
            <div className="flex flex-col justify-center items-center h-screen bg-gray-100 text-center">
                <h1 className="text-3xl font-bold text-red-600">
                    You Are Offline
                </h1>
                <p className="mt-4 text-lg text-gray-700">
                    Please connect to Wi-Fi to continue.
                </p>
            </div>
        </Section>
    );
}
