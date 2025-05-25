import { Route } from '../routes/articles/$id';
import { useNavigate } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import api from '../api/axios';

type Article = {
    id: number;
    title: string;
    author: string;
    content: string;
    imageURL: string;
    createdAt: string;
};

const ArticleDetails = () => {
    const { id } = Route.useParams();
    const navigate = useNavigate();
    const [article, setArticle] = useState<Article | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        api.get(`/api/articles/${id}`)
            .then((res) => setArticle(res.data))
            .catch(() => navigate({ to: '/articles' }))
            .finally(() => setLoading(false));
    }, [id, navigate]); // ✅ include both id and navigate

    if (loading) return <div>Loading article...</div>;
    if (!article) return <div>Article not found.</div>;


    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
            <p className="italic text-gray-600 mb-2">
                By {article.author} on {new Date(article.createdAt).toLocaleDateString()}
            </p>
            <img src={article.imageURL} alt={article.title} className="w-full h-64 object-cover rounded mb-6" />
            <p className="text-lg text-gray-800">{article.content}</p>
        </div>
    );
};

export default ArticleDetails;
