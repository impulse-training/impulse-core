"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInvitationUrl = exports.strategyInvitationCode = void 0;
function strategyInvitationCode() {
    return Math.random().toString(36).substr(2, 11);
}
exports.strategyInvitationCode = strategyInvitationCode;
function getInvitationUrl(invitationCode) {
    // TODO: maybe we should do URL-encoding using encodeURIComponent rather than hard-coding it
    return 'https://wa.me/18783488606?text=Code%3A%20' + invitationCode;
}
exports.getInvitationUrl = getInvitationUrl;
