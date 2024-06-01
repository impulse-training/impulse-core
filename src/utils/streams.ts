export function streamInvitationCode() {
  return Math.random().toString(36).substr(2, 11);
}

export function getInvitationUrl(invitationCode: string | undefined) {
  return 'https://impulse.training/support?c=' + invitationCode;
}
