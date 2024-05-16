"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInvitationUrl = exports.supportGroupInvitationCode = void 0;
function supportGroupInvitationCode() {
    return Math.random().toString(36).substr(2, 11);
}
exports.supportGroupInvitationCode = supportGroupInvitationCode;
function getInvitationUrl(invitationCode) {
    return 'https://impulse.training/support?c=' + invitationCode;
}
exports.getInvitationUrl = getInvitationUrl;
