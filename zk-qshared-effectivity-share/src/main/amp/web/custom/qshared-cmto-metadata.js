(function()
{
   var $html = Alfresco.util.encodeHTML,
   $isValueSet = Alfresco.util.isValueSet;

    var formatDate = Alfresco.util.formatDate,
        fromISO8601 = Alfresco.util.fromISO8601;

   if (Alfresco.DocumentList)
   {
        YAHOO.Bubbling.fire("registerRenderer",
        {
           propertyName: "QSHARED",
           renderer: function edicion_renderer(record, label)
           {
                var jsNode = record.jsNode,
                properties = jsNode.properties,
                html = "";
                var icon_state = "";

                // Get labels 
                //var label_valido_desde  = this.msg("qshared.from") || "Valido desde";
                var label_valido_hasta  = this.msg("qshared.to") || "Valid until";
                var label_url_qshared   = this.msg("qshared.label") || "Public URL";

                var to     = properties["cm:to"];

                var formattedDate1 = "";
                var formattedDate2 = "";

                if (to != undefined){
                        formattedDate2 = formatDate(fromISO8601(to.iso8601), "ddd d mmm yyyy");
                }

                html = '<span class="item">';
                html = html + ' <b>' + label_url_qshared + '</b>';
                html = html + ' &nbsp;&nbsp;&nbsp;'+label_valido_hasta+': ' + formattedDate2;
                html = html + '</span>';
                return html;
           }
        });
   }
})();
