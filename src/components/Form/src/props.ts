import type { CSSProperties, PropType } from 'vue';
import { FormSchema } from './types/form';
import type { GridProps, GridItemProps } from 'naive-ui/lib/grid';
import type { ButtonProps } from 'naive-ui/lib/button';
import { propTypes } from '@/utils/propTypes';

export const basicProps = {
  // Label width (fixed width)
  labelWidth: {
    type: [Number, String] as PropType<number | string>,
    default: 80,
  },
  // Form configuration rules
  schemas: {
    type: [Array] as PropType<FormSchema[]>,
    default: () => [],
  },
  // Layout method
  layout: {
    type: String,
    default: 'inline',
  },
  // Whether to display as inline form
  inline: {
    type: Boolean,
    default: false,
  },
  // Size
  size: {
    type: String,
    default: 'medium',
  },
  // Label position
  labelPlacement: {
    type: String,
    default: 'left',
  },
  // Whether the component is 100% wide
  isFull: {
    type: Boolean,
    default: true,
  },
  // Whether to display action buttons (query/reset)
  showActionButtonGroup: propTypes.bool.def(true),
  // Show reset button
  showResetButton: propTypes.bool.def(true),
  // Reset button configuration
  resetButtonOptions: Object as PropType<Partial<ButtonProps>>,
  // Show submit button
  showSubmitButton: propTypes.bool.def(true),
  // Submit button configuration
  submitButtonOptions: Object as PropType<Partial<ButtonProps>>,
  // Expand/collapse button
  showAdvancedButton: propTypes.bool.def(true),
  // Submit button text
  submitButtonText: {
    type: String,
    default: 'Search', // 查询 -> Search
  },
  // Reset button text
  resetButtonText: {
    type: String,
    default: 'Reset', // 重置 -> Reset
  },
  // Grid configuration
  gridProps: Object as PropType<GridProps>,
  // Grid item configuration
  giProps: Object as PropType<GridItemProps>,
  // Grid style
  baseGridStyle: {
    type: Object as PropType<CSSProperties>,
  },
  // Whether to collapse
  collapsed: {
    type: Boolean,
    default: false,
  },
  // Number of rows to display by default
  collapsedRows: {
    type: Number,
    default: 1,
  },
};
