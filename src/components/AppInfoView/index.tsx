import {useEffect} from 'react';
import {message} from 'antd';
import { redirect } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { hideMessage } from '../../redux/action/common.action';
import Loader from '../Loader';

const AppInfoView = () => {
  const {loading, error, displayMessage}: { loading: boolean, error: any | null, displayMessage: string } = useSelector(({common}:{common: any}) => common);  
  const dispatch: (arg0: any) => any = useDispatch();

  useEffect(() => {
    if (error) {
      message.error(error);
      dispatch(hideMessage());
    }
  }, [error]);


  useEffect(() => {
    if (displayMessage) {
      message.success(displayMessage);
      dispatch(hideMessage());
    }
  }, [displayMessage]);

  return <>{loading ? <Loader /> : null}</>;
};

export default AppInfoView;
