import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contactOperations/selectors';
import { onFilter } from 'redux/contactOperations/slice';

const Filter = () => {
  const val = useSelector(selectFilter);

  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(onFilter(e.currentTarget.value));
  };

  return (
    <label className="filter-header">
      Find contacts by name{' '}
      <input
        className="filter-input"
        type="text"
        value={val}
        onChange={changeFilter}
      />
    </label>
  );
};

export default Filter;
