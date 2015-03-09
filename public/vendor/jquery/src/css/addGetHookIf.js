define(function() {

function addGetHookIf( conditionFn, hookFn ) {
	// Define the hook, we'll check on the first run if it's really needed.
	return {
		getPrintByTitle: function() {
			if ( conditionFn() ) {
				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.getPrintByTitle;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return (this.getPrintByTitle = hookFn).apply( this, arguments );
		}
	};
}

return addGetHookIf;

});
