"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInvitationUrl = exports.streamInvitationCode = void 0;
function streamInvitationCode() {
    return Math.random().toString(36).substr(2, 11);
}
exports.streamInvitationCode = streamInvitationCode;
function getInvitationUrl(invitationCode) {
    return 'https://impulse.training/support?c=' + invitationCode;
}
exports.getInvitationUrl = getInvitationUrl;
