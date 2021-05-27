import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { decrease, increase } from './testReducer';

const SandBox = () => {
  const data = useSelector((state) => state.test.data);
  const dispatch = useDispatch();

  return (
    <Fragment>
      <h1>Testing</h1>
      <h2>Data is:{data}</h2>
      <Button
        content="Add"
        onClick={() => dispatch(increase(100))}
        color="green"
      />
      <Button
        content="Remove"
        onClick={() => dispatch(decrease(1))}
        color="red"
      />
    </Fragment>
  );
};

export default SandBox;
