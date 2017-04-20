import * as React from 'react';
import {ARTICLES} from '../../articles';
import ArticlePreview from '../../components/ArticlePreview/ArticlePreview';


export default () => (
    <div>
        {ARTICLES.map((a, i) => <ArticlePreview key={i} article={a} />)}
    </div>
);