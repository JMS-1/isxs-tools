"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getMessage(error, defaultMessage = 'failed') {
    return ((typeof error === 'string' ? error : error && `${error.message}`) || '').trim() || defaultMessage;
}
exports.getMessage = getMessage;
//# sourceMappingURL=getMessage.js.map