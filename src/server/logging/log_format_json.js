import LogFormat from './log_format';
import stringify from 'json-stringify-safe';

const stripColors = function (string) {
  try {
    return string.replace(/\u001b[^m]+m/g, '');
  }
  catch (err) {
    return string;
  }
};

module.exports = class KbnLoggerJsonFormat extends LogFormat {
  format(data) {
    data.message = stripColors(data.message);
    return stringify(data);
  }
};
