import React from 'react';
import { Tag } from 'antd';
import classNames from 'classnames';
import { ReactComponent as IconToggle } from '@/assets/icons/toggle.svg';
import { DefaultLogicDesc, DefaultLogicValue } from '../constants';
import './index.less';

interface Props {
  readonly?: boolean;
  disabled?: boolean;
  value: string;
  onChange?: (value: string) => void;
  style?: React.CSSProperties;
}

const LogicToggle: React.FC<Props> = ({ disabled, readonly, value, onChange, style }) => {
  const toggleValue = () => {
    onChange?.(value === DefaultLogicValue.And ? DefaultLogicValue.Or : DefaultLogicValue.And);
  };

  return (
    <div className="logic-toggle" style={style}>
      <div className="curly-brace-wrapper">
        <div
          className={classNames('curly-brace', 'curly-brace-start', {
            readonly,
          })}
        />
      </div>
      {readonly ? (
        <Tag className="logic-toggle-tag">{DefaultLogicDesc[value]}</Tag>
      ) : (
        <button
          type="button"
          onClick={toggleValue}
          className={classNames('logic-toggle-button', {
            'logic-toggle-button-disabled': disabled,
          })}
        >
          <div className="logic-toggle-button-text">{DefaultLogicDesc[value]}</div>
          <IconToggle style={{ color: '#585B60', width: 16, height: 16 }} />
        </button>
      )}
      <div className="curly-brace-wrapper">
        <div
          className={classNames('curly-brace', 'curly-brace-end', {
            readonly,
          })}
        />
      </div>
    </div>
  );
};

export default LogicToggle;
