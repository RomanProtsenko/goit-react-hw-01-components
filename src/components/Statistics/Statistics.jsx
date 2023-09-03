import styled from './Statistics.module.css';
import PropTypes from "prop-types";
export const Statistics = ({ title, stats }) => {
  return (
    <section className={styled.statistics}>
      {title && <h2 className={styled.title}>{title}</h2>}

      <ul className={styled.list}>
        {stats.map(({ id, label, percentage }) => (
          <li className={styled.item} key={id}>
            <span className={styled.label}>{label}</span>
            <span className={styled.percentage}>{percentage}%</span>
          </li>))}
      </ul>
    </section>)
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired
};