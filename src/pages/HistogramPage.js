import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@material-ui/system';
import { getEvents } from '../store/actionCreators/getEvents';
import * as d3 from 'd3';

const HistogramPage = () => {
  const dispatch = useDispatch();
  const failEvents = useSelector((store) => store.unlockEvents);
  console.log(failEvents);
  useEffect(() => {
    dispatch(getEvents());
  }, []);

  useEffect(() => {
    if (failEvents.length !== 0) {
      let margin = { top: 20, right: 20, bottom: 70, left: 40 },
        width = 1200 - margin.left - margin.right,
        height = 600 - margin.top - margin.bottom;

      let svg = d3
        .select('#histogram')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom);
      let scale = d3
        .scaleTime()
        .domain(d3.extent(failEvents, d => new Date(d.createdAt)))
        .range([0, width])

      let ticks = scale.ticks();
      let data = ticks.reduce((prev, cur) => {
        let value = 0;
        
      }, [])
      failEvents.forEach((el) => {
        
        console.log(`${new Date(el.createdAt)} <= ${ticks[7]} = ${new Date(el.createdAt) <= ticks[7]}`)
      })
      let xAxis = d3.axisBottom().scale(scale);
      svg.append('g').call(xAxis);
      svg.selectAll('bars')
      .data(failEvents)
      .enter()
      .append('rect')
      .attr('x', (d) => {})
      
    }
  });

  return (
    <Box height="100vh" display="flex" justifyContent="center" alignItems="center">
      <div id="histogram"></div>
    </Box>
  );
};

export default HistogramPage;
