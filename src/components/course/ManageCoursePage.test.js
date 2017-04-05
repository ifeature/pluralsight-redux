import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';

import ManageCoursePage from './ManageCoursePage';

xdescribe('Manage Course Page', () => {
    it('sets error message when trying to save empty title', () => {
        const wrapper = mount(<ManageCoursePage />);
    });
});