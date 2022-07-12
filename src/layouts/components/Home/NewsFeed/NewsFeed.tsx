interface NewsFeedProps {
    className?: string;
}
function NewsFeed({ className }: NewsFeedProps) {
    return (
        <div className={className}>
            <div className="w-120 m-auto">NewsFeed</div>
        </div>
    );
}

export default NewsFeed;
