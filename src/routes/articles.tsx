import { createFileRoute } from '@tanstack/react-router'
import ArticlesPage from "../pages/ArticlesPage.tsx";

export const Route = createFileRoute('/articles')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
      <ArticlesPage></ArticlesPage>
  </div>
}
