import * as React from 'react';
import {shallow} from 'enzyme';
import Pullquote from './Pullquote';

const expect: Chai.ExpectStatic = chai.expect;

describe('PullquoteComponent', () => {

    let component;

    beforeEach(() => {
        component = shallow(<Pullquote content={'Hello'} />);
    });

    it('should render the content in blockquote tags', () => {
        expect(component.find('.pullquote').text()).to.equal('Hello');
    });

});