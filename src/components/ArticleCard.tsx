import {useNavigate} from "@tanstack/react-router";

interface ArticleCardProps {
    title: string;
    description: string;
    image: string;
    author: string;
    id: number;
    //onClick?: () => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
                                                     title,
                                                     description,
                                                     image,
                                                    id,
                                                   //  onClick,
                                                     author,
                                                 }) => {

    const navigate = useNavigate();
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
            {/* Fixed height image */}
            <div className="h-48 w-full">
                <img src={image} alt={title} className="w-full h-full object-cover" />
            </div>

            <div className="flex flex-col flex-grow justify-between p-6">
                <div>
                    <h2 className="text-xl font-semibold mb-1">{title}</h2>
                    <hr className="border-t border-gray-200 my-2" />
                    <p className="text-sm text-gray-500 italic mb-2">Piše: {author}</p>
                    <p className="text-gray-600 mb-4 min-h-[60px] line-clamp-3">
                        {description}
                    </p>
                </div>

                {/* Centered button */}
                <div className="flex justify-center mt-auto">
                    <button
                        onClick={() => navigate({ to: '/articles/$id', params: { id: String(id) } })
                        }
                        className="bg-green-800 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                    >
                        Read More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ArticleCard;
