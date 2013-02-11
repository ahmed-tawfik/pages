/**
 * Capsule for Smash specific code
 */
SmashJS = {
    /**
     * CustomHandler fur SmashPostRatings
     * @param DOM-Element
     * @param Int Post ID
     * @param Int Rating
     * @return Bool false
     */
    customPostRating: function(el, pid, rate)
    {
        var data = {
            action: 'process_ratings_json',
            pid: pid,
            rate: rate
        };

        jQuery.post('/wp-admin/admin-ajax.php', data, function(response)
		{
            if(response.status > -1)
            {
                el.innerHTML = response.ratings_users;
				return true;
            }

			alert(response.msg);
			return false;
        }, "json");

        return false;
    },

    /**
     * Sortier-Handler fuer Scope
     */
    handleSortOpts: function()
    {
        if($("#sortops select.sortby").val() == "score")
        {
            $("#sortops select.order option:eq(0)").attr("selected", "selected");
            $("#sortops select.order").attr("disabled","disabled");
            return;
        }

        $("#sortops select.order").attr("disabled","");
    },

    /**
     * Read GET parameters
     * @param String name of GET parameter
     * @return Mixed
     */
    getParam: function( name )
    {
        name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
        var regexS = "[\\?&]"+name+"=([^&#]*)";
        var regex = new RegExp( regexS );
        var results = regex.exec( window.location.href );
        if( results === null )
        {
            return null;
        }
        return results[1];
    }
}
