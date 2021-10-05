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
      let x = d3
        .scaleTime()
        .domain([new Date(failEvents[failEvents.length - 1].createdAt), Date.now()])
        .range([0, width]);

      let ticks = x.ticks();

      const data = ticks.reduce((prev, cur, i) => {
        let count = 0;
        failEvents.forEach((e) => {
          if (new Date(e.createdAt) <= cur && new Date(e.createdAt) > prev[i - 1]?.date) {
            count++;
          }
        });
        return [
          ...prev,
          {
            date: cur,
            value: count,
          },
        ];
      }, []);

      let xAxis = d3.axisBottom().scale(x);
      svg.append('g').call(xAxis);
      svg
        .append('g')
        .selectAll('bar')
        .data(data)
        .enter()
        .append('rect')
        .attr('fill', 'steelblue')
        .attr('x', (d) => x(d.date))
        .attr('width', () => 100)
        .attr('y', (d) => 20)
        .attr('height', (d) => d.value * 100);
    }
  });

  return (
    <Box height="100vh" display="flex" justifyContent="center" alignItems="center">
      <div id="histogram"></div>
    </Box>
  );
};

export default HistogramPage;
