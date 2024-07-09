export function getDeepLinkUrl(
  target: string,
  params: Record<string, unknown>
): string {
  const scheme = 'impulse://';
  const queryParams = new URLSearchParams(
    params as Record<string, string>
  ).toString();
  return `${scheme}${target}?${queryParams}`;
}
