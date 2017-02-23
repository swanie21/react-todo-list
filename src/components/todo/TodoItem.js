import React from 'react';
import { partial } from '../../lib/utils';

export const TodoItem = props => {
  const handleToggle = partial(props.handleToggle, props.id);
  const handleRemove = partial(props.handleRemove, props.id);
  return (
    <li>
      <span onClick={handleRemove}>&#128465;</span>
      <input type="checkbox" onChange={handleToggle} checked={props.isComplete}/>{props.name}
    </li>
  )
}

TodoItem.propTypes = {
  name: React.PropTypes.string.isRequired,
  isComplete: React.PropTypes.bool,
  id: React.PropTypes.number.isRequired
}
