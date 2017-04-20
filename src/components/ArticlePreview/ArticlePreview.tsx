import * as React from 'react';
import {IArticle} from '../../articles';
import {Link} from 'react-router-dom';

interface IArticlePreviewProps {
    article: IArticle
}

export default class ArticlePreview extends React.Component<IArticlePreviewProps, {}> {

    constructor(props) {
        super(props)
    }

    public render() {

        const { article } = this.props;;

        return (
            <div className="article-preview">
                <Link to={`/article/${article.id}`}>
                    <h2 className="article-preview__title">{article.title}</h2>
                    <img className="article-preview__image" src={article.cover} />
                </Link>
            </div>
        );
    }

}