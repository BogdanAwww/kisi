import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEvents } from '../store/actionCreators/getEvents';

const HistogramPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(getEvents())
  }, []);
  return <div>Histogram</div>;
};

export default HistogramPage;
