import { createFileRoute } from '@tanstack/react-router'
import ArticlePageDetails from "../../components/ArticlePageDetails.tsx";

export const Route = createFileRoute('/articles/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <ArticlePageDetails></ArticlePageDetails>
  </div>
}
