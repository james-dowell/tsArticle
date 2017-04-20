import * as React from 'react';
import {shallow} from 'enzyme';
import Text from './Text';

const expect: Chai.ExpectStatic = chai.expect;

describe('TextComponent', () => {

    let component;

    beforeEach(() => {
        component = shallow(<Text content={'Some text content'} />);
    });

    it('should render the content in blockquote tags', () => {
        expect(component.find('.text').text()).to.equal('Some text content');
    });

});