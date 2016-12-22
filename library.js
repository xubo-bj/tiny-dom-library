var noop = function() {};
module.exports = function({
    method = 'GET',
    url,
    success = noop,
    data = null,
    responseType = 'text',
    headers
}) {

    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if (ajax.readyState === 4 && ajax.status === 200) {
            success(ajax.response);
        }
    };
    ajax.open(method, url, true);
    // ajax.setRequestHeader("Content-type", "application/json");
    ajax.setRequestHeader('x-requested-with', 'XMLHttpRequest');
    if (headers) {
        Object.keys(headers).forEach(function(v) {
            ajax.setRequestHeader(v, headers[v]);
        });
    }
    ajax.responseType = responseType;
    ajax.send(data);

};
