import React from 'react';
import renderer from 'react-test-renderer';

import ModalBox from './modalBox';


test('Modal Box rendering', () => {
    const description = 'Modal Body description';
    const tree = renderer.create(
        <ModalBox description={description}>
            <button level={0} />
            <button level={1} />
            <button level={2} />
            <button level={3} />
        </ModalBox>
    ).toJSON();

    expect(tree).toMatchSnapshot();
});


