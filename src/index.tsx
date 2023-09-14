import { Children, isValidElement } from 'react';

export interface SwitchProps {
  /**
   * An expression whose result is matched against each Case value.
   */
  expression?: string | number | boolean | null | undefined;
  /**
   * `<Case />` or `<Default />`
   */
  children?: React.ReactNode;
}

export interface CaseProps {
  /**
   * used to match against expression. If the expression matches the value, the children will be render.
   */
  value?: string | number | boolean | null | undefined;
  /**
   * If the expression matches the value, the children will be render.
   */
  children?: React.ReactNode;
}

export interface DefaultProps {
  /**
   * if the value of expression doesn't match any of the Case's value, the children will be render.
   */
  children?: React.ReactNode;
}

const CaseName = 'Case' as const;
const DefaultName = 'Default' as const;

export function Switch(props: SwitchProps) {
  const { expression, children } = props;
  const childs = Children.toArray(children);

  let defaultCount = 0;
  let render = null;

  for (const child of childs) {
    if (isValidElement(child)) {
      const { props, type } = child;
      const { componentName } = type as any;
      if (componentName === CaseName && expression === props.value) {
        render = props.children;
        break;
      }
      if (componentName === DefaultName) {
        if (defaultCount > 0) {
          throw SyntaxError(
            `Statement of '${DefaultName}' for [Switch] must be a single one at most!`
          );
        }
        render = props.children;
        defaultCount++;
      }
    }
  }

  return render;
}

export function Case(props: CaseProps) {
  return props.children;
}
Case.componentName = CaseName;

export function Default(props: DefaultProps) {
  return props.children;
}
Default.componentName = DefaultName;

Switch.Case = Case;
Switch.Default = Default;

export default Switch;
