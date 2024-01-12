import React from 'react';
import PropTypes from 'prop-types'
import 'stylesheets/ToggleSwitch.css'


const ToggleSwitch = ({ id, name, checked, onChange, optionLabels, small, disabled }) => {

return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        className="toggle-switch-checkbox"
        // Can use a plain name/id but that means that only one toggle can be on the page at a time.
        // Using props means you can dynamically pass different values in, meaning that there can be multiple toggle instances. 
        name={name}
        id={id}
        checked={checked}
        onChange={e => onChange(e.target.checked)}
      />

      <label className="toggle-switch-label" htmlFor={id}>
        <span className="toggle-switch-inner" data-yes="Yes" data-no="No"/>
        <span className="toggle-switch-switch" />
      </label>
    </div>
  );
}

ToggleSwitch.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  optionLabels: PropTypes.array,
  small: PropTypes.bool,
  disabled: PropTypes.bool
};

export default ToggleSwitch;