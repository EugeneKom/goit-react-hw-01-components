import PropTypes from 'prop-types';
import { StatsWrapper, List } from './Statistics.syled';


function getRandomColor() {
  return '#' + Math.random().toString(16).slice(-6);
}

export const Statistics = ({title,stats}) => {
    return (<StatsWrapper>
    {title && (<h2>{title}</h2>)}
  
    <ul>
        {stats.map(({id,label,percentage}) => {
            return (
            <List key={id} color={getRandomColor()}>
            <span>{label}</span>
            <span>{percentage}%</span>
          </List>)
        })}
    </ul>
  </StatsWrapper>)
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.shape({
        label: PropTypes.string,
        percentage: PropTypes.number,
    }),
}



