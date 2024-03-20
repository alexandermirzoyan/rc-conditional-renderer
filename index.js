import If from './If';
import Else from './Else';

const getChildrenGroupOrSingleChild = ({ children, name }) => {
  if (Array.isArray(children)) {
    return children.filter((child) => child.type.displayName === name);
  }
  if (children && children.type.displayName === name) {
    return children;
  }
  return null;
};

const ConditionalRenderer = ({ children, condition }) => {
  if (condition) {
    return getChildrenGroupOrSingleChild({ children, name: 'If' });
  }
  return getChildrenGroupOrSingleChild({ children, name: 'Else' });
};

export { If, Else };
export default ConditionalRenderer;
