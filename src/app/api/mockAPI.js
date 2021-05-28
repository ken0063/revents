import { delay } from '../../utils/util';
import { sampleData } from './sampleData';

export const fetchSampleData = () => {
  return delay(2000).then(function () {
    return Promise.resolve(sampleData);
  });
};
