interface DropdownOptions {
  label: string;
  value: string;
}

export const dropdownOptions: DropdownOptions[] = [
  { value: 'quartal', label: 'Quarterly' },
  { value: 'month', label: 'Last 30 days' },
  { value: 'week', label: 'Last week' },
  { value: 'day', label: 'Today' },
];
