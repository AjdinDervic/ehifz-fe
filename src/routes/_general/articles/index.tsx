import { createFileRoute } from '@tanstack/react-router'
import Articles from "../../../components/Articles.tsx";

export const Route = createFileRoute('/_general/articles/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <div>
        <Articles/>
    </div>
}
