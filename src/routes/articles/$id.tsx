import { createFileRoute } from '@tanstack/react-router'
import ArticleDetails from "../../components/ArticleDetails.tsx";

export const Route = createFileRoute('/articles/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <ArticleDetails/>
  </div>
}
