import { PropTypes } from 'prop-types';
import css from './Statistics.module.css';

export default function StatisticsItem({ data }) {
  return (
    <li className={css.item} style={{
            backgroundColor: getRandomHexColor(),
          }}>
      <span className={css.label}>{data.label}</span>
      <span className={css.percentage}>{data.percentage}%</span>
    </li>
  );
}

StatisticsItem.propTypes = {
  data: PropTypes.object,
};

function getRandomHexColor() {
  let bgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return bgColor;
}