import Header from "@/components/header";
import Section from "@/components/ui/section";
import UnauthorizedPage from "@/components/ui/unauthorized";
import CreatePostForm from "@/features/posts/components/create-post";
import { Protect } from "@clerk/nextjs";

export default function Page() {
    return (
        <Section>
            <Header />
            {/* <Protect
                fallback={<UnauthorizedPage />}
                permission="org:listing:create"
            > */}
            <CreatePostForm />
            {/* </Protect> */}
        </Section>
    );
}
