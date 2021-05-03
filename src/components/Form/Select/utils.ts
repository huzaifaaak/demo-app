import { SelectProps } from './Select.decl';

export function getSelectedValue<T>(
    options: SelectProps<T>['options'],
    valueKey: SelectProps<T>['valueKey'],
    value?: SelectProps<T>['value']
): T | undefined {
    if (value) {
        return options.find((option) => (option[valueKey] as any) === (value as any));
    }
}
