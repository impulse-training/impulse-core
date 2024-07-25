"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInvitationUrl = exports.folderInvitationCode = void 0;
function folderInvitationCode() {
    return Math.random().toString(36).substr(2, 11);
}
exports.folderInvitationCode = folderInvitationCode;
function getInvitationUrl(invitationCode) {
    // TODO: maybe we should do URL-encoding using encodeURIComponent rather than hard-coding it
    return ('https://wa.me/18783488606?text=Contribute%20to%20support%20group%20' +
        invitationCode);
}
exports.getInvitationUrl = getInvitationUrl;
