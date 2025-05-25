import { useEffect, useState } from "react";
import api from "../api/axios";
import ArticleCard from "../components/ArticleCard.tsx";

const ARTICLES_PER_PAGE = 12;

export type Article = {
    id: number;
    title: string;
    author: string;
    content: string;
    imageURL: string;
    createdAt: string;
};

const Articles: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const res = await api.get<Article[]>("/api/articles");
                setArticles(res.data);
            } catch (error) {
                console.error("Error fetching articles:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);

    const totalPages = Math.ceil(articles.length / ARTICLES_PER_PAGE);
    const paginatedArticles = articles.slice(
        (currentPage - 1) * ARTICLES_PER_PAGE,
        currentPage * ARTICLES_PER_PAGE
    );

    if (loading) {
        return <div className="text-center py-20">Loading articles...</div>;
    }

    return (
        <div className="min-h-screen bg-background text-primary px-4 py-16">
            <h1 className="text-4xl font-bold text-center mb-12">All Articles</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {paginatedArticles.map((article) => (
                    <ArticleCard
                        key={article.id}
                        id={article.id}
                        title={article.title}
                        description={article.content} // mapping backend 'content' as description
                        image={article.imageURL}
                        author={article.author}
                        //onClick={() => console.log(`Clicked article ${article.id}`)}
                    />
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12 gap-4">
                <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
                >
                    Prethodna
                </button>
                <span className="text-primary font-semibold">
          Stranica {currentPage} of {totalPages}
        </span>
                <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
                >
                    Sljedeća
                </button>
            </div>
        </div>
    );
};

export default Articles;
