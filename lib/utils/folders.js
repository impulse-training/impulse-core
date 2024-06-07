"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInvitationUrl = exports.folderInvitationCode = void 0;
function folderInvitationCode() {
    return Math.random().toString(36).substr(2, 11);
}
exports.folderInvitationCode = folderInvitationCode;
function getInvitationUrl(invitationCode) {
    return 'https://impulse.training/support?c=' + invitationCode;
}
exports.getInvitationUrl = getInvitationUrl;
