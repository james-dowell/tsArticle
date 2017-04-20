import {shallow} from 'enzyme';
import * as React from 'react';
import ArticlePreview from './ArticlePreview';
import {IArticle} from '../../articles';
import {Link} from 'react-router-dom';

const expect: Chai.ExpectStatic = chai.expect;

const MOCK_ARTICLE: IArticle = {
    id: 1,
    title: 'Article title',
    body: [],
    url: 'url',
    cover: 'cover'
}

describe('ArticlePreviewComponent', () => {

    let component;

    beforeEach(() => {
        component = shallow(<ArticlePreview article={MOCK_ARTICLE} />)
    });

    it('should render the article title', () => {
        let title = component.find('.article-preview__title');
        expect(title).to.have.lengthOf(1);
        expect(title.text()).to.contain(MOCK_ARTICLE.title);
    });

    it('should render the article image', () => {
        let image = component.find('.article-preview__image');
        expect(image).to.have.lengthOf(1);
        expect(image.props().src).to.equal(MOCK_ARTICLE.cover);
    });

    it('should have a link to the article', () => {
        expect(component.find(Link)).to.have.lengthOf(1);
        expect(component.find(Link).props().to).to.equal(`/article/${MOCK_ARTICLE.id}`)
    });

});