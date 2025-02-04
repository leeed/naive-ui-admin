import { ComponentType } from '../../types/componentType';

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
