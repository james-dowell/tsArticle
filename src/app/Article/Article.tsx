import * as React from 'react';
import {IArticle, IArticleBody, ARTICLES} from '../../articles';
import Pullquote from '../../components/Pullquote/Pullquote';
import Text from '../../components/Text/Text';

interface IArticleProps {
    match: {
        params: {
            articleId: string;
        }
    }
}

export default class Article extends React.Component<IArticleProps, any> {

    constructor(props) {
        super(props)
    }

    private getBodyComponent(body: IArticleBody, index: number): JSX.Element {
        switch(body.type) {
            case 'pull_quote':
                return <Pullquote key={index} content={body.body} />;
            case 'plaintext':
                return <Text key={index} content={body.body} />;
            case 'h2':
                return (<h2 key={index} className="heading">{body.body}</h2>);
            defualt:
                throw new Error('Unknow article body type');
        }
    }

    public render() {
        const { match } = this.props;

        let [article] = ARTICLES.filter(a => a.id === parseInt(match.params.articleId, 10));

        return (
            <div className="article">
                <h1 className="article__title">{article.title}</h1>
                <img className="article__image" src={article.cover} />
                {article.body.map((body, i) => this.getBodyComponent(body, i))}
            </div>
        );
    }



}