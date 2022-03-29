import { FC } from 'react';
import { NotFoundProps } from './not-found.t';
import { NotFoundComp } from '../../components';

const NotFound: FC<NotFoundProps> = ({ history }) => {
  const { replace } = history;
  return <NotFoundComp replace={replace} />;
};

export default NotFound;
