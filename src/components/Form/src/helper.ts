import { ComponentType } from './types/index';

/**
 * @description: Generate placeholder
 */
export function createPlaceholderMessage(component: ComponentType) {
  if (component === 'NInput') return 'Please enter'; // 请输入 -> Please enter
  if (
    ['NPicker', 'NSelect', 'NCheckbox', 'NRadio', 'NSwitch', 'NDatePicker', 'NTimePicker'].includes(
      component
    )
  )
    return 'Please select'; // 请选择 -> Please select
  return '';
}

const DATE_TYPE = ['DatePicker', 'MonthPicker', 'WeekPicker', 'TimePicker'];

function genType() {
  return [...DATE_TYPE, 'RangePicker'];
}

/**
 * Date fields
 */
export const dateItemType = genType();

export function defaultType(component) {
  if (component === 'NInput') return '';
  if (component === 'NInputNumber') return null;
  return [
    'NPicker',
    'NSelect',
    'NCheckbox',
    'NRadio',
    'NSwitch',
    'NDatePicker',
    'NTimePicker',
  ].includes(component)
    ? ''
    : undefined;
}
