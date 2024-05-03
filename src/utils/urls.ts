import { flatMap, isArray, isObject } from 'lodash';

export function getDeepLinkUrl(
  appEnv: 'staging' | 'production',
  target: string,
  params: Record<string, any> // Allow any type of values within the params object
): string {
  const scheme = appEnv === 'production' ? 'impulse://' : 'impulse-test://';

  function serializeParams(
    obj: Record<string, any>,
    prefix: string = ''
  ): string {
    return flatMap(obj, (value, key) => {
      const subKey = prefix ? `${prefix}[${key}]` : key;
      if (isObject(value) && !isArray(value)) {
        return serializeParams(value, subKey);
      }
      return `${encodeURIComponent(subKey)}=${encodeURIComponent(
        String(value)
      )}`;
    }).join('&');
  }

  const queryString = serializeParams(params);
  return `${scheme}${target}?${queryString}`;
}
