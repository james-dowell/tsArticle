import * as React from 'react';
import {shallow} from 'enzyme';
import Article from './Article';
import {ARTICLES} from '../../articles';
import Pullquote from '../../components/Pullquote/Pullquote';
import Text from '../../components/Text/Text';

const expect: Chai.ExpectStatic = chai.expect;

describe('ArticleComponent', () => {

    let component;

    beforeEach(() => {
        component = shallow(<Article match={{ params: { articleId: '4' } }} />);
    });

    it('should render the article title', () => {
        let title = component.find('.article__title');
        expect(title).to.have.lengthOf(1);
        expect(title.text()).to.contain(ARTICLES[4].title);
    });

    it('should render the article cover image', () => {
        let image = component.find('.article__image');
        expect(image).to.have.lengthOf(1);
        expect(image.props().src).to.equal(ARTICLES[4].cover);
    });

    describe('rendering the body', () => {

        it('should render a pullquote element for a pullquote type', () => {
            let pullquote = component.find(Pullquote);
            let expectedPullquotes = ARTICLES[4].body.filter(b => b.type === 'pull_quote');
            expect(pullquote).to.have.lengthOf(expectedPullquotes.length);
            expect(pullquote.at(0).props().content).to.equal(expectedPullquotes[0].body);
        });

        it('should render a text element for the plaintext type', () => {
            let text = component.find(Text);
            let expectedTextComponents = ARTICLES[4].body.filter(b => b.type === 'plaintext');
            expect(text).to.have.lengthOf(expectedTextComponents.length);
            expect(text.at(0).props().content).to.equal(expectedTextComponents[0].body);
        });

        it('should render a h2 element', () => {
            let header = component.find('.heading');
            let expectedHeaders = ARTICLES[4].body.filter(b => b.type === 'h2');
            expect(header).to.have.lengthOf(expectedHeaders.length);
            expect(header.at(0).text()).to.equal(expectedHeaders[0].body);
        });

    });

});