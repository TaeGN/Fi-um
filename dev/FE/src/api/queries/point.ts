import { getPoints } from '../point';

// 포인트 사용 내역 조회
const getPointsQuery = () => {
  return {
    queryKey: ['getPoints'],
    queryFn: getPoints,
  };
};

export { getPointsQuery };
