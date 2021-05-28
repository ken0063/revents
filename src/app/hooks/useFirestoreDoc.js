import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from '../async/AsyncReducer';
import { dataFromSnapshot } from '../firestore/firestoreService';

export const useFirestoreDoc = ({
  query,
  data,
  deps,
  shouldExecute = true,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!shouldExecute) return;
    dispatch(asyncActionStart());
    const unsubscribe = query().onSnapshot(
      (snapshots) => {
        if (!snapshots.exists) {
          dispatch(
            asyncActionError({
              code: 'Page Not Found',
              message: 'Page Not Found',
            }),
          );
          return;
        }
        data(dataFromSnapshot(snapshots));
        dispatch(asyncActionFinish());
      },

      (error) => dispatch(asyncActionError()),
    );
    return () => {
      unsubscribe();
    };
  }, deps); //eslint-disable-line react-hooks/exhaustive-deps
};
