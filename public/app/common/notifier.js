angular.module('app').value('toastr', toastr);

angular.module('app').factory('notifier', function(toastr) {
    return {
        success: function (msg) {
            toastr.success(msg);
        },
        error: function (msg) {
            toastr.error(msg);
        }
    };
});