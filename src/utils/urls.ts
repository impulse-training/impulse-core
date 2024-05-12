export function getDeepLinkUrl(
  appEnv: 'staging' | 'production',
  target: string,
  params: Record<string, unknown>
): string {
  const scheme = appEnv === 'production' ? 'impulse://' : 'impulse-test://';
  const queryParams = new URLSearchParams(
    params as Record<string, string>
  ).toString();
  return `${scheme}${target}?${queryParams}`;
}
