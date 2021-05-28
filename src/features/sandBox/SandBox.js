import React, { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { openModal } from '../../component/modal/ModalReducer';
import { decrease, increase } from './testReducer';

const SandBox = () => {
  const data = useSelector((state) => state.test.data);

  const { loading } = useSelector((state) => state.async);

  const dispatch = useDispatch();

  const [target, setTarget] = useState(null);

  const handleIncrease = (e) => {
    dispatch(increase(100));
    setTarget(e.target.name);
  };
  const handleDecrease = (e) => {
    dispatch(decrease(100));
    setTarget(e.target.name);
  };

  return (
    <Fragment>
      <h1>Testing</h1>
      <h2>Data is:{data}</h2>
      <Button
        content="Add"
        onClick={handleIncrease}
        color="green"
        loading={loading && target === 'increase'}
        name="increase"
      />
      <Button
        name="decrease"
        content="Remove"
        onClick={handleDecrease}
        color="red"
        loading={loading && target === 'decrease'}
      />
      <Button
        content="Open Modal"
        onClick={() =>
          dispatch(openModal({ modalType: 'TestModal', modalProps: { data } }))
        }
      />
    </Fragment>
  );
};

export default SandBox;
